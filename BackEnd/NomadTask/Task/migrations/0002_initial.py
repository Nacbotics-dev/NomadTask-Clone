# Generated by Django 4.1 on 2022-09-10 14:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_userforeignkey.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('UserAccount', '0001_initial'),
        ('Task', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='allowed_countries',
            field=models.ManyToManyField(to='UserAccount.country'),
        ),
        migrations.AddField(
            model_name='task',
            name='creator',
            field=django_userforeignkey.models.fields.UserForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='completedtasks',
            name='my_task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Task.task'),
        ),
        migrations.AddField(
            model_name='completedtasks',
            name='participant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='completedtasks',
            name='task_proof',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Task.taskproof'),
        ),
    ]
