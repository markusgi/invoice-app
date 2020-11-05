# Generated by Django 3.1.3 on 2020-11-04 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='country',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='street',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='website',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='website'),
        ),
    ]
