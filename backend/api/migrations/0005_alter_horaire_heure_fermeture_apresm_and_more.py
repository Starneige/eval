# Generated by Django 4.2.7 on 2023-11-20 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_horaire_heure_fermeture_apresm_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='horaire',
            name='heure_fermeture_apresm',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='horaire',
            name='heure_fermeture_matin',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='horaire',
            name='heure_ouverture_apresm',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='horaire',
            name='heure_ouverture_matin',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
