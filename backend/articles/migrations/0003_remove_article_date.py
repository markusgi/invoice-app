# Generated by Django 3.1.3 on 2020-11-04 15:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_auto_20201104_1243'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='date',
        ),
    ]
