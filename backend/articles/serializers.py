from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.serializers import SmallUserSerializer
from articles.models import Article

User = get_user_model()


class ArticleSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)
    total_price = serializers.SerializerMethodField()
    date = serializers.SerializerMethodField()

    # @staticmethod
    def get_total_price(self, obj):
        return obj.quantity * obj.price

    def get_date(self, obj):
        return obj.invoice.date

    class Meta:
        model = Article
        fields = ['id', 'created', 'updated', 'item', 'quantity', 'price', 'tag', 'invoice', 'author', 'date', 'total_price']
        read_only_fields = ['author']
