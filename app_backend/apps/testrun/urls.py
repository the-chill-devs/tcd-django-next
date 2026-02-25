from .views import testrun_view
from django.urls import path

urlpatterns = [
    path('testrun/', testrun_view, name='testrun_view'),
]