# Generated by Django 4.1 on 2022-09-14 01:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Task', '0013_alter_task_task_duration_alter_task_worker_score'),
    ]

    operations = [
        migrations.AddField(
            model_name='taskproof',
            name='proof_type',
            field=models.CharField(choices=[('url_proof', 'url_proof'), ('text_proof', 'text_proof'), ('video_proof', 'video_proof'), ('screenshot_proof', 'screenshot_proof')], default='screenshot_proof', max_length=100),
        ),
        migrations.AlterField(
            model_name='task',
            name='task_duration',
            field=models.DateTimeField(default=datetime.datetime(2022, 9, 17, 1, 52, 39, 8768)),
        ),
    ]
