from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from restaurants.serializers import RestaurantSerializer
from restaurants.models import Restaurant


# List all restaurants: api/restaurants/
class RestaurantListAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


# Create a restaurant: api/restaurants/new/
class RestaurantCreateAPIView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# List all restaurants created by me: api/restaurants/me/
class RestaurantListMeAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        restaurants = Restaurant.objects.filter(author=self.request.user)
        return restaurants


# Read-write-delete a restaurant by id: api/restaurants/<int:id>/
class RestaurantRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'id'
