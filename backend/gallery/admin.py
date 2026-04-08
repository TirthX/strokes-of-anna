from django.contrib import admin
from .models import Artwork

@admin.register(Artwork)
class ArtworkAdmin(admin.ModelAdmin):
    list_display = ('title', 'page', 'price', 'is_sold', 'created_at')
    list_filter = ('page', 'is_sold', 'is_landscape')
    search_fields = ('title', 'description')
