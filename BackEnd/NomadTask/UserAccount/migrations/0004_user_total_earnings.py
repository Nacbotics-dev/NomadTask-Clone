# Generated by Django 4.1 on 2022-09-14 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserAccount', '0003_user_credit_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='total_earnings',
            field=models.FloatField(default=0.0),
        ),
    ]