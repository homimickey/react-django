from django.urls import include, path
from . import views

app_name = "api"

urlpatterns = [
    path('', views.hello),
    path('<str:name>', views.api),
]
