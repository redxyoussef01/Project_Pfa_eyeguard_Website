from django.urls import path
from . import views

urlpatterns = [
    path('etages/', views.get_all_etages,name='etages'),
]


# handler404 = 'utils.error_view.handler404' #
# handler500 = 'utils.error_view.handler500'#