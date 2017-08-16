from rest_framework import serializers
from key_indicators.models import GoogleTrends

class GoogleTrendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleTrends
        fields = ('timestamp', 'score')
