from django.shortcuts import render
import json
from main_app import db_access
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse
  
@ensure_csrf_cookie
def page_products(request):
    return render(request, "page_products.html")

def page_details(request):
    product_details = db_access.get_product_details(json.loads(request.body))
    return render(request, "page_details.html", {
        'name': product_details['name'],
        'id': product_details['ID'],
        'weight': product_details['weight'],
        'aroma': product_details['aroma'],
        'selling_price': product_details['selling_price'],
        'image': f'../static/src/{product_details['ID']}.jpg'
    })

def page_cart(request):
    return render(request, "page_cart.html")

def page_calculations(request):
    return render(request, "page_calculations.html")

def get_calculation(request):
    product_details = db_access.get_product_details_by_id(json.loads(request.body))
    response_data = {}
    response_data['selling_price'] = product_details['selling_price']
    response_data['material_cost'] = product_details['material_cost']
    response_data['logistics_cost'] = product_details['logistics_cost']
    response_data['packaging_cost'] = product_details['packaging_cost']
    response_data['labeling_cost'] = product_details['labeling_cost']
    return HttpResponse(json.dumps(response_data), content_type="application/json")