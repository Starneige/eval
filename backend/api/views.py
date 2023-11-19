from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import RetrieveAPIView
class AvisViewSet(viewsets.ModelViewSet):
    queryset = Avis.objects.all()
    # .filter(approuve=True)
    serializer_class = AvisSerializer
    # permission_classes = [IsAccountAdminOrReadOnly]>

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'list' or self.action == 'create':
            permission_classes = []
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    # .filter(approuve=True)
    serializer_class = UserSerializer

    permission_classes = [IsAuthenticated]

class AutomobileViewSet(viewsets.ModelViewSet):
    queryset = Automobile.objects.all()
    # .filter(approuve=True)
    serializer_class = AutomobileSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'list':
            permission_classes = []
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    # .filter(approuve=True)
    serializer_class = ServiceSerializer

    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        if self.action == 'list':
            permission_classes = []
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
class UserView(APIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None):
        """
        If provided 'pk' is "me" then return the current user.
        """
        if request.user:
            return Response(CustomUserSerializer(request.user).data)
        return Response(status=HTTP_400_BAD_REQUEST, data={'errors': "User not found"})


class RegisterView(APIView):
    http_method_names = ['post']

    def post(self, *args, **kwargs):
        serializer = UserSerializer(data=self.request.data)
        if serializer.is_valid():
            get_user_model().objects.create_user(**serializer.validated_data)
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST, data={'errors': serializer.errors})


class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer