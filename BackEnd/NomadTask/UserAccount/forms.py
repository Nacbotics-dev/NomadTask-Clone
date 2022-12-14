from .models import User
from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.forms import ReadOnlyPasswordHashField

class CustomUserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""
        
    password1 = forms.CharField(label='Password', widget=forms.TextInput(attrs={
            "placeholder": "password",
            "class":"input100",
            "type":"password",
        }))
        
    password2 = forms.CharField(label='Password confirmation', widget=forms.TextInput(attrs={
            "placeholder": "confirm password",
            "class":"input100",
            "type":"password",
        }))
    
        
    class Meta:
        model = User
        fields = ('email','full_name','year_of_birth','gender','country')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user

class CustomUserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    disabled password hash display field.
    """
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email','password','full_name','year_of_birth','gender','country')