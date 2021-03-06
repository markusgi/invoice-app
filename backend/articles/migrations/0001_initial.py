# Generated by Django 3.1.3 on 2020-11-03 15:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('invoices', '0001_initial'),
        ('tags', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('date', models.DateTimeField()),
                ('item', models.CharField(max_length=50)),
                ('quantity', models.IntegerField(blank=True, null=True)),
                ('price', models.IntegerField(blank=True, null=True)),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to='invoices.invoice', verbose_name='invoice')),
                ('tag', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='articles', to='tags.tag', verbose_name='tag')),
            ],
        ),
    ]
