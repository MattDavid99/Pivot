import React, { useState, useEffect } from 'react'
import Logo from '../assets/Main-Logo.png'

export const Menu = ({ activeSection, scrollToSection }) => {
  // State to track whether to show the iframe or not
  const [showForm, setShowForm] = useState(false)

  // Toggle function to show/hide the form
  const handleButtonClick = () => {
    setShowForm(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setShowForm(false)
  }

  useEffect(() => {
    if (showForm) {
      // Disable scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scroll
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showForm])

  return (
    <>
      <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <img
              src={Logo}
              className="hero-logo"
              alt="Pivot Pocket Door Logo"
              style={{
                height: '50px',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-55%) translateX(-15%)',
              }}
            />
            <style jsx>{`
              @media (max-width: 1650px) {
                .hero-logo {
                  margin-left: 20px;
                }
              }
            `}</style>
            {/* Navigation */}
            <nav className="hidden md:block ml-[200px]">
              <ul className="flex space-x-9 pt-0.5">
                {['home', 'features', 'installation'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`hover:text-primary transition duration-300 relative ${
                        activeSection === section
                          ? 'text-primary font-bold'
                          : ''
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      {activeSection === section && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-100 transition-transform duration-300"></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Save Now Button */}
          <button
            onClick={handleButtonClick}
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition duration-300 transform hover:scale-105"
          >
            Save Now
          </button>
        </div>
      </header>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[10000]">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[800px] h-[80vh] relative z-[10001] overflow-hidden flex flex-col pt-12 px-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 focus:outline-none p-2 text-2xl z-50"
            >
              ✕
            </button>
            {/* Iframe Wrapper */}
            <div className="flex-grow overflow-y-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDYia_kfnJLJKP1xf2LI5GWiMm55O49B0XBQC9nR8Oy4uvlw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Request Form"
                className="rounded-b-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
