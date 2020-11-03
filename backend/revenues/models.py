from django.conf import settings
from django.db import models

from restaurants.models import Restaurant


class Revenue(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    daily_revenue = models.IntegerField(null=True, blank=True)
    restaurant = models.ForeignKey(to=Restaurant, verbose_name='restaurant', related_name='revenues',
                                   on_delete=models.CASCADE)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='revenues', on_delete=models.CASCADE)

    def __str__(self):
        return f'Revenue {self.pk}: {self.daily_revenue}'
