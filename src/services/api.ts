const API_URL = 'http://127.0.0.1:8000/api';

export interface Artwork {
  id: number;
  title: string;
  image: string;
  dimensions: string;
  price: string;
  is_sold: boolean;
  page: number;
  is_landscape: boolean;
  description: string;
  created_at: string;
}

export const fetchArtworks = async (): Promise<Artwork[]> => {
  const response = await fetch(`${API_URL}/artworks/`);
  if (!response.ok) {
    throw new Error('Failed to fetch artworks');
  }
  return response.json();
};

export const fetchArtworkById = async (id: number): Promise<Artwork> => {
  const response = await fetch(`${API_URL}/artworks/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch artwork');
  }
  return response.json();
};
