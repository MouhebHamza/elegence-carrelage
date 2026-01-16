import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Shared data definition (duplicated for independence)
const GALLERY_ITEMS = [
    // Bathroom
    {
        id: 1,
        category: "Salle de Bain",
        caption: "Douche Italienne Marbre",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "Salle de Bain",
        caption: "Faïence Géométrique",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "Salle de Bain",
        caption: "Baignoire Îlot",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "Salle de Bain",
        caption: "Vasque Pierre",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "Salle de Bain",
        caption: "Mosaïque Douche",
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop"
    },

    // Kitchen
    {
        id: 6,
        category: "Cuisine",
        caption: "Crédence Zellige",
        url: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        category: "Cuisine",
        caption: "Sol Effet Béton",
        url: "https://images.unsplash.com/photo-1588854337443-488b0d24cc1c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        category: "Cuisine",
        caption: "Ilot Central",
        url: "https://images.unsplash.com/photo-1556911220-e8db6e691a32?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 9,
        category: "Cuisine",
        caption: "Carrelage Métro",
        url: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=800&auto=format&fit=crop"
    },

    // Interior
    {
        id: 10,
        category: "Intérieur",
        caption: "Grès Cérame Salon",
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 11,
        category: "Intérieur",
        caption: "Travertin Entrée",
        url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 12,
        category: "Intérieur",
        caption: "Sol Chevrons",
        url: "https://images.unsplash.com/photo-1581858726768-758a0336188e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 13,
        category: "Intérieur",
        caption: "Escalier Moderne",
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
    },

    // Exterior
    {
        id: 14,
        category: "Extérieur",
        caption: "Terrasse Piscine",
        url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 15,
        category: "Extérieur",
        caption: "Dalle sur Plots",
        url: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 16,
        category: "Extérieur",
        caption: "Allée de Jardin",
        url: "https://images.unsplash.com/photo-1590059590918-02a82643a131?q=80&w=800&auto=format&fit=crop"
    }
]

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onBack = () => {
    navigate('/');
  };

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto min-h-screen pb-24 animate-fade-in">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md px-6 py-6 flex items-center border-b border-stone-100">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-stone-900 hover:text-stone-500 transition-colors"
        >
          <ArrowLeft size={16} />
          Retour
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] font-bold text-stone-900 hidden sm:block">
          Galerie Complète
        </div>
      </header>

      <div className="pt-32 px-6 max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900">Nos Réalisations</h1>
          <p className="text-stone-500 font-light italic max-w-lg mx-auto">
            Inspirez-vous de nos derniers chantiers à Lyon. Une collection de précision et d'élégance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="space-y-3 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm relative">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-baseline px-1 border-b border-transparent group-hover:border-stone-200 pb-2 transition-colors">
                <span className="text-sm font-serif text-stone-900">{item.caption}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 pb-12">
          <p className="text-stone-500 mb-6 text-sm">Un projet similaire en tête ?</p>
          <button 
            onClick={scrollToContact}
            className="px-12 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;