from rest_framework import serializers

from restaurants.models import Restaurant
from users.serializers import UserSerializer


class InvoiceSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False, read_only=True)  # show the details of the author

    # number_of_articles

    # total_amount

    class Meta:
        model = Restaurant
        fields = ['id', 'created', 'updated', 'date', 'shop', 'restaurant', 'author' ]


