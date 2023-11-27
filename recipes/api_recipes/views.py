from django.shortcuts import render

from django.views.generic import ListView
from .models import Category


class CategoryList(ListView):
    model = Category
    ordering = 'name'
    template_name = 'category.html'
    context_object_name = 'category'
