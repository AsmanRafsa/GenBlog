# Generated by Django 4.2.4 on 2023-08-21 12:48

import blogapp.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0003_alter_blog_date_published'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='blogImage',
            field=models.ImageField(default='blogs/default.png', upload_to=blogapp.models.upload_to, verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='date_published',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 21, 12, 48, 0, 294833, tzinfo=datetime.timezone.utc)),
        ),
    ]
