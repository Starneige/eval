from django.contrib import admin

# Register your models here.
from api.models import *


class AutomobileAdmin(admin.ModelAdmin):
    pass


admin.site.register(Automobile, AutomobileAdmin)
