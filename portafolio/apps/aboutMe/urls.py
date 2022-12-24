from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('jobs', views.jobs),
    path('modules', views.modules),
    path('contact', views.contact),
    path('setms', views.setms),
]
