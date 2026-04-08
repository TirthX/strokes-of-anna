import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchArtworks, Artwork } from '@/services/api';

// Original Assets
import artworkBbyJ from '@/assets/1/Bound by the Journey.png';
import artworkCitC from '@/assets/1/Calm in the Chaos.png';
import artworkDimM from '@/assets/1/Duality in Motion.png';
import artworkEdge from '@/assets/1/The Edge of Becoming.png';
import artworkQuietCrossing from '@/assets/1/The Quiet Crossing.png';
import fireandwater from '@/assets/between-fire-and-water.png';
import test from '@/assets/1/test.png';
import test2 from '@/assets/1/test2.png'; 
import artworkHbtH from '@/assets/Held by the Horizon.png';
import artworkGaze from '@/assets/The Gaze.png';
import artworkInSilence from '@/assets/In the Silence He Awakens.png';
import artworkShakti from '@/assets/Shakti.png';
import artworkEN from '@/assets/Emerald Nights.png';
import artworkATR from '@/assets/After the Rain.png';
import artworkMM from '@/assets/Morning  Meditation.png';
import artworkRooted from '@/assets/Rooted.png';
import artworkEmergence from '@/assets/Emergence.png'; 
import artworkSerenity from '@/assets/Serenity in bloom.png';

// New Assets
import artworkBTTN from '@/assets/BreakingThroughthe Noise12x12.png';
import artworkEndurance from '@/assets/Endurance16x20.png';
import artworkGanesh from '@/assets/Ganesh14x14.jpeg';
import artworkRadheKrishna from '@/assets/RadheKrishna-DivineFlute59x47.png';
import artworkShiva from '@/assets/ShivatheUnshaken16x20.jpeg';
import artworkCosmicStorm from '@/assets/TheCosmicStorm48x36.jpeg';
import artworkDulhan from '@/assets/TheDulhan16x20.png';
import artworkSacredPassage from '@/assets/TheSacredPassage8x10.jpeg';
import artworkUnchosenPath from '@/assets/TheUnchosenPath15x15.jpeg';
import artworkUnbroken from '@/assets/Unbroken20x20.png';
import artworkLight from '@/assets/shebecomeslight8x10.jpeg';
import artworkDivineStorm from '@/assets/thedivinestorm59x47.jpeg';
import artworkSpaceSheKeeps from '@/assets/thespaceshe keeps30x30.jpeg';
import artworkUrbanDrift from '@/assets/urbandrift25x40.jpeg';
import artworkWeightOfWords from '@/assets/weightofunspokenwords30x30.jpeg';
import artworkMagicBlooms from '@/assets/wheremagicblooms16x20.jpeg';

const parseDimensions = (dimensions: string) => {
  const match = dimensions.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)/i);
  if (match) {
    const w = parseFloat(match[1]);
    const h = parseFloat(match[2]);
    return { width: w, height: h, ratio: w / h };
  }
  return { width: 16, height: 20, ratio: 0.8 }; // Default
};

const artworks: any[] = [
  { id: 1, page: 1, title: "The Quiet Crossing", image: artworkQuietCrossing, dimensions: "16\" x 20\"", price: "$250", isSold: false, description: "Capturing the stillness of a moment in transit through nature." },
  { id: 2, page: 2, title: "The World Can Rush", image: artworkBbyJ, dimensions: "14\" x 14\"", price: "$300", isSold: true, description: "Tracing the invisible threads that connect our paths through the landscape." },
  { id: 3, page: 2, title: "Calm in the Chaos", image: artworkCitC, dimensions: "16\" x 20\"", price: "$399", isSold: true, description: "Finding a center of peace amidst the vibrant energy of the world." },
  { id: 4, page: 1, title: "Duality in Motion", image: artworkDimM, dimensions: "16\" x 20\"", price: "$250", isSold: false, description: "The contrast between stillness and movement within the natural frame." },
  { id: 6, page: 2, title: "The Edge of Becoming", image: artworkEdge, dimensions: "48\" x 24\"", price: "$299", isSold: false, isLandscape: true, description: "A study of transformation at the boundaries of perceived reality." },
  { id: 8, page: 1, title: "Held by the Horizon", image: artworkHbtH, dimensions: "20\" x 20\"", price: "$199", isSold: false, description: "A serene exploration of the meeting point between earth and sky." },
  { id: 9, page: 1, title: "The Gaze", image: artworkGaze, dimensions: "14\" x 14\"", price: "$259", isSold: true, description: "An intimate portrait of observation and internal reflection." },

  { id: 10, page: "GOD", title: "In the Silence He Awakens", image: artworkInSilence, dimensions: "16\" x 20\"", price: "$299", isSold: true, description: "A spiritual awakening reflected in the dawn of a new landscape." },
  { id: 11, page: 1, title: "Shakti", image: artworkShakti, dimensions: "16\" x 20\"", price: "$199", isSold: false, description: "A powerful expression of natural energy and creative force." },
  { id: 12, page: 1, title: "Emerald Nights", image: artworkEN, dimensions: "12\" x 16\"", price: "$110", isSold: false, description: "The mysterious and deep atmosphere of the night woods." },
  { id: 13, page: 1, title: "After the Rain", image: artworkATR, dimensions: "16\" x 20\"", price: "$159", isSold: false, description: "The clarity and freshness that follows a summer storm." },
  { id: 14, page: 1, title: "Morning Meditation", image: artworkMM, dimensions: "16\" x 20\"", price: "$140", isSold: false, description: "The quiet clarity of a new day beginning in nature." },
  { id: 15, page: 1, title: "Rooted", image: artworkRooted, dimensions: "16\" x 20\"", price: "$159", isSold: false, description: "Connecting our foundations to the grounding earth." },
  { id: 17, page: 1, title: "Serenity in bloom", image: artworkSerenity, dimensions: "16\" x 20\"", price: "$110", isSold: false, description: "The delicate peacefulness of natural growth." },
  
  // Newly Added Artworks
  { id: 18, page: 1, title: "Breaking Through The Noise", image: artworkBTTN, dimensions: "12\" x 12\"", price: "$150", isSold: false, description: "Finding clarity in a crowded world." },
  { id: 33, page: 2, title: "Between Fire and Water", image: fireandwater, dimensions: "50\" x 70\"", medium: "Multi Media", price: "$150", isSold: false, description: "A balanced exploration of elemental contrast." },
  { id: 19, page: 1, title: "Endurance", image: artworkEndurance, dimensions: "16\" x 20\"", price: "$280", isSold: false, description: "The strength of the spirit over time." },
  { id: 34, page: 2, title: "A Quite Journey", image: test, dimensions: "12\" x 12\"", price: "$150", isSold: false, description: "Finding clarity in a crowded world." },
  { id: 35, page: 2, title: "A Quite Journey II", image: test2, dimensions: "12\" x 12\"", price: "$150", isSold: false, description: "Finding clarity in a crowded world." },
  { id: 16, page: 2, title: "Emergence", image: artworkEmergence, dimensions: "16\" x 20\"", price: "$199", isSold: false, description: "A serene exploration of the meeting point between earth and sky." },
  { id: 20, page: "GOD", title: "Ganesh", image: artworkGanesh, dimensions: "14\" x 14\"", price: "$180", isSold: false, description: "Divine wisdom and the removal of obstacles." },
  { id: 21, page: "GOD", title: "Radhe Krishna - Divine Melody", image: artworkRadheKrishna, dimensions: "59\" x 47\"", price: "NOT FOR SALE", notForSale: true, isLandscape: true, description: "A grand celestial celebration of love and music." },
  { id: 22, page: "GOD", title: "Shiva The Unshaken", image: artworkShiva, dimensions: "16\" x 20\"", price: "$320", isSold: false, description: "The absolute stillness of the divine consciousness." },

  { id: 24, page: 1, title: "The Dulhan", image: artworkDulhan, dimensions: "16\" x 20\"", price: "$299", isSold: false, description: "A portrait of tradition and quiet anticipation." },
  { id: 25, page: 1, title: "The Sacred Passage", image: artworkSacredPassage, dimensions: "8\" x 10\"", price: "$120", isSold: false, description: "A small window into a holy journey." },
  { id: 27, page: 1, title: "Unbroken", image: artworkUnbroken, dimensions: "20\" x 20\"", price: "$350", isSold: false, description: "Resilience in the face of fragmented reality." },
  { id: 28, page: 1, title: "She Becomes Light", image: artworkLight, dimensions: "8\" x 10\"", price: "$110", isSold: false, description: "The transcendence of form into pure energy." },
  { id: 29, page: "GOD", title: "The Divine Storm", image: artworkDivineStorm, dimensions: "59\" x 47\"", price: "$1150", isSold: false, isLandscape: true, description: "The intersection of heavenly power and earthly elements." },
  { id: 30, page: 2, title: "The Space She Keeps", image: artworkSpaceSheKeeps, dimensions: "30\" x 30\"", price: "$650", isSold: false, description: "An exploration of personal boundaries and inner sanctuary." },
  { id: 31, page: 2, title: "Urban Drift", image: artworkUrbanDrift, dimensions: "25\" x 40\"", price: "NOT FOR SALE", notForSale: true, isSold: false, description: "The rhythmic pulse and flow of city life." },
  { id: 32, page: 2, title: "Weight of Unspoken Words", image: artworkWeightOfWords, dimensions: "30\" x 30\"", price: "$699", isSold: false, description: "The gravity of the things we leave unsaid." },
  { id: 37, page: 1, title: "Where Magic Blooms", image: artworkMagicBlooms, dimensions: "16\" x 20\"", price: "$240", isSold: false, description: "The enchanting growth of the impossible." }
];

const ArtworkGrid = () => {
  const { data: fetchedArtworks, isLoading } = useQuery({
    queryKey: ['artworks'],
    queryFn: fetchArtworks,
    retry: 1,
  });

  const displayArtworks = fetchedArtworks || artworks;

  if (isLoading && !fetchedArtworks) {
    return (
      <section className="py-32 px-6 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32 md:gap-y-64 lg:gap-y-80 items-center justify-items-center">
          {displayArtworks.map((artwork, index) => {
            const dims = parseDimensions(artwork.dimensions);

            return (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index % 3 * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  relative group flex flex-col items-center w-full
                  ${dims.ratio > 1.2 ? 'lg:col-span-3' : ''}
                `}
              >
                <Link to={`/artwork/${artwork.id}`} className="block relative w-full flex flex-col items-center">
                  <div 
                    className="relative mx-auto overflow-hidden transition-all duration-700" 
                    style={{ 
                      width: `calc(${dims.width} * var(--art-scale, 24px))`,
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto block transition-all duration-[2000ms] ease-out-expo"
                    />
                    {artwork.isSold && (
                      <div className="absolute top-6 right-6 z-20">
                         <span className="font-display text-sm tracking-[0.2em] text-red-500/90 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm border border-red-500/10">
                           SOLD
                         </span>
                      </div>
                    )}
                  </div>

                  <div className="py-12 px-2 space-y-4 text-center">
                    <h3 className="font-display text-2xl lg:text-4xl text-foreground group-hover:text-accent transition-colors tracking-[0.1em] uppercase">
                      {artwork.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { artworks, parseDimensions };
export default ArtworkGrid;