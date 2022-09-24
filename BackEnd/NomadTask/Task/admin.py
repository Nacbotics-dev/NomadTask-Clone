from django.contrib import admin
from .models import Task,TaskProof,CompletedTasks

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    ordering = ('-date_created',)
    search_fields = ('creator','task_id','task_title',)
    list_display = ['task_id','creator','amount_distributed','task_budget','task_title','task_type','proof_type','task_active','date_created']



@admin.register(TaskProof)
class TaskProofAdmin(admin.ModelAdmin):
    search_fields = ('TaskId',)
    list_display = ('TaskId','proof_type')


@admin.register(CompletedTasks)
class CompletedTasksAdmin(admin.ModelAdmin):
    search_fields = ('TaskId','participant',)
    list_display = ('TaskId','participant','task_status','task_deadline')
    ordering = ('-task_deadline',)

