from django.http import HttpResponse
from django.shortcuts import render
  
def page_products(request):
    return render(request, "page_products.html")