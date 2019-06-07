from django.http import HttpResponse
from django.shortcuts import render



def home(request):
   my_title = 'New site with new ideas'
   return render(request, "base.html", {"title": my_title})


def about(request):
   about_us = 'know about us and our work'
   return render(request, "about.html", {"about": about_us})

def contact(request):
  contact_us = 'Talk to us We are here for you'
  return render(request, "contact.html", {"title": contact_us})

def chart(request):
   chart = 'See us in numbers'
   return render(request,"chart.html",  {"title": chart})