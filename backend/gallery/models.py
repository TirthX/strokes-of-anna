from django.db import models

class Artwork(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='artworks/')
    dimensions = models.CharField(max_length=100)
    price = models.CharField(max_length=50)
    is_sold = models.BooleanField(default=False)
    page = models.IntegerField(default=1)
    is_landscape = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
