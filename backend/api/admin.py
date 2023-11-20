from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
# Register your models here.
from api.models import *


class AutomobileAdmin(admin.ModelAdmin):
    pass
admin.site.register(Automobile, AutomobileAdmin)

class AvisAdmin(admin.ModelAdmin):
    pass

admin.site.register(Avis, AvisAdmin)

class ServiceAdmin(admin.ModelAdmin):
    pass

admin.site.register(Service, ServiceAdmin)

class HoraireAdmin(admin.ModelAdmin):
    list_display = ('jour', 'ferme', 'heure_ouverture_matin', 'heure_fermeture_matin', 'heure_ouverture_apresm', 'heure_fermeture_apresm')

admin.site.register(Horaire, HoraireAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('email', 'nom', 'prenom', 'telephone', 'message')

admin.site.register(Contact, ContactAdmin)

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),
        }),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)


admin.site.register(CustomUser, CustomUserAdmin)