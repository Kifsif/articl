from django.views.generic import TemplateView

class ArticlaView(TemplateView):
    template_name = "article/article.html"