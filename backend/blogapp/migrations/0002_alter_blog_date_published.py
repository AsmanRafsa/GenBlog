# Generated by Django 4.2.4 on 2023-08-21 08:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='date_published',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 21, 8, 24, 46, 453968, tzinfo=datetime.timezone.utc)),
        ),
    ]