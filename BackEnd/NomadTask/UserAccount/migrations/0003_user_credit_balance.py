# Generated by Django 4.1 on 2022-09-14 02:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAccount', '0002_user_trust_score'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='credit_balance',
            field=models.FloatField(default=0.0),
        ),
    ]
