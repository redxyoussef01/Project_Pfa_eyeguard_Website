from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Etage
from .serializers import EtageSerializer
# Create your views here.

@api_view(['GET'])
def get_all_etages(request):
  etages = Etage.objects.all()
  serializer = EtageSerializer(etages,many=True)
  print(etages)
  return Response({"etages":serializer.data})