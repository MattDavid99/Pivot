import React, { useState, useEffect } from 'react'
import ProductViewer from './ProductViewer'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Hestonection = ({ scrollToSection }) => {
  const [showVideo, setShowVideo] = useState(true)
  const objVideo = 'https://dhgco4b5xc3u.cloudfront.net/Short-video-5.mp4'

  const showVideoContent = () => setShowVideo(true)
  const showModelContent = () => setShowVideo(false)

  const [showForm, setShowForm] = useState(false)
  const handleButtonClick = () => setShowForm(true) // test
  const closeModal = () => setShowForm(false)

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [showForm])

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-2">
      <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col lg:text-left text-center items-center lg:items-start md:text-left d:items-start">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          <span className="block leading-tight">
            <span className="lightning-text inline-block -mb-2 mr-2">
              A Revolutionary
            </span>
            <div></div>
            Pocket Door Frame
          </span>
        </h2>
        <p className="text-3xl mb-16 opacity-90">
          No Assembly Required <div></div>Unfold it. Install it.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-white text-stone-900 px-8 py-4 w-fit rounded-full text-lg font-semibold hover:bg-primary-lighter transition duration-300 shadow-lg transform hover:scale-105"
        >
          Buy Now
        </button>
      </div>

      {/* Conditionally hide this section on small screens */}
      <div className="md:w-1/2 w-full flex lg:justify-end relative animation-container">
        <style jsx>{`
          @media (max-width: 500px) and (max-height: 760px) {
            .animation-container {
              display: none;
            }
          }
        `}</style>

        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            overflow: 'hidden',
            width: '600px',
            height: '700px',
            backgroundColor: 'white',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <video
            autoPlay
            loop
            muted
            src={objVideo}
            className={`h-full w-full ${showVideo ? '' : 'hidden'}`}
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></video>

          <div
            className={`${showVideo ? 'hidden' : ''}`}
            style={{ width: '100%', height: '100%' }}
          >
            <ProductViewer />
          </div>
        </div>

        <div className="absolute bottom-4 flex space-x-4 mr-4">
          <button
            onClick={showVideoContent}
            disabled={showVideo}
            className={`${
              showVideo ? 'bg-[#c0f0c0]' : 'bg-[#90ee90]'
            } text-white w-16 h-8 flex items-center justify-center shadow-lg transition duration-300 rounded-full ${
              showVideo ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#76d776]'
            }`}
            style={{ borderRadius: '20px' }}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={showModelContent}
            disabled={!showVideo}
            className={`${
              !showVideo ? 'bg-[#c0f0c0]' : 'bg-[#90ee90]'
            } text-white w-16 h-8 flex items-center justify-center shadow-lg transition duration-300 rounded-full ${
              !showVideo
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-[#76d776]'
            }`}
            style={{ borderRadius: '20px' }}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[10000]">
          <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[800px] h-[80vh] relative z-[10001] overflow-hidden flex flex-col pt-12 px-6">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 focus:outline-none p-2 text-2xl z-50"
            >
              ✕
            </button>
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
    </div>
  )
}

export default Hestonection
