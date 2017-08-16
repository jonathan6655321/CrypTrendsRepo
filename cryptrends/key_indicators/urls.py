from django.conf.urls import url
from key_indicators import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'key_indicators'
urlpatterns = [
    url(r'^google-trends/$', views.GoogleTrendsList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)