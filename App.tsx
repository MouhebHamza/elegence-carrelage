// File: élégance-carrelage/App.tsx
import React from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import ProjectDetail from "./pages/ProjectDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import { useEffect } from "react"
import { SectionId } from "./types"

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname, state } = useLocation()

    useEffect(() => {
        // If we have a state indicating a scroll target (like contact form)
        if (state && (state as any).scrollTo) {
            const sectionId = (state as any).scrollTo
            setTimeout(() => {
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                }
            }, 100) // Small delay to ensure page render
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, state])

    return null
}

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <div className='flex flex-col min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-stone-200'>
                <Header />
                <main className='flex-grow'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/realisations' element={<Gallery />} />
                        <Route
                            path='/project/:id'
                            element={<ProjectDetail />}
                        />
                    </Routes>
                </main>
                <WhatsAppButton />
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App
