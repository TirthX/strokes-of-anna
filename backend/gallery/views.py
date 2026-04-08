from rest_framework import viewsets
from .models import Artwork
from .serializers import ArtworkSerializer

class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all().order_by('-created_at')
    serializer_class = ArtworkSerializer
