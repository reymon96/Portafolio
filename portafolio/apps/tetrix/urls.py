from django.urls import path
from . import views

urlpatterns = [
	path('tetrix', views.index),
]