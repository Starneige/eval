from django.db import models

# Create your models here.
class Automobile(models.Model):
    nom_du_model = models.CharField(max_length=50)
    prix = models.IntegerField()
    kilometre = models.IntegerField()
