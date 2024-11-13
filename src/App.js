import React, { useState, useEffect, useRef } from 'react'
import { Installation } from './components/Installation'
import { CallToAction } from './components/CallToAction'
import { FeaturesSection } from './components/Features'
import { Menu } from './components/Menu'
import { ContactBar } from './components/ContactBar'
import Hestonection from './components/Hero'
import { VideoAdvantageSection } from './components/VideoAdvantageSection'
import '../src/components/installation.css'

const MarketingPage = () => {
  const [isContactBarVisible, setIsContactBarVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const sectionRefs = useRef({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      let currentSection = 'home'
      Object.entries(sectionRefs.current).forEach(([id, ref]) => {
        if (
          ref &&
          ref.offsetTop <= scrollPosition &&
          ref.offsetTop + ref.offsetHeight > scrollPosition
        ) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
      setIsContactBarVisible(window.scrollY < 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const yOffset = -80
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans  cursor-default">
      {/* Contact Bar */}
      <section
        id="home"
        ref={(el) => (sectionRefs.current['home'] = el)}
        className={`bg-gray-800 text-white py-2 transition-all duration-300 hidden lg:flex ${
          isContactBarVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'
        }`}
      >
        <ContactBar />
      </section>

      {/* Menu */}
      <Menu activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="scroll-smooth">
        {/* Hero*/}
        <section className="py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
          <Hestonection
            scrollToSection={() => scrollToSection('installation')}
          />
        </section>

        {/* Features */}
        <section
          id="features"
          ref={(el) => (sectionRefs.current['features'] = el)}
        >
          <FeaturesSection />
        </section>

        {/* VideoAdvantageSection */}
        <section
          id="video-advantage"
          ref={(el) => (sectionRefs.current['video-advantage'] = el)}
          className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 video-advantage-mobile"
        >
          <VideoAdvantageSection scrollToHero={() => scrollToSection('home')} />
        </section>

        {/* Video Section */}
        <section
          id="video"
          ref={(el) => (sectionRefs.current['installation'] = el)}
          className="py-24 bg-white"
        >
          <Installation />
        </section>

        {/* CallToAction*/}
        <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
          <CallToAction scrollToHero={() => scrollToSection('home')} />
        </section>
      </main>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-4 flex justify-center ">
        <div className="container gap-2 items-center flex-col flex lg:flex-row lg:justify-between ">
          <p>&copy; 2024 Pivot Pocket Door. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default MarketingPage
