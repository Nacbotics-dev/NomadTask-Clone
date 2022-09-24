import pycountry,uuid
from rest_framework import status
from rest_framework import generics
from UserAccount.models import User
from rest_framework import permissions
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from UserAccount.country_model import Country
from Task.models import Task,TaskProof,CompletedTasks
from django.contrib.auth import update_session_auth_hash
from rest_framework_simplejwt.views import TokenObtainPairView
from .Misc import (useDefault,return_date_format,gather_related_data,get_object_or_none,user_reward,reward_ratio,returnBoolean)
from .serializers import (UserSerializer,ChangePasswordSerializer,CustomTokenObtainPairSerializer,CountrySerializer,
NewUserSerializer,TaskSerializer,CreateTaskSerializer,CompletedTaskSerializer,TaskProofSerializer)



class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        data = super(CustomTokenObtainPairView,self).post(request, *args, **kwargs).data
        return(Response(data,status=status.HTTP_200_OK))

class CreateAccount(generics.CreateAPIView):
    serializer_class = NewUserSerializer
    permission_classes = [permissions.AllowAny]


    def post(self, request, *args, **kwargs):
        formData = dict(request.data)
        formData['gender'] = formData['Gender']
        formData['year_of_birth'] = formData['Year Of Birth']
        
        
        try:
            country = pycountry.countries.lookup(formData['country'])
            my_country,created = Country.objects.get_or_create(country_code=country.alpha_3,country_name=country.name)
            formData['country'] = my_country.country_code
        except:
            pass

        serializer = self.serializer_class(data=formData)

        if serializer.is_valid():
            serializer.save()
            return Response({'status':'success'},status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

class CreateTask(generics.CreateAPIView):
    serializer_class = CreateTaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        formData = {k: v for k, v in request.data.items()}
        defaultData = useDefault(formData)
        formData.update(defaultData)
        formData.update(gather_related_data(formData,'allowed_countries'))

        serializer = self.serializer_class(data=formData)

        if serializer.is_valid():
            serializer.save(creator=request.user,task_active=False)
            return Response({'status':'success'},status=status.HTTP_200_OK)
        
        return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

class TaskDetailForCreator(generics.RetrieveAPIView):
    """This Simply returns the task detail for the task creator to edit"""
    serializer_class = CreateTaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request,task_id, *args, **kwargs):
        response = {}
        taskId = hex(int(task_id))[2:]

        task = Task.objects.filter(creator=request.user).filter(task_id__contains=taskId)

        # print(task,'~~~~~~~~~~~')
        if task.exists():
            response = self.serializer_class(task.first()).data
        else:
            response = {'error':'Not Found'}

        return Response(response)

class ChangePassword(generics.UpdateAPIView):
    model = User
    serializer_class = ChangePasswordSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        user = User.objects.get(email=request.user)
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            #Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            update_session_auth_hash(request,user)
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)
        return Response(serializer.errors)

class UpdateProfile(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, *args, **kwargs):
        formData = dict(request.data)
        formData['newsletter'] = returnBoolean(formData['newsletter'])
        user = get_object_or_404(User,email=request.user)

        serializer = self.serializer_class(user,data=formData)

        if serializer.is_valid():
            serializer.save()
        else:
            return(Response({'success':False,'errors':serializer.errors},status=status.HTTP_400_BAD_REQUEST))
        return(Response({'success':True},status=status.HTTP_200_OK))

class MyProfile(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


    def get(self, request, *args, **kwargs):
        response = self.serializer_class(request.user).data
        return Response(response) 

class CreditBalance(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        response = {}
        response['balance'] = request.user.credit_balance
        response['user_name'] = request.user.full_name
        response['total_earnings'] = request.user.total_earnings
        response['date_joined'] = request.user.date_joined.strftime('%B %-d, %Y')
        return Response(response,status=status.HTTP_200_OK)

class MyTrustScore(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        response = {}
        trust_score = request.user.trust_score
        response['reward_ratio'] = float(reward_ratio(trust_score))
        response['trust_score'] = trust_score
        return Response(response) 

class TaskList(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = Task.objects.all().order_by('-date_created')
        return(queryset)
    
    def get(self, request, *args, **kwargs):
        response = {}
        if request.user.is_authenticated:
            trust_score = request.user.trust_score
        else:
            trust_score = 100
        tasks = super().get(request, *args, **kwargs).data
        response.update({'trust_score':trust_score,'tasks':tasks})

        return Response(response,status=status.HTTP_202_ACCEPTED)

class MyWorkerTaskList(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = Task.objects.filter(completedtasks__participant=self.request.user)
        return(queryset)

class JoinTask(generics.CreateAPIView):
    serializer_class = CompletedTaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        taskId = request.data['taskID']

        taskId = hex(int(taskId))[2:]
        trust_score = request.user.trust_score
        task = get_object_or_404(Task,task_id__icontains=taskId)

        user_task_reward = round(user_reward(trust_score,task.task_reward),2)

        task_deadline = return_date_format(task.task_deadline)
        data = {'my_task':uuid.UUID(str(task)),'participant':request.user,'task_deadline':task_deadline,'user_task_reward':user_task_reward}

        if int(trust_score) >= int(task.worker_score):
            serializer = self.serializer_class(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response({'status':'success'},status=status.HTTP_200_OK)
            else:
                return Response({'status':'failed'},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'status':'failed'},status=status.HTTP_403_FORBIDDEN)

class RateTask(generics.UpdateAPIView):
    serializer_class = CompletedTaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        taskId = request.data['taskID']
        rating = request.data['rating']
        taskId = hex(int(taskId))[2:]
        task = CompletedTasks.objects.filter(participant=self.request.user).filter(my_task__task_id__contains=taskId).first()

        if rating == 'yes':
            task_review = 'Good'
        else:
            task_review = 'Bad'

        if task:
            if task.task_review == task_review:
                task_review = 'Neutral'

            response = {'task_review':task_review}
            serializer = self.serializer_class(task,data=response,partial=True)

            if serializer.is_valid():
                serializer.save()
                TaskReview = Task.objects.filter(completedtasks__my_task=task.my_task)
                good_review = TaskReview.filter(completedtasks__task_review='Good').count()
                bad_review = TaskReview.filter(completedtasks__task_review='Bad').count()

                reviews = {'yes':good_review,'no':bad_review}
                return Response(reviews,status=status.HTTP_200_OK)
            else:
                return Response({'error':serializer.errors},status=status.HTTP_406_NOT_ACCEPTABLE)
        
        return Response({'error':'task not found','yes':0,'no':0},status=status.HTTP_404_NOT_FOUND)
              
class MyTaskList(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Task.objects.filter(creator=self.request.user).order_by('-date_created')
        return(queryset)

class TaskDetail(generics.RetrieveAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request,task_id, *args, **kwargs):
        response = {}
        taskId = hex(int(task_id))[2:]

        try:
            trust_score = request.user.trust_score
        except:
            trust_score = 100
        
        task = get_object_or_none(Task,task_id__contains=taskId)
        participant = get_object_or_none(CompletedTasks,participant=request.user,my_task=task)

        if task:
            response = self.serializer_class(task).data

            if participant:
                response['joined_task'] = True
                response['task_status'] = participant.task_status
                response['task_deadline'] = participant.task_deadline
            else:
                response['joined_task'] = False
            
            response['worker_score'] = task.worker_score
            response['my_trust_score'] = trust_score
            response['reward_ratio'] = float(reward_ratio(trust_score))
            response['user_reward'] = round(user_reward(trust_score,task.task_reward),2)
        else:
            response.update({'error':'Not Found'})

        return Response(response)

class SubmitProof(generics.UpdateAPIView):
    serializer_class = TaskProofSerializer
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, *args, **kwargs):
        formData = {k: v for k, v in request.data.items()}
        taskId = request.data['taskID']
        taskId = hex(int(taskId))[2:]
        task = CompletedTasks.objects.filter(participant=self.request.user).filter(my_task__task_id__contains=taskId).first()
        
        if task:
            myTask = Task.objects.get(task_id=task.my_task)
            formData.update({'proof_type':task.my_task.proof_type,'TaskId':uuid.UUID(str(task))})
            serializer =  self.serializer_class(data=formData)

            if serializer.is_valid():
                proof = serializer.save()
                task.task_status='Approved'
                task.task_proof = proof
                task.save()

                myTask.amount_distributed += task.user_task_reward
                myTask.save()

                request.user.total_earnings += task.user_task_reward
                request.user.credit_balance += task.user_task_reward
                request.user.save()
                return Response({'status':'success'},status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors,status=status.HTTP_406_NOT_ACCEPTABLE)

        return Response({'status':'failed'},status=status.HTTP_404_NOT_FOUND)

class CountryList(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = [permissions.AllowAny]


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        response = {}
        response['total_users'] = User.objects.all().count()
        serializer = self.get_serializer(queryset,many=True).data
        response['countries'] = serializer
        return Response(response)
    