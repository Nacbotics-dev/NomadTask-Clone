import pycountry
from UserAccount.models import User
from rest_framework import serializers
from UserAccount.country_model import Country
from Task.models import Task,TaskProof,CompletedTasks
from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Customizes JWT default Serializer to add more information about user"""
    def validate(self, attrs):
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        return data

class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['date_joined','is_active','is_admin','is_staff','email_verified']
    
    def create(self, validated_data):
        user = User(
            email = validated_data['email'],
            full_name =validated_data['full_name'],
            year_of_birth = validated_data['year_of_birth'],
            gender = validated_data['gender'],
            country = validated_data['country'],
            )
        
        user.set_password(validated_data['password'])
        user.save()
        return(user)

class ChangePasswordSerializer(serializers.Serializer):
    model = User
    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password','date_joined','user_id','last_login','is_superuser','is_active','is_admin','is_staff','user_permissions','trust_score','groups']

class CountrySerializer(serializers.ModelSerializer):
    total_users = serializers.SerializerMethodField()
    country_flag = serializers.SerializerMethodField()
    class Meta:
        model = Country
        fields = ('country_name','country_code','total_users','country_flag')

    def get_total_users(self, obj):
        total_users = Country.objects.filter(user__country=obj).count()
        return(total_users)
    
    def get_country_flag(self,obj):
        country = pycountry.countries.lookup(str(obj))
        return(country.flag)

class CreateTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('__all__')
        exclude = ['task_id','product_preview','creator','task_duration',
        'conceal_product_link','amount_distributed']

class TaskSerializer(serializers.ModelSerializer):
    participants = serializers.SerializerMethodField()
    taskId = serializers.SerializerMethodField()
    class Meta:
        model = Task
        # fields = ('__all__')
        exclude = ['task_id','product_preview','creator','task_duration',
        'conceal_product_link','amount_distributed']
    
    def get_participants(self, obj):
        participants = Task.objects.filter(completedtasks__my_task=obj).count()
        return(participants)
    
    def get_taskId(self,obj):
        return(int(obj.task_id.time_low))
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['date_created'] = naturaltime(instance.date_created)
        participants = Task.objects.filter(completedtasks__my_task=instance)
        task_participants = CompletedTasks.objects.filter(my_task=instance)

        total_workers = participants.count()
        if total_workers == 0:
            total_workers = 1
        

        try:
            user = self.context.get("request").user
        except:
            user = 'AnonymousUser'

        worker_status = task_participants.filter(participant=user)

        if worker_status.exists():

            representation.update({'task_status':worker_status.first().task_status})

        good_review = participants.filter(completedtasks__task_review='Good').count()
        bad_review = participants.filter(completedtasks__task_review='Bad').count()

        reviews = {'yes':good_review,'no':bad_review}


        working_participants = participants.filter(completedtasks__task_status='Working')
        working_participants_percentage = round((working_participants.count()*100)/total_workers,2)
        approved_participants = participants.filter(completedtasks__task_status='Approved')
        approved_participants_percentage = round((approved_participants.count()*100)/total_workers,2)
        rejected_participants = participants.filter(completedtasks__task_status='Rejected')
        rejected_participants_percentage = round((rejected_participants.count()*100)/total_workers,2)

        working_rewards = sum([task.user_task_reward for task in task_participants])
        working_reward_percentage = round((working_rewards*100)/instance.task_budget,2)
        distributed_percentage = round((instance.amount_distributed*100)/instance.task_budget,2)

        representation['reviews'] = reviews
        representation['working_participants'] = working_participants.count()
        representation['approved_participants'] = approved_participants.count()
        representation['rejected_participants'] = rejected_participants.count()
        representation['percentage_left'] = (100-distributed_percentage)-working_reward_percentage
        representation['working_reward_percentage'] = (100-working_reward_percentage)
        representation['working_participants_percentage'] = working_participants_percentage
        representation['approved_participants_percentage'] = approved_participants_percentage
        representation['rejected_participants_percentage'] = rejected_participants_percentage

        if instance.conceal_product_link:
            taskId = int(instance.task_id.time_low)
            representation['product_link'] = f'https://nomadtask.com/link/{taskId}'
        
        return representation

class CompletedTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedTasks
        fields = ('__all__')


class TaskProofSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskProof
        fields = ('__all__')