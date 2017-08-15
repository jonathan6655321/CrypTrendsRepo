from django.conf.urls import url

from . import views
app_name = 'key_indicators'
urlpatterns = [
    url(r'^$', views.hello, name='index'),
]
