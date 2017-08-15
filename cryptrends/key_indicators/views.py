from django.shortcuts import get_object_or_404, render
from django.http import HttpResponse
from .models import GoogleTrends

# 89
def hello(request):
    first_score = GoogleTrends.objects.all().order_by('-timestamp')[:1]
    return HttpResponse(str(first_score[0].score))
