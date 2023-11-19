# Serializers define the API representation.
from .models import *
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer as JwtTokenObtainPairSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class TokenObtainPairSerializer(JwtTokenObtainPairSerializer):
    username_field = User.USERNAME_FIELD

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'is_staff', 'is_superuser', 'is_active', 'date_joined', 'last_login')

class AvisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Avis
        fields = ['id', 'nom', 'prenom', 'commentaire', 'note', 'approuve']

class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'nom', 'prix']


class AutomobileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Automobile
        fields = ['id', 'nom_du_model', 'prix', 'kilometre']