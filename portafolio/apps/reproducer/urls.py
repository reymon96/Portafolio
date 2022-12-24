from django.urls import path
from . import views

urlpatterns = [
	path('reproducer', views.index),
]