import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="col-span-1">
            <h3 className="text-white font-serif text-2xl mb-6 tracking-tight">Élégance Carrelage</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Artisan carreleur professionnel passionné. Spécialisé dans la pose de précision et la rénovation haut de gamme à Lyon et ses environs. Qualité garantie.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-xs mb-6 font-bold">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Carrelage Intérieur & Grand Format</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrelage Extérieur & Piscine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salle de Bain & Douche Italienne</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Préparation des supports & Rénovation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-xs mb-6 font-bold">Contact Direct</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 text-white" />
                <span>154 Rue de Créqui,<br/>69003 Lyon</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white" />
                <a href="tel:+33645821294" className="hover:text-white transition-colors">06 45 82 12 94</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:contact@elegance-carrelage.fr" className="hover:text-white transition-colors">contact@elegance-carrelage.fr</a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Élégance Carrelage - Artisan à Lyon. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;