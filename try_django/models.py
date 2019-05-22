from django.db import models

class Contact(models.Model):

    nome = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=255, null=False)
    telefone = models.CharField(max_length=15, null=False)
    nome_da_empresa = models.CharField(max_length=255, null=False)