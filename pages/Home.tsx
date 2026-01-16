// File: élégance-carrelage/pages/Home.tsx
import React, { useState, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
    CheckCircle2,
    LayoutGrid,
    Hammer,
    ChefHat,
    Bath,
    Sun,
    ArrowRight,
    Star,
    ChevronLeft,
    ChevronRight,
    Phone
} from "lucide-react"
import Button from "../components/Button"
import { SectionId } from "../types"
import { PROJECTS } from "../data"

const TESTIMONIALS = [
    {
        id: 1,
        name: "Frédéric Dumas",
        date: "14/03/2025",
        heading: "Savoir-faire remarquable",
        text: "Artisan d'un grand professionnalisme pour la pose de carrelage 120x120 dans notre pièce de vie. Olivier est perfectionniste, chaque joint est millimétré. Une prestation haut de gamme que nous recommandons sans réserve pour tout projet exigeant à Lyon.",
        rating: 5,
        initial: "F",
        color: "bg-stone-800"
    },
    {
        id: 2,
        name: "Sophie Lemoine",
        date: "02/03/2025",
        heading: "Rénovation de qualité",
        text: "Nous avons fait appel à Élégance Carrelage pour une rénovation complète de salle de bain. Olivier a été de très bon conseil sur le choix des matériaux et la disposition. Travail propre, délais respectés et finitions superbes. Merci encore !",
        rating: 5,
        initial: "S",
        color: "bg-blue-900"
    },
    {
        id: 3,
        name: "Marc-Antoine G.",
        date: "18/02/2025",
        heading: "Réactivité et Précision",
        text: "Très satisfait de la pose de notre crédence en cuisine. Olivier est intervenu rapidement, a protégé le mobilier avec soin et a réalisé un travail impeccable. Le rapport qualité-prix est excellent pour un artisan de ce niveau.",
        rating: 5,
        initial: "M",
        color: "bg-indigo-900"
    }
]

const CATEGORIES = [
    "Tous",
    "Salle de Bain",
    "Cuisine",
    "Intérieur",
    "Extérieur"
]

const Home: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    })
    const [activeCategory, setActiveCategory] = useState("Tous")
    const [testimonialIdx, setTestimonialIdx] = useState(0)
    const navigate = useNavigate()

    const filteredProjects = useMemo(() => {
        if (activeCategory === "Tous") return PROJECTS
        return PROJECTS.filter(p => p.category === activeCategory)
    }, [activeCategory])

    const scrollToContact = () => {
        const el = document.getElementById(SectionId.CONTACT)
        el?.scrollIntoView({ behavior: "smooth" })
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, phone, message } = formData
        if (!name || !phone) return
        const text = `Client: ${name}\nNuméro: ${phone}\nBonjour, ${message}`
        const whatsappUrl = `https://wa.me/33645821294?text=${encodeURIComponent(
            text
        )}`
        window.open(whatsappUrl, "_blank")
    }

    const nextTestimonial = () =>
        setTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length)
    const prevTestimonial = () =>
        setTestimonialIdx(
            prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        )

    return (
        <div className='flex flex-col'>
            <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 250px;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          /* Custom grid placement to match the desired layout with 7 items */
          .item-large { grid-column: span 2; grid-row: span 2; } /* Item 1 */
          .item-wide { grid-column: span 2; grid-row: span 1; }  /* Item 3, 5 */
          .item-small { grid-column: span 1; grid-row: span 1; } /* Item 2, 4, 6, 7 */
        }
        .project-card:hover .project-overlay { opacity: 1; }
        .project-card:hover img { transform: scale(1.08); }
        .fade-enter { animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            {/* 1. Hero Section */}
            <section
                id={SectionId.HERO}
                className='relative h-screen min-h-[850px] flex items-center justify-center overflow-hidden'>
                <div className='absolute inset-0 z-0 bg-stone-900'>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover opacity-60'
                        poster='https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2070&auto=format&fit=crop'>
                        <source
                            src='https://videos.pexels.com/video-files/4474974/4474974-uhd_3840_2160_25fps.mp4'
                            type='video/mp4'
                        />
                    </video>
                    <div className='absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]'></div>
                </div>

                <div className='relative z-10 container mx-auto px-6 text-center text-white max-w-5xl flex flex-col items-center justify-center h-full pt-20'>
                    <div className='inline-block border border-white/20 bg-stone-900/30 backdrop-blur-sm px-6 py-2 rounded-full mb-8 animate-fade-in'>
                        <span className='text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-stone-100'>
                            Artisan Professionnel Lyon
                        </span>
                    </div>

                    <h1 className='font-sans font-black text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.05] tracking-tight uppercase drop-shadow-2xl'>
                        L'EXCELLENCE DU CARRELAGE
                        <br />
                        <span className='text-stone-200'>HAUT DE GAMME</span>
                    </h1>

                    <p className='text-base md:text-xl font-light text-stone-100 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-md'>
                        Pose de précision et rénovation clé en main. Nous
                        donnons vie à vos projets les plus exigeants avec
                        rigueur et passion.
                    </p>

                    <div className='bg-white rounded-full px-8 py-3 mb-12 shadow-2xl flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer border border-stone-200'>
                        <span className='font-bold text-stone-900 text-sm tracking-widest'>
                            EXCELLENT
                        </span>
                        <div className='flex gap-1'>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className='fill-amber-400 text-amber-400'
                                />
                            ))}
                        </div>
                        <div className='flex items-center font-sans font-medium text-2xl tracking-tighter ml-2'>
                            <span className='text-[#4285F4]'>G</span>
                            <span className='text-[#EA4335]'>o</span>
                            <span className='text-[#FBBC05]'>o</span>
                            <span className='text-[#4285F4]'>g</span>
                            <span className='text-[#34A853]'>l</span>
                            <span className='text-[#EA4335]'>e</span>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-4 w-full justify-center max-w-lg'>
                        <a
                            href='tel:0645821294'
                            className='bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl flex-1 text-sm tracking-widest uppercase'>
                            <Phone size={20} className='fill-stone-900' />
                            06 45 82 12 94
                        </a>
                        <button
                            onClick={scrollToContact}
                            className='group bg-transparent hover:bg-stone-900/50 border border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all backdrop-blur-sm flex-1 text-sm tracking-widest uppercase'>
                            Devis Gratuit
                            <ChevronRight
                                size={18}
                                className='group-hover:translate-x-1 transition-transform'
                            />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Services */}
            <section id={SectionId.SERVICES} className='py-24 bg-white'>
                <div className='container mx-auto px-6'>
                    <div className='text-center mb-16'>
                        <span className='text-stone-500 uppercase tracking-widest text-xs font-semibold'>
                            Nos Prestations
                        </span>
                        <h2 className='font-serif text-3xl md:text-4xl text-stone-900 mt-3'>
                            Un Savoir-faire Complet
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                        <ServiceCard
                            icon={<LayoutGrid size={24} />}
                            title='Pose Intérieur'
                            desc='Sols et murs pour toutes les pièces de vie.'
                        />
                        <ServiceCard
                            icon={<Bath size={24} />}
                            title='Salle de Bain'
                            desc="Création de douches à l'italienne et faïence."
                        />
                        <ServiceCard
                            icon={<ChefHat size={24} />}
                            title='Cuisine'
                            desc='Crédences et sols résistants et esthétiques.'
                        />
                        <ServiceCard
                            icon={<Sun size={24} />}
                            title='Extérieur'
                            desc='Terrasses, balcons et contours de piscine.'
                        />
                        <ServiceCard
                            icon={<Hammer size={24} />}
                            title='Rénovation'
                            desc="Dépose de l'ancien et préparation des supports."
                        />
                    </div>
                </div>
            </section>

            {/* 3. Réalisations */}
            <section id={SectionId.PORTFOLIO} className='py-24 bg-stone-50'>
                <div className='container mx-auto px-6'>
                    <div className='flex flex-col items-center text-center mb-16 space-y-8'>
                        <div className='space-y-4 max-w-2xl'>
                            <span className='text-stone-400 uppercase tracking-[0.3em] text-[10px] font-bold block'>
                                Portfolio
                            </span>
                            <h2 className='text-4xl md:text-5xl font-serif text-stone-900'>
                                Nos Réalisations
                            </h2>
                            <p className='text-stone-500 font-light leading-relaxed'>
                                Chaque carreau posé est une promesse de
                                durabilité. Découvrez comment nous transformons
                                les espaces lyonnais avec rigueur et esthétisme.
                            </p>
                        </div>

                        <div className='flex flex-wrap justify-center gap-4 md:gap-10 pt-8 border-b border-stone-200 pb-4 w-full'>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all relative ${
                                        activeCategory === cat
                                            ? "text-stone-900"
                                            : "text-stone-400 hover:text-stone-600"
                                    }`}>
                                    {cat}
                                    {activeCategory === cat && (
                                        <div className='absolute bottom-[-17px] left-0 w-full h-0.5 bg-stone-900 animate-fade-in' />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='bento-grid'>
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                className={`project-card relative overflow-hidden bg-stone-200 group cursor-pointer rounded-sm fade-enter item-${project.size}`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                                onClick={() =>
                                    navigate(`/project/${project.id}`)
                                }>
                                <img
                                    src={project.coverUrl}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-1000 ease-out'
                                />
                                <div className='project-overlay absolute inset-0 bg-stone-900/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8 text-white backdrop-blur-[2px]'>
                                    <span className='text-[10px] uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100'>
                                        {project.category}
                                    </span>
                                    <h3 className='font-serif text-xl md:text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 opacity-0 group-hover:opacity-100'>
                                        {project.title}
                                    </h3>
                                    <div className='mt-4 flex items-center gap-2 text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150'>
                                        VOIR LES DÉTAILS{" "}
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='mt-16 text-center'>
                        <Link
                            to='/realisations'
                            className='group inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] text-stone-900 uppercase'>
                            Explorer toute la galerie
                            <div className='w-12 h-[1px] bg-stone-300 group-hover:w-20 group-hover:bg-stone-900 transition-all duration-500' />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. À propos */}
            <section id={SectionId.ABOUT} className='py-24 bg-white'>
                <div className='container mx-auto px-6'>
                    <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16'>
                        <div className='md:w-1/2'>
                            <div className='relative'>
                                <img
                                    src='/artisan.png'
                                    alt='Artisan Carreleur'
                                    className='rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-stone-50 w-full h-[500px] object-cover'
                                />
                                <div className='absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 rounded-sm shadow-xl hidden md:block'>
                                    <p className='text-3xl font-serif font-bold italic'>
                                        15+
                                    </p>
                                    <p className='text-[10px] uppercase tracking-widest'>
                                        ans d'expérience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <span className='text-stone-500 uppercase tracking-widest text-xs font-semibold'>
                                À propos
                            </span>
                            <h2 className='font-serif text-3xl md:text-4xl text-stone-900 mt-3 mb-8'>
                                L'Excellence Artisanale à Lyon
                            </h2>
                            <p className='text-stone-600 text-lg leading-relaxed mb-8'>
                                Basé au cœur de Lyon, Élégance Carrelage
                                accompagne particuliers et architectes dans la
                                transformation de leurs espaces. Artisan
                                passionné, nous croyons que la pose de carrelage
                                est un art qui exige rigueur technique et
                                sensibilité esthétique.
                            </p>
                            <ul className='space-y-5'>
                                <li className='flex items-center gap-4 text-stone-800 font-medium'>
                                    <CheckCircle2
                                        size={24}
                                        className='text-stone-400'
                                    />{" "}
                                    Expertise locale lyonnaise & réactivité
                                </li>
                                <li className='flex items-center gap-4 text-stone-800 font-medium'>
                                    <CheckCircle2
                                        size={24}
                                        className='text-stone-400'
                                    />{" "}
                                    Finitions haute précision (joints fins)
                                </li>
                                <li className='flex items-center gap-4 text-stone-800 font-medium'>
                                    <CheckCircle2
                                        size={24}
                                        className='text-stone-400'
                                    />{" "}
                                    Respect strict des délais de chantier
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Google Testimonials Section - UPDATED LAYOUT */}
            <section className='py-24 bg-stone-100/30 border-t border-stone-200'>
                <div className='container mx-auto px-4 md:px-6 text-center'>
                    <div className='mb-12 text-center flex flex-col items-center'>
                        <h2 className='text-3xl md:text-5xl font-sans font-medium text-stone-900 mb-6 uppercase tracking-tight'>
                            Ce que nos clients disent
                        </h2>
                        <div className='flex justify-center gap-2 mb-10'>
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={24}
                                    className='fill-yellow-400 text-yellow-400'
                                />
                            ))}
                        </div>
                    </div>

                    <div className='max-w-4xl mx-auto relative text-left'>
                        <div className='bg-white rounded-2xl md:rounded-3xl p-6 md:p-14 shadow-2xl shadow-stone-300/20 relative overflow-hidden border border-stone-100'>
                            {/* Header: Title Left, Google Right (Desktop) / Stacked (Mobile) */}
                            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 mb-8 md:mb-10'>
                                <div>
                                    <h3 className='text-xl md:text-2xl font-bold text-black mb-1'>
                                        {TESTIMONIALS[testimonialIdx].heading}
                                    </h3>
                                    <p className='text-xs md:text-sm text-stone-500 uppercase tracking-widest font-medium'>
                                        Avis Google Authentique
                                    </p>
                                </div>

                                {/* Google Badge: Left aligned on mobile, Right on Desktop */}
                                <div className='flex items-center gap-3 md:scale-110 md:origin-right mt-2 md:mt-0'>
                                    <div className='flex items-center font-sans font-bold text-2xl tracking-tighter'>
                                        <span className='text-[#4285F4]'>
                                            G
                                        </span>
                                        <span className='text-[#EA4335]'>
                                            o
                                        </span>
                                        <span className='text-[#FBBC05]'>
                                            o
                                        </span>
                                        <span className='text-[#4285F4]'>
                                            g
                                        </span>
                                        <span className='text-[#34A853]'>
                                            l
                                        </span>
                                        <span className='text-[#EA4335]'>
                                            e
                                        </span>
                                    </div>
                                    <div className='flex gap-0.5 mt-1'>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className='fill-yellow-400 text-yellow-400'
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Body Text */}
                            <div className='mb-8 md:mb-12 min-h-[140px] md:min-h-[160px]'>
                                <p className='text-stone-800 text-lg md:text-xl leading-relaxed font-light italic'>
                                    "{TESTIMONIALS[testimonialIdx].text}"
                                </p>
                                <button className='text-stone-400 text-sm font-medium mt-6 hover:underline'>
                                    Lire l'avis complet
                                </button>
                            </div>

                            {/* Footer: User + Arrows */}
                            <div className='flex flex-row items-center justify-between border-t border-stone-50 pt-8 mt-4'>
                                {/* User Info */}
                                <div className='flex items-center gap-3 md:gap-5'>
                                    <div
                                        className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-inner ${TESTIMONIALS[testimonialIdx].color}`}>
                                        {TESTIMONIALS[testimonialIdx].initial}
                                    </div>
                                    <div>
                                        <h4 className='font-bold text-stone-900 text-base md:text-lg leading-tight'>
                                            {TESTIMONIALS[testimonialIdx].name}
                                        </h4>
                                        <span className='text-stone-400 text-xs md:text-sm font-light italic block mt-0.5'>
                                            Publié le{" "}
                                            {TESTIMONIALS[testimonialIdx].date}
                                        </span>
                                    </div>
                                </div>

                                {/* Arrows */}
                                <div className='flex gap-3'>
                                    <button
                                        onClick={prevTestimonial}
                                        className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-all hover:scale-110 shadow-sm'
                                        aria-label='Témoignage précédent'>
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-50 transition-all hover:scale-110 shadow-sm'
                                        aria-label='Témoignage suivant'>
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Contact */}
            <section id={SectionId.CONTACT} className='py-24 bg-stone-50'>
                <div className='container mx-auto px-6'>
                    <div className='max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-xl rounded-sm border border-stone-100'>
                        <div className='text-center mb-12'>
                            <h2 className='font-serif text-4xl text-stone-900 uppercase tracking-tight'>
                                Contactez un expert
                            </h2>
                            <p className='text-stone-500 mt-4 text-lg'>
                                Réponse sous 24h pour votre projet à Lyon
                            </p>
                        </div>

                        <form
                            className='space-y-8'
                            onSubmit={handleWhatsAppSubmit}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                <div className='space-y-3'>
                                    <label
                                        htmlFor='name'
                                        className='text-xs uppercase tracking-widest font-bold text-stone-500'>
                                        Nom complet
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-5 py-4 bg-stone-50 border-b-2 border-transparent focus:border-stone-900 outline-none transition-all'
                                        placeholder='Votre nom'
                                    />
                                </div>
                                <div className='space-y-3'>
                                    <label
                                        htmlFor='phone'
                                        className='text-xs uppercase tracking-widest font-bold text-stone-500'>
                                        Téléphone
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className='w-full px-5 py-4 bg-stone-50 border-b-2 border-transparent focus:border-stone-900 outline-none transition-all'
                                        placeholder='06 .. .. .. ..'
                                    />
                                </div>
                            </div>
                            <div className='space-y-3'>
                                <label
                                    htmlFor='message'
                                    className='text-xs uppercase tracking-widest font-bold text-stone-500'>
                                    Détails du projet
                                </label>
                                <textarea
                                    id='message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className='w-full px-5 py-4 bg-stone-50 border-b-2 border-transparent focus:border-stone-900 outline-none resize-none transition-all'
                                    placeholder='Type de carrelage, ville...'
                                />
                            </div>
                            <div className='pt-6 text-center'>
                                <Button
                                    type='submit'
                                    className='w-full md:w-auto px-16 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all'>
                                    Envoyer ma demande
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

const ServiceCard: React.FC<{
    icon: React.ReactNode
    title: string
    desc: string
}> = ({ icon, title, desc }) => (
    <div className='flex flex-col items-center text-center p-6 hover:bg-stone-50 transition-colors rounded-sm group'>
        <div className='text-stone-400 mb-4 group-hover:text-stone-900 transition-colors'>
            {icon}
        </div>
        <h3 className='font-serif text-lg text-stone-900 mb-2'>{title}</h3>
        <p className='text-sm text-stone-500 leading-relaxed'>{desc}</p>
    </div>
)

export default Home
