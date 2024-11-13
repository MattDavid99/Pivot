import React, { useState, useEffect } from 'react'
import ProductViewer from './ProductViewer'

const Hestonection = ({ scrollToSection }) => {
  const [playAnimation, setPlayAnimation] = useState(true)
  const togglePlayAnimation = () => setPlayAnimation(!playAnimation)
  const [canClick3dBtn, setCanClick3dBtn] = useState(false)
  // const objVideo = 'https://dhgco4b5xc3u.cloudfront.net/Short-video-5.mp4';

  const [showForm, setShowForm] = useState(false)
  const handleButtonClick = () => setShowForm(true)
  const closeModal = () => setShowForm(false)

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [showForm])

  setTimeout(() => {
    setCanClick3dBtn(true)
  }, 4000)

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-2">
      <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col lg:text-left text-center items-center lg:items-start md:text-left d:items-start hero-content-left px-2">
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
      <style jsx>{`
        @media (max-width: 1650px) {
          .hero-content-left {
            margin-left: 20px;
          }
        }
      `}</style>

      {/* Conditionally hide this section on small screens */}
      <div className="w-[90vw] md:w-1/2 w-full flex lg:justify-end relative animation-container">
        <style jsx>{`
          @media (max-width: 500px) and (max-height: 760px) {
            .animation-container {
              height: 40%;
            }
          }
        `}</style>

        <div
          className="rounded-lg flex items-center justify-center h-[700px] w-full m-auto md:m-0 md:max-h-[700px] md:max-w-[600px]"
          style={{
            overflow: 'hidden',
            backgroundColor: 'white',
            borderRadius: '10px',
            position: 'relative',
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ProductViewer
              playAnimation={playAnimation}
              setPlayAnimation={setPlayAnimation}
              canClick3dBtn={canClick3dBtn}
            />
          </div>
        </div>

        <div className="group absolute bottom-3 right-3">
          <button
            onClick={togglePlayAnimation}
            className={`
          border-2
          border-primary
          rounded-full
          ${playAnimation ? 'bg-white' : 'bg-primary'}
          ${canClick3dBtn ? 'opacity-100' : 'opacity-0'}
          p-3
          shadow-lg
          hover:shadow-2xl
          hover:scale-105
          ${playAnimation ? 'hover:scale-105' : 'scale-105'}
          transition-all
          duration-300
          `}
            disabled={!canClick3dBtn}
          >
            <svg
              className="size-14"
              id="group"
              fill={playAnimation ? '#82ce51' : '#fff'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path
                id="arrow-left"
                className="group-hover:scale-85 transition-transform origin-center duration-300"
                d="M223.07,749.55l-134.3,78.09c23.17,10.04,94.36,11.55,55.26,49.72h-13.27l-95.68-27.02c-9.13-5.58-11.23-9.57-10.25-20.24,1.79-19.49,16.42-67.23,23.02-87.56,4.43-13.62,6.9-27.05,25.53-21.12,23.96,7.62-.18,53.84-2.28,70.93-.43,3.48-.34,3.66,3.23,3.21l129.17-76.61,19.55,30.6Z"
              />
              <path
                id="arrow-right"
                className="group-hover:scale-85 transition-transform origin-center duration-300"
                d="M793.92,718.99l131.76,76.55c5.77.5,2.21-.94,1.65-3.86-2.64-13.84-15.8-47.58-13.43-58.59,3.46-16.05,28.41-17.42,33.85-1.62l27.63,99.47v4.42c-3.42,2.51-2.64,7.55-5.04,10.46-8.72,10.58-86.76,21.86-103.3,31.53h-11.06c-6.14-4.23-11.59-6.47-12.88-14.95-4.09-26.93,49.32-24.96,65.94-34.77l-136-78.38,20.88-30.27Z"
              />
              <path
                id="arrow-up"
                className="group-hover:scale-85 transition-transform origin-center duration-300"
                d="M482.32,259.6V114.83c-16.57,9.13-43.21,57.57-64.29,41.06-12.53-9.82-5.48-21.68,2.33-31.16,10.57-12.81,53.01-56.68,65.27-65.15,8.19-5.65,16.9-6.96,25.56-1.23s62.76,60.55,69.56,69.71c5.73,7.72,9.41,20.38.99,27.6-20.74,17.79-48.34-29.32-64.05-38.61v145.87l-35.38-3.32Z"
              />
              <g className="group-hover:scale-110 transition-transform origin-center duration-300">
                <polygon
                  id="cube-color"
                  fill={!playAnimation ? '#82ce51' : '#fff'}
                  points="500 278.93 223.07 367.48 223.07 724.44 500 821.22 773.04 734.49 782 380 500 278.93"
                />
                <path
                  id="cube"
                  d="M203.52,718.95c-.13-9.51-3.78-18.82-4.3-28.27-5.17-94.87,4.1-194.34,0-289.7,2.5-29.19,16.52-52.58,43.68-64.63l232.77-72.32,6.63-4.42,35.38,3.32,237.16,73.46c26.97,11.73,41.41,33.01,43.72,62.39-5.09,97.65,6.5,201.65,0,298.54-.52,7.74-3.25,14.25-4.66,21.69l-20.88,30.27c-10,6.08-19.32,9.9-30.34,13.75-64.98,22.7-140.95,46.67-207.32,64.61-23.46,6.34-32.62,10.1-57.5,4.45-29.69-6.75-64.57-20.14-94.54-29.27-44.85-13.66-96.1-27.5-139.35-44.15-6.22-2.39-15.26-10.31-20.93-9.1l-19.55-30.6ZM721.09,362.41c-65.48-17.49-129.13-43.35-194.56-60.8-15.06-4.02-23.52-7.54-39.9-4.53-63.82,11.72-136.95,49.64-202.06,63.24l-5.67,4.25,221.86,67.91,220.33-70.07ZM482.32,464.05l-245.41-75.15c-.33,6.36-1.97,12.24-2.33,18.69-5.13,92.63,4.12,189.95.02,283.09.2,16.21,9.48,29.2,23.79,35.9l223.93,69.01v-331.53ZM517.7,465.15v330.43l223.28-69.66c7.88-.89,22.15-17.8,22.15-24.28v-307.22c0-.34-2.27-5.38-3.64-5.68l-241.78,76.41Z"
                />
              </g>
            </svg>
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
