from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.serializers import UserSerializer
from invoices.models import Invoice

User = get_user_model()


class InvoiceSerializer(serializers.ModelSerializer):
    author = UserSerializer(required=False, read_only=True)

    class Meta:
        model = Invoice
        fields = '__all__'
        read_only_fields = ['author']