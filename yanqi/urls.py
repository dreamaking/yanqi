from django.conf.urls import patterns, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from views import *
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = patterns('',
    (r'^clear', clear),

    (r'^article/list/([\s\S]+)', list_article),
    (r'^article/get/(\d+)', get_article),


    
    url(r'^$', TemplateView.as_view(template_name='homing.html'), name="homing"),
    url(r'^homing.html', TemplateView.as_view(template_name='homing.html'), name="homing"),
    url(r'^center-intro.html', TemplateView.as_view(template_name='center-intro.html'), name="center-intro"),
    url(r'^group-intro.html', TemplateView.as_view(template_name='group-intro.html'), name="group-intro"),
    url(r'^booking-center.html', TemplateView.as_view(template_name='booking-center.html'), name="booking-center"),
    url(r'^transport-info.html', TemplateView.as_view(template_name='transport-info.html'), name="transport-info"),
    url(r'^expo-activity.html', TemplateView.as_view(template_name='expo-activity.html'), name="expo-activity"),
    url(r'^company-news.html', TemplateView.as_view(template_name='company-news.html'), name="company-news"),
    url(r'^industry-news.html', TemplateView.as_view(template_name='industry-news.html'), name="industry-news"),
    url(r'^contact-info.html', TemplateView.as_view(template_name='contact-info.html'), name="contact-info"),
    url(r'^your-say.html', TemplateView.as_view(template_name='your-say.html'), name="your-say"),
    url(r'^boardroom.html', TemplateView.as_view(template_name='boardroom.html'), name="boardroom"),
    url(r'^company-intro.html', TemplateView.as_view(template_name='company-intro.html'), name="company-intro"),


)

urlpatterns += staticfiles_urlpatterns()
#urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
