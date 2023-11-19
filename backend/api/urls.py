from django.urls import path, include
from rest_framework import routers
from .views import AvisViewSet, UserViewSet, AutomobileViewSet, EmailTokenObtainPairView, RegisterView, UserView, ServiceViewSet
from rest_framework_simplejwt.views import TokenRefreshView
# Routers provide an easy way of automatically determining the URL conf.

router = routers.DefaultRouter()
router.register(r'avis', AvisViewSet)
router.register(r'user', UserViewSet)
router.register(r'automobile', AutomobileViewSet)
router.register(r'service', ServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='token_obtain_pair'),
    path('me/', UserView.as_view(), name='user_info'),
    path('token/obtain/', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]