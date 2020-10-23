from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def api(req, name: str):
    """Returns a json Response hello Message."""

    return JsonResponse({"msg": f"hello {name}"})


@csrf_exempt
def hello(req):
    return JsonResponse({"msg": "hello CaptainAnonymus"})
