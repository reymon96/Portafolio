from django.db import models
#from unittest.util import _MAX_LENGTH

# Create your models here.
class Message(models.Model):
	#_id = models.IntegerField()
	name = models.CharField(max_length=50)
	email = models.CharField(max_length=100)
	message = models.CharField(max_length=500)
