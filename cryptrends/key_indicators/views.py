from django.utils.decorators import method_decorator
from key_indicators.models import GoogleTrends
from key_indicators.serializers import GoogleTrendsSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, permissions


class GoogleTrendsList(generics.ListCreateAPIView):
    queryset = GoogleTrends.objects.order_by('-timestamp')[:1]
    serializer_class = GoogleTrendsSerializer
