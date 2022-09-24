def get_object_or_none(object,**kwargs):
   try:
       return(object.objects.get(**kwargs))
   except object.DoesNotExist:
       return(None)