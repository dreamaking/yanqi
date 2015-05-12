# -*- coding: utf-8 -*-
import logging

from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render_to_response
from django.template import RequestContext
from models import *
from forms import *
from sites.settings import *

from django.core.cache import cache
# app specific files

LOG = logging.getLogger('django')

def list_article(request, channel):
    result = {}
    template = channel + '.html'
    articles = Article.objects.filter(channel=channel)
    result['articles'] = articles
    return render_to_response(template, result, context_instance=RequestContext(request))

def get_article(request, id):
    result = {}
    article = Article.objects.get(id=int(id))
    result['article'] = article
    return render_to_response("article.html", result, context_instance=RequestContext(request))

def clear(request):
    return render_to_response("clear-cookie.html", {}, context_instance=RequestContext(request))
