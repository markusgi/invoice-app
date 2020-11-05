from django.urls import path
from invoices.views import InvoiceListAPIView, InvoiceCreateAPIView, InvoiceRetrieveUpdateDestroyAPIView, \
    InvoicePeriodListAPIView, InvoiceLatestListAPIView

urlpatterns = [
    path('', InvoiceListAPIView.as_view()),
    path('new/', InvoiceCreateAPIView.as_view()),
    path('<int:id>/', InvoiceRetrieveUpdateDestroyAPIView.as_view()),
    path('<str:start_date>/<str:end_date>/', InvoicePeriodListAPIView.as_view()),
    path('latest/', InvoiceLatestListAPIView.as_view()),
    # path('highest/', InvoiceHighestListAPIView.as_view()),
]
