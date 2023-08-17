from django.db import models

# Create your models here.
class Blog(models.Model):
 blogTitle=models.CharField(max_length=(150))
 blogPost=models.TextField()
 author=models.CharField(max_length=(50))
 date_published=models.DateTimeField(default=timezone.now)
