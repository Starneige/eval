# Generated by Django 4.2.7 on 2023-11-16 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Automobiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom_du_model', models.CharField(max_length=50)),
                ('prix', models.IntegerField()),
                ('kilometre', models.IntegerField()),
            ],
        ),
    ]
