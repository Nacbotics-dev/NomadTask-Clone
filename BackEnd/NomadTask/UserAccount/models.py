import uuid,pycountry
from django.db import models
from .manager import UserManager
from .country_model import Country
from django.db.models import signals
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin



class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.UUIDField(default=uuid.uuid4, editable=False)
    email = models.EmailField(_('email address'),unique=True,primary_key=True)
    full_name = models.CharField(max_length=200,blank=False)
    year_of_birth = models.IntegerField()
    date_joined = models.DateTimeField(auto_now_add=True, null=False)# date a user joined
    gender = models.CharField(blank=False,default='Male',max_length=20)
    country = models.ForeignKey(Country,on_delete=models.SET_NULL,null=True)
    newsletter = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    credit_balance = models.FloatField(default=0.0)
    total_earnings = models.FloatField(default=0.0)
    trust_score = models.IntegerField(default=100)
    email_verified = models.BooleanField(default=False)


    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name','year_of_birth','gender']

    def __str__(self) -> str:
        return self.email
    

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    
    def has_perms(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True
    
    def has_module_perm(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return app_label

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return app_label


def CreateNewCountry(sender, instance, created, **kwargs):
    if created:
        try:
            country = pycountry.countries.lookup(str(instance.country))
        except:
            country = pycountry.countries.lookup(str('NGA'))
        
        country,created =  Country.objects.get_or_create(country_code=country.alpha_3,country_name=country.name)

        instance.country = country
        instance.save()
        

signals.post_save.connect(CreateNewCountry, sender=User, weak=False,
                          dispatch_uid='models.Create_New_User_Country')

