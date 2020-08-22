from django.views.generic import View
from django.http import HttpResponse

class Comment(View):

    def get(self, request, *args, **kwargs):
        response = HttpResponse("hello")
        response.set_cookie(key="name", value="val")
        return response
