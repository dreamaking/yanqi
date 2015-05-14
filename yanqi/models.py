# -*- coding: utf-8 -*-
import re
import datetime
from django.db import models
from django.db.models import F
from model_utils.managers import PassThroughManager
from ckeditor.fields import RichTextField


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(u'文章标题', max_length=200)
    content = RichTextField(u'正文内容')
    channel = models.CharField(u'发表频道', max_length=200, choices=((u'expo-activity',u'展会活动'),(u'company-news',u'企业信息'),(u'industry-news',u'行业动态')), null=False)

    publish_date = models.DateField(u'发发布时间', max_length=200)
    is_active = models.BooleanField(u'是否发布', default=True)
    create_time = models.DateTimeField(u'创建时间', auto_now_add=True)
    modify_time = models.DateTimeField(u'修改时间', auto_now=True)

    def content_display(self):
        return self.content
    content_display.allow_tags = True

    class Meta:
        verbose_name = u'文章'
        verbose_name_plural = u'文章管理'



