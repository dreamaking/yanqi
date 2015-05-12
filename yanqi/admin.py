# -*- coding: utf-8 -*-

from django.contrib import admin
from yanqi import models


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title','content_display', 'publish_date', 'is_active')
    search_fields = ('title', )


admin.site.register(models.Article, ArticleAdmin)

