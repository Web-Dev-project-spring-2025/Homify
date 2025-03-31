from django.urls import path
from . import views
from .views import UserProfileView, UpdateUserProfileView

urlpatterns = [
    path('signup/',views.CreateUserView.as_view(),name='signup'),
    path('login/',views.LoginView.as_view(),name='login'),
    path('user-profile/', UserProfileView.as_view(), name='user-profile'),
    path('update-profile/', UpdateUserProfileView.as_view(), name='update-profile'),

]