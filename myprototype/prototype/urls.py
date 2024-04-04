from django.urls import path
from .views import home, contact
from . import views



urlpatterns = [
    # path('', views.savvahome_view, name='savvahome'),
    # path('success/', views.success_view, name='success'),
    path('register/', views.register_view, name='register'),
    path('', home, name='home'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('newtest/', views.new_test, name='new_test'),
    path('tests/', views.test, name='test'),
    path('historytest/', views.history_test, name='history_test'),
]

