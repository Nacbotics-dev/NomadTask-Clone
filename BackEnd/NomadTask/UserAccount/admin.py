from .models import User
from django.contrib import admin
from .country_model import Country
from django.shortcuts import get_object_or_404
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserChangeForm,CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class UserAdmin(BaseUserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm
    
    model = User

    list_display = ('email','full_name','year_of_birth','gender','country','credit_balance','total_earnings','trust_score','date_joined')
    list_filter = ('email','year_of_birth','gender','is_admin','date_joined')

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('full_name','year_of_birth','trust_score','gender','country','credit_balance','total_earnings')}),
        ('Status',{'fields':('is_admin','newsletter','is_active','is_staff','email_verified',)}),
        ('Permissions', {'fields': ('groups','user_permissions')})
        
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','password','full_name','year_of_birth','gender','country', 'password1', 'password2'),
        }),
    )


    search_fields = ('email','user_id')
    ordering = ('email',)

    def get_readonly_fields(self, request, obj=None):
        
        if request.user:
            if not request.user.is_admin:
                return[f.name for f in self.model._meta.fields]     
        return super(UserAdmin, self).get_readonly_fields(
            request, obj=obj)

    def has_add_permission(self, request, obj=None):
        if not request.user.is_admin:
            return False
        return True

    def has_view_permission(self, request, obj=None):
        if not request.user.is_staff:
            return False
        return True

    def has_change_permission(self, request, obj=None):
        if not request.user.is_admin:
            return False
        return True
        
        
        
    def has_delete_permission(self, request, obj=None):
        if not request.user.is_admin:
            return False
        return True
    
    def current_user(self, request):
        current_user = get_object_or_404(User, email = request)
        return(current_user)

admin.site.register(User, UserAdmin)


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    search_fields = ('country_name','country_code',)
    list_display = ['country_name','country_code']
