import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import artworkAQJ from '@/assets/1/A Quite Journey.png';
import artworkBbyJ from '@/assets/1/Bound by the Journey.png';
import artworkCitC from '@/assets/1/Calm in the Chaos.png';
import artworkDimM from '@/assets/1/Duality in Motion.png';
import artworkEdge from '@/assets/1/The Edge of Becoming.png';
import artworkQuietCrossing from '@/assets/1/The Quiet Crossing.png';
import artworkWorldRush from '@/assets/1/The World Can Rush.png';

// Other assets
import artworkABOB from '@/assets/A breadth of blue.png';
import artworkATR from '@/assets/After the Rain.png';
import artworkEN from '@/assets/Emerald Nights.png';
import artworkEmergence from '@/assets/Emergence.png';
import artworkHbtH from '@/assets/Held by the Horizon.png';
import artworkInSilence from '@/assets/In the Silence He Awakens.png';
import artworkMM from '@/assets/Morning  Meditation.png';
import artworkRooted from '@/assets/Rooted.png';
import artworkSerenity from '@/assets/Serenity in bloom.png';
import artworkShakti from '@/assets/Shakti.png';
import artworkGaze from '@/assets/The Gaze.png';
import artworkPath from '@/assets/The Path Untaken.png';
import artworkStillness1 from '@/assets/Stillness Beneath the Rush.jpeg';
import artworkStillness2 from '@/assets/Stillness Beneath the Rush-2.jpeg';

const artworks = [
  {
    id: 1,
    page: 1,
    title: "The Quiet Crossing - original painting",
    image: artworkQuietCrossing,
    dimensions: "30\" x 30\"",
    price: "$250",
    isSold: false,
    description: "Capturing the stillness of a moment in transit through nature."
  },
  {
    id: 2,
    page: 1,
    title: "Bound by the Journey - original painting",
    image: artworkBbyJ,
    dimensions: "16\" x 20\"",
    price: "$300",
    isSold: true,
    description: "Tracing the invisible threads that connect our paths through the landscape."
  },
  {
    id: 3,
    page: 1,
    title: "Calm in the Chaos - original painting",
    image: artworkCitC,
    dimensions: "16\" x 20\"",
    price: "$399",
    isSold: true,
    description: "Finding a center of peace amidst the vibrant energy of the world."
  },
  {
    id: 4,
    page: 1,
    title: "Duality in Motion - original painting",
    image: artworkDimM,
    dimensions: "16\" x 20\"",
    price: "$250",
    isSold: false,
    description: "The contrast between stillness and movement within the natural frame."
  },
  {
    id: 5,
    page: 1,
    title: "A Quite Journey - original painting",
    image: artworkAQJ,
    dimensions: "20\" x 20\"",
    price: "$499",
    isSold: false,
    isLandscape: true,
    description: "A meditative transit through the heart of the landscape."
  },
  {
    id: 6,
    page: 1,
    title: "The Edge of Becoming - original painting",
    image: artworkEdge,
    dimensions: "48\" x 24\"",
    price: "$299",
    isSold: false,
    isLandscape: true,
    description: "A study of transformation at the boundaries of perceived reality."
  },
  {
    id: 7,
    page: 1,
    title: "The World Can Rush - original painting",
    image: artworkWorldRush,
    dimensions: "26\" x 20\" (Framed)",
    price: "$250",
    isSold: false,
    description: "A reminder of inner stillness while the collective pace quickens."
  },
  {
    id: 8,
    page: 2,
    title: "Held by the Horizon - original painting",
    image: artworkHbtH,
    dimensions: "Canvas: 20\" x 20\", Framed: 25.75\" x 25.75\"",
    price: "$199",
    isSold: false,
    description: "A serene exploration of the meeting point between earth and sky."
  },
  {
    id: 9,
    page: 2,
    title: "The Gaze - original painting",
    image: artworkGaze,
    dimensions: "16\" x 20\"",
    price: "$259",
    isSold: true,
    description: "An intimate portrait of observation and internal reflection."
  },
  {
    id: 10,
    page: 2,
    title: "In the Silence He Awakens - original painting",
    image: artworkInSilence,
    dimensions: "16\" x 20\"",
    price: "$299",
    isSold: true,
    description: "A spiritual awakening reflected in the dawn of a new landscape."
  },
  {
    id: 11,
    page: 2,
    title: "Shakti - original painting",
    image: artworkShakti,
    dimensions: "Canvas: 16\" x 20\", Framed: 24\" x 21\"",
    price: "$199",
    isSold: false,
    description: "A powerful expression of natural energy and creative force."
  },
  {
    id: 12,
    page: 2,
    title: "Emerald Nights - original painting",
    image: artworkEN,
    dimensions: "12\" x 16\" (Canvas)",
    price: "$110",
    isSold: false,
    description: "The mysterious and deep atmosphere of the night woods."
  },
  {
    id: 13,
    page: 2,
    title: "After the Rain - original painting",
    image: artworkATR,
    dimensions: "Canvas: 16\" x 20\", Framed: 26.4\" x 22.5\"",
    price: "$159",
    isSold: false,
    description: "The clarity and freshness that follows a summer storm."
  },
  {
    id: 14,
    page: 2,
    title: "Morning Meditation - original painting",
    image: artworkMM,
    dimensions: "Canvas: 16\" x 20\", Framed: 24\" x 21.5\"",
    price: "$140",
    isSold: false,
    description: "The quiet clarity of a new day beginning in nature."
  },
  {
    id: 15,
    page: 2,
    title: "Rooted - original painting",
    image: artworkRooted,
    dimensions: "16\" x 20\" (Canvas)",
    price: "$159",
    isSold: false,
    description: "Connecting our foundations to the grounding earth."
  },
  {
    id: 16,
    page: 2,
    title: "Emergence - original painting",
    image: artworkEmergence,
    dimensions: "39\" x 39\"",
    price: "$499",
    isSold: false,
    description: "The powerful unfolding of form and color from nothingness."
  },
  {
    id: 17,
    page: 2,
    title: "Serenity in Bloom - original painting",
    image: artworkSerenity,
    dimensions: "16\" x 20\"",
    price: "$110",
    isSold: false,
    description: "The delicate peacefulness of natural growth."
  }
];

const ArtworkGrid = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Side Label */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="font-serif italic text-sm tracking-[0.5em] text-foreground/20 -rotate-90 origin-left uppercase">
          Current Exhibition 2024
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index % 2 * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative group
                ${index % 2 !== 0 ? 'md:mt-48' : ''}
              `}
            >
              <Link to={`/artwork/${artwork.id}`} className="block relative">
                {/* Refined Shadow */}
                <div className="absolute inset-4 bg-black/5 blur-2xl translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative bg-white shadow-sm transition-all duration-700">
                  <div className="overflow-hidden bg-muted aspect-[4/5]">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    />
                  </div>

                  <div className="py-8 px-2 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-script text-4xl text-foreground group-hover:text-accent transition-colors">
                        {artwork.title}
                      </h3>

                    </div>
                    <p className="font-serif text-lg text-muted-foreground/80 leading-relaxed italic border-l border-accent/20 pl-4 py-1">
                      {artwork.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { artworks };
export default ArtworkGrid;