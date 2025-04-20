from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path
from .views import AddToCartView, CartView, ClearCartView, DecreaseQuantityView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('cart/', CartView.as_view(), name='cart_view'),
    path('cart/clear/', ClearCartView.as_view(), name='clear_cart'),  
    path('add/', AddToCartView.as_view(), name='add-to-cart'),
    path('cart/decrease/', DecreaseQuantityView.as_view()), 
]


