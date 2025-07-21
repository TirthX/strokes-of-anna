import { Link } from 'react-router-dom';
import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';

const artworks = [
  {
    id: 1,
    title: "Flowing Waters",
    image: artwork1,
    description: "An abstract exploration of water's fluid movement through watercolor techniques."
  },
  {
    id: 2,
    title: "Geometric Sunrise",
    image: artwork2,
    description: "Contemporary geometric interpretation of dawn's warm embrace."
  },
  {
    id: 3,
    title: "Wildflower Dreams",
    image: artwork3,
    description: "Delicate botanical study capturing the essence of meadow flowers."
  },
  {
    id: 4,
    title: "Misty Peaks",
    image: artwork4,
    description: "Atmospheric landscape painting of mountain ranges in morning mist."
  },
  {
    id: 5,
    title: "Ocean's Dance",
    image: artwork5,
    description: "Dynamic abstract representation of ocean waves and their eternal rhythm."
  },
  {
    id: 6,
    title: "Forest Path",
    image: artwork6,
    description: "Impressionistic journey through a sunlit forest pathway."
  }
];

const ArtworkGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="font-display text-title text-center mb-16 font-light tracking-wide"
          style={{ animation: 'fadeIn 0.8s ease-out 1.2s both' }}
        >
          Featured Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <Link 
              key={artwork.id}
              to={`/artwork/${artwork.id}`}
              className="art-card block"
              style={{ 
                animation: `fadeIn 0.6s ease-out ${1.4 + index * 0.1}s both` 
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="art-overlay">
                  <h3 className="art-title">{artwork.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { artworks };
export default ArtworkGrid;