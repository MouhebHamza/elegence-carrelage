// File: élégance-carrelage/pages/ProjectDetail.tsx
import React, { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    MapPin,
    Share2,
    Phone,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { PROJECTS } from "../data"
import { SectionId } from "../types"

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const project = PROJECTS.find(p => p.id === Number(id))

    // State for the Desktop Slideshow
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    // Auto-scroll logic for Desktop
    useEffect(() => {
        if (!project || isPaused) return

        const allImages = [project.coverUrl, ...project.galleryImages]
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % allImages.length)
        }, 4000) // Change image every 4 seconds

        return () => clearInterval(interval)
    }, [project, isPaused])

    if (!project) return null

    const allImages = [project.coverUrl, ...project.galleryImages]

    const handleContactClick = () => {
        navigate("/", { state: { scrollTo: SectionId.CONTACT } })
    }

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % allImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide(
            prev => (prev - 1 + allImages.length) % allImages.length
        )
    }

    return (
        <div className='bg-white min-h-screen animate-fade-in'>
            {/* ==================================================================
          MOBILE LAYOUT (Visible < 768px) - "Slider / App Style"
         ================================================================== */}
            <div className='block md:hidden relative pb-24'>
               

                {/* Mobile Swipe Gallery */}
                <div className='relative w-full h-[65vh] bg-stone-100'>
                    <div className='absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full z-10 font-medium tracking-widest'>
                        {allImages.length} PHOTOS
                    </div>

                    <div className='flex w-full h-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide'>
                        {allImages.map((img, idx) => (
                            <div
                                key={idx}
                                className='w-full flex-shrink-0 snap-center relative'>
                                <img
                                    src={img}
                                    alt={`Vue ${idx}`}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Body */}
                <div className='px-6 py-8 -mt-6 relative z-10 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)]'>
                    <div className='w-12 h-1 bg-stone-200 rounded-full mx-auto mb-6' />{" "}
                    {/* Handle visual */}
                    <span className='text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold'>
                        {project.category}
                    </span>
                    <h1 className='text-3xl font-serif text-stone-900 mt-2 mb-6 leading-tight'>
                        {project.title}
                    </h1>
                    <div className='flex items-center gap-2 text-stone-500 text-sm mb-8 bg-stone-50 py-3 px-4 rounded-lg inline-block w-full'>
                        <MapPin size={16} className='text-stone-900' />
                        <span>Réalisé en région Lyonnaise</span>
                    </div>
                    <div className='space-y-6 text-stone-600 font-light leading-relaxed text-lg'>
                        <p>{project.description}</p>
                        <p>
                            Nous avons apporté une attention particulière aux
                            finitions et au calepinage pour garantir un rendu
                            esthétique parfait et une durabilité maximale.
                        </p>
                    </div>
                </div>

                {/* Sticky Mobile Footer CTA */}
                <div className='fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-stone-100 flex items-center gap-4 z-40'>
                    <a
                        href='tel:0645821294'
                        className='w-14 h-14 flex items-center justify-center rounded-full bg-stone-100 text-stone-900'>
                        <Phone size={24} />
                    </a>
                    <button
                        onClick={handleContactClick}
                        className='flex-1 bg-stone-900 text-white h-14 rounded-full font-bold uppercase tracking-widest text-xs'>
                        Demander un devis
                    </button>
                </div>
            </div>

            {/* ==================================================================
          DESKTOP LAYOUT (Visible >= 768px) - "Split Screen Auto-Scroll"
         ================================================================== */}
            <div className='hidden md:flex h-screen overflow-hidden'>
                {/* LEFT PANEL: Content (40% width) */}
                <div className='w-[40%] flex flex-col h-full bg-white border-r border-stone-100 relative z-20'>
                    {/* Clean Header */}
                    <div className='p-8'>
                        <button
                            onClick={() => navigate("/")}
                            className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors'>
                            <ArrowLeft size={16} />
                            Retour aux projets
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className='flex-1 overflow-y-auto px-12 py-4'>
                        <span className='text-stone-400 text-xs uppercase tracking-[0.2em] font-bold'>
                            {project.category}
                        </span>
                        <h1 className='text-5xl font-serif text-stone-900 mt-4 mb-8 leading-tight'>
                            {project.title}
                        </h1>

                        <div className='w-16 h-1 bg-stone-900 mb-8' />

                        <div className='prose prose-stone prose-lg text-stone-600 font-light leading-relaxed mb-12'>
                            <p>{project.description}</p>
                            <p>
                                Chez Élégance Carrelage, chaque projet est
                                unique. Pour cette réalisation, nous avons
                                sélectionné des matériaux de première qualité
                                pour assurer une longévité exceptionnelle.
                            </p>
                        </div>

                        <div className='bg-stone-50 p-6 rounded-sm mb-8'>
                            <h3 className='font-serif text-stone-900 text-lg mb-2'>
                                Détails techniques
                            </h3>
                            <ul className='text-sm text-stone-500 space-y-2'>
                                <li className='flex justify-between border-b border-stone-200 pb-2'>
                                    <span>Lieu</span>{" "}
                                    <span className='text-stone-900'>
                                        Lyon, France
                                    </span>
                                </li>
                                <li className='flex justify-between border-b border-stone-200 pb-2'>
                                    <span>Année</span>{" "}
                                    <span className='text-stone-900'>2024</span>
                                </li>
                                <li className='flex justify-between pt-2'>
                                    <span>Matériaux</span>{" "}
                                    <span className='text-stone-900'>
                                        Grès Cérame / Pierre
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Fixed Bottom CTA */}
                    <div className='p-8 border-t border-stone-100 bg-white'>
                        <button
                            onClick={handleContactClick}
                            className='w-full bg-stone-900 text-white py-5 px-6 font-bold uppercase tracking-widest text-xs hover:bg-stone-800 transition-all flex justify-center items-center gap-3'>
                            Demander un devis pour ce projet
                            <ArrowLeft size={16} className='rotate-180' />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL: Auto-Scroll Gallery (60% width) */}
                <div
                    className='w-[60%] h-full relative bg-stone-100 overflow-hidden group'
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    {allImages.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                idx === currentSlide
                                    ? "opacity-100 z-10"
                                    : "opacity-0 z-0"
                            }`}>
                            <img
                                src={img}
                                alt={`Slide ${idx}`}
                                className='w-full h-full object-cover'
                            />
                            {/* Dark overlay for text contrast if needed, currently transparent */}
                            <div className='absolute inset-0 bg-black/0' />
                        </div>
                    ))}

                    {/* Progress Bar */}
                    <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20'>
                        <div
                            className='h-full bg-white transition-all duration-300 ease-out'
                            style={{
                                width: `${
                                    ((currentSlide + 1) / allImages.length) *
                                    100
                                }%`
                            }}
                        />
                    </div>

                    {/* Manual Controls (Visible on hover) */}
                    <div className='absolute inset-0 z-20 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button
                            onClick={prevSlide}
                            className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all'>
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all'>
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Slide Counter */}
                    <div className='absolute top-8 right-8 z-20 bg-black/50 backdrop-blur-md text-white px-4 py-2 text-xs font-bold tracking-widest rounded-full'>
                        {currentSlide + 1} / {allImages.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
