from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.serializers import UserSerializer
from restaurants.models import Restaurant

User = get_user_model()


class RestaurantSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False, read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['author']
