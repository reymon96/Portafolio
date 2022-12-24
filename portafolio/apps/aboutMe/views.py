from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Message

# Create your views here.

def index(request):
	return render(request, 'index.html')

def jobs(request):
	return render(request, 'layouts/jobs.html')

def modules(request):
	return render(request, 'layouts/modules.html')

def contact(request):
	return render(request, 'layouts/contact.html')

def setms(request):
	name = request.POST['name']
	email = request.POST['email']
	message = request.POST['message']
	
	try:
		Message.objects.create(name = name, email = email, message = message)
		return HttpResponse('<script type="text/javascript">' + 
                            'alert("Mensaje enviado");' + 
                            "location.href ='/contact'"
                            '</script>')
	except Exception as e:
		return HttpResponse('<script type="text/javascript">' + 
                            'alert("Error ocurrido. Intente después");' + 
                            "location.href ='/contact'"
                            '</script>')