# Generated by Django 4.1 on 2022-09-14 16:09
import uuid
import Task.models
import datetime
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Task', '0015_alter_task_task_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='completedtasks',
            name='task_proof',
        ),
        migrations.AddField(
            model_name='taskproof',
            name='TaskId',
            field=models.ForeignKey(default=uuid.UUID('d5cb4a1b-f772-4025-9aab-90d21185ace1'), on_delete=django.db.models.deletion.CASCADE, to='Task.completedtasks'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='task',
            name='task_duration',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 17, 16, 7, 56, 987836)),
        ),
        migrations.AlterField(
            model_name='taskproof',
            name='screenshot_proof',
            field=models.ImageField(blank=True, null=True, upload_to=Task.models.task_proof_directory_path),
        ),
        migrations.AlterField(
            model_name='taskproof',
            name='video_proof',
            field=models.FileField(null=True, upload_to=Task.models.task_proof_directory_path),
        ),
    ]
