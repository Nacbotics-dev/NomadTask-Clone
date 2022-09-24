import uuid
from django.db import models
from UserAccount.models import User
from API.Misc import return_date_format
from UserAccount.country_model import Country
from django_userforeignkey.models.fields import UserForeignKey


def task_directory_path(instance,filename):
    return 'task_{0}/{1}'.format(instance.task_id, filename)


def task_proof_directory_path(instance,filename):
    return 'task_proof_{0}/{1}'.format(instance.TaskId, filename)

class Task(models.Model):
    PROOF_TYPE = [
            ("url_proof","url_proof"),
            ("text_proof","text_proof"),
            ("video_proof","video_proof"),
            ("screenshot_proof","screenshot_proof"),
            ]
    
    TASk_TYPE = [
            ("review","review"),
            ("survey","survey"),
            ("custom","custom"),
            ("download","download"),
            ("channel_boost","channel_boost"),
            ]

    creator = UserForeignKey(auto_user_add=True)
    product_link = models.URLField(blank=False)
    task_reward = models.FloatField(default=0.2)
    worker_score = models.IntegerField(default=80)
    task_budget = models.FloatField(default=10.0)
    task_active = models.BooleanField(default=True)
    task_instruction = models.TextField(blank=False)
    amount_distributed = models.FloatField(default=0.0)
    allowed_countries = models.ManyToManyField(Country)
    conceal_product_link = models.BooleanField(default=True)
    task_title = models.CharField(blank=False,max_length=255)
    task_duration = models.DateTimeField(default=return_date_format('3days'))
    task_deadline = models.CharField(blank=False,max_length=100,default='4hours')
    task_id = models.UUIDField(default=uuid.uuid4, editable=False,primary_key=True)
    product_preview = models.ImageField(upload_to=task_directory_path,null=True,blank=True)
    date_created = models.DateTimeField(auto_now_add=True,null=False,editable=False,blank=False)
    task_type = models.CharField(blank=False,max_length=100,choices=TASk_TYPE,default="download")
    screenshot_proof_example = models.ImageField(upload_to=task_directory_path,null=True,blank=True)
    proof_type = models.CharField(blank=False,max_length=100,choices=PROOF_TYPE,default="screenshot_proof")
    

    def __str__(self) -> str:
        return(str(self.task_id))




class CompletedTasks(models.Model):
    """
        This is the models that holds all tasks that a user have done
    """

    Task_STATUS = [
        ("Working","Working"),
        # ("Pending","Pending"),
        ("Approved","Approved"),
        ("Rejected","Rejected"),
    ]

    Task_Review = [
        ("Neutral","Neutral"),
        ("Good","Good"),
        ("Bad","Bad"),
    ]

    my_task = models.ForeignKey(Task, on_delete=models.CASCADE)
    participant = models.ForeignKey(User, on_delete=models.CASCADE)
    task_deadline = models.DateTimeField(blank=False,null=False)
    user_task_reward = models.FloatField(default=0.0) #This reward is giving based on the user's trust score
    TaskId = models.UUIDField(default=uuid.uuid4, editable=False,primary_key=True)
    task_status = models.CharField(max_length=100,choices=Task_STATUS,default="Working")
    task_review = models.CharField(max_length=100,choices=Task_Review,default="Neutral")
    
    def __str__(self):
        return(str(self.TaskId))


class TaskProof(models.Model):
    PROOF_TYPE = [
            ("url_proof","url_proof"),
            ("text_proof","text_proof"),
            ("video_proof","video_proof"),
            ("screenshot_proof","screenshot_proof"),
            ]
    
    TaskId = models.ForeignKey(CompletedTasks, on_delete=models.CASCADE)
    proof_type = models.CharField(blank=False,max_length=100,choices=PROOF_TYPE,default="screenshot_proof")
    screenshot_proof = models.ImageField(upload_to=task_proof_directory_path,null=True,blank=True)
    video_proof = models.FileField(null=True,upload_to=task_proof_directory_path)
    url_proof = models.URLField(blank=True)
    text_proof = models.TextField(blank=True)

    def __str__(self) -> str:
        return(str(self.TaskId))
