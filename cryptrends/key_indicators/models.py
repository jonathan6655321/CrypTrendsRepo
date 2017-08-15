from django.db import models


class GoogleTrends(models.Model):
    timestamp = models.DateTimeField(unique=True, primary_key=True)
    score = models.IntegerField()

