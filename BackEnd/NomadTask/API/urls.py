from django.urls import path,include
from rest_framework_simplejwt.views import (TokenRefreshView,)
from .views import (CreateAccount,CreateTask,TaskList,TaskDetail,CreditBalance,
CountryList,CustomTokenObtainPairView,ChangePassword,MyTaskList,MyProfile,
UpdateProfile,MyTrustScore,MyWorkerTaskList,JoinTask,RateTask,SubmitProof,TaskDetailForCreator)


urlpatterns =[
    path('my-tasks/', MyTaskList.as_view(), name='my-tasks'),
    path('my-profile/', MyProfile.as_view(), name='my-profile'),
    path('create-task/', CreateTask.as_view(), name='create-task'),
    path('create-user/', CreateAccount.as_view(), name='create-user'),
    path('join-task/', JoinTask.as_view(), name='join-task'),
    path('rate-task/', RateTask.as_view(), name='rate-task'),
    path('submit-proof/', SubmitProof.as_view(), name='submit-proof'),
    path('change-password/', ChangePassword.as_view(), name='change-password'),
    path('credit-balance/', CreditBalance.as_view(), name='credit-balance'),
    path('trust-score/', MyTrustScore.as_view(), name='trust-score'),
    path('my-worker-tasks/', MyWorkerTaskList.as_view(), name='my-worker-tasks'),
    path('available-tasks/', TaskList.as_view(), name='available-tasks'),
    path('update-profile/', UpdateProfile.as_view(), name='update-profile'),
    path('task-detail-creator/<task_id>', TaskDetailForCreator.as_view(), name='task-detail-creator'),
    path('task-detail/<task_id>', TaskDetail.as_view(), name='task-detail'),
    path('list-user-countries/', CountryList.as_view(), name='list-user-countries'),
    path('refresh-token/', TokenRefreshView.as_view(), name='token_refresh'),
    path('authenticate/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]