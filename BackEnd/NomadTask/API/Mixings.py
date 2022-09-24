from rest_framework import permissions
from django.core.exceptions import PermissionDenied



class UserInGroup(permissions.BasePermission):

    def has_permission(self, request, view):
        permitted_groups = view.allowed_groups
    
        if not request.user.is_authenticated:
            raise PermissionDenied
        else:
            user_groups = []
            for group in request.user.groups.values_list('name', flat=True):
                user_groups.append(group)
            
            if len(set(user_groups).intersection(permitted_groups)) <= 0:
                raise PermissionDenied
        
        return super(UserInGroup,self).has_permission(request, view)
