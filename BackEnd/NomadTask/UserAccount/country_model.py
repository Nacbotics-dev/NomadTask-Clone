from django.db import models

class Country(models.Model):
    country_name = models.CharField(max_length=100,blank=False)
    country_code = models.CharField(max_length=10,blank=False,primary_key=True)

    def __str__(self) -> str:
        return(self.country_code)