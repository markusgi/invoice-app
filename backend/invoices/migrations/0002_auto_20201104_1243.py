# Generated by Django 3.1.3 on 2020-11-04 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invoices', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invoice',
            name='date',
            field=models.DateField(),
        ),
    ]
