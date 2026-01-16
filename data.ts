// File: élégance-carrelage/data.ts

export interface ProjectData {
    id: number
    category: string
    title: string
    description: string
    coverUrl: string
    size: "large" | "small" | "wide" | "tall" // For grid layout
    galleryImages: string[]
}

export const PROJECTS: ProjectData[] = [
    {
        id: 1,
        category: "Salle de Bain",
        title: "Douche Italienne Marbre",
        description:
            "Rénovation complète d'une suite parentale avec création d'une douche à l'italienne. Utilisation de grès cérame effet marbre grand format (120x120) pour une continuité visuelle et une élégance intemporelle. Robinetterie encastrée finition or brossé.",
        coverUrl:
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
        size: "large", // 2x2
        galleryImages: [
            "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200",
            "https://images.unsplash.com/photo-1552321988-30f0ef92305e?q=80&w=1200",
            "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1200"
        ]
    },
    {
        id: 2,
        category: "Salle de Bain",
        title: "Baignoire Îlot",
        description:
            "Aménagement d'une salle de bain lumineuse avec baignoire îlot. Pose de carrelage au sol gris anthracite pour le contraste et faïence murale blanche épurée.",
        coverUrl:
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200",
        size: "small", // 1x1
        galleryImages: [
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200"
        ]
    },
    {
        id: 7,
        category: "Salle de Bain",
        title: "Détails Minimalistes",
        description:
            "Focus sur les finitions : niches encastrées éclairées par LED et joints époxy ultra-fins pour une durabilité maximale et un entretien facilité.",
        coverUrl:
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        size: "small", // 1x1 (THE NEW ITEM FILLING THE GAP)
        galleryImages: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200",
            "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1200"
        ]
    },
    {
        id: 3,
        category: "Intérieur",
        title: "Salon Grand Format",
        description:
            "Pose de dalles XXL (120x120) dans une pièce de vie de 80m². Préparation minutieuse du sol (ragréage fibré) et double encollage pour une tenue parfaite.",
        coverUrl:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
        size: "wide", // 2x1
        galleryImages: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
        ]
    },
    {
        id: 4,
        category: "Cuisine",
        title: "Crédence Zellige",
        description:
            "Pose artisanale de Zellige marocain véritable en crédence de cuisine. Le jeu de nuances et la surface irrégulière apportent un cachet unique et chaleureux.",
        coverUrl:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
        size: "small", // 1x1
        galleryImages: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200"
        ]
    },
    {
        id: 5,
        category: "Extérieur",
        title: "Terrasse Piscine",
        description:
            "Habillage de contour de piscine en carrelage antidérapant R11 effet pierre de Bali. Margelles sur mesure et pose sur plots pour une évacuation optimale des eaux.",
        coverUrl:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop",
        size: "wide", // 2x1
        galleryImages: [
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200",
            "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=1200"
        ]
    },
    {
        id: 6,
        category: "Intérieur",
        title: "Entrée Travertin",
        description:
            "Restauration d'une entrée avec pose de travertin en opus romain. Traitement hydrofuge et finitions à la chaux pour respecter le bâti ancien.",
        coverUrl:
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
        size: "small", // 1x1
        galleryImages: [
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200"
        ]
    }
]
