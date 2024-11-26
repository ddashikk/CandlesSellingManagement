from django.http import HttpResponse
from django.shortcuts import render
import json
from main_app import db_access
  
def page_products(request):
    return render(request, "page_products.html")

def page_details(request):
    product_details = db_access.get_product_details(json.loads(request.body))
    return render(request, "page_details.html", {
        'id': product_details['ID'],
        'weight': product_details['weight'],
        'aroma': product_details['aroma'],
        'selling_price': product_details['selling_price'],
        'image': f'../static/src/{product_details['ID']}.jpg'
    })