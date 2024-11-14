import React, { useState, useEffect } from 'react'

export const CallToAction = ({ scrollToHero }) => {
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
    <div className="w-full overflow-hidden">
      <div className="relative isolate px-6 py-14 sm:py-22 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to revolutionize your construction?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/90">
            Join the Pivot Pocket Door Frame community and experience the future
            of framing. Stronger, faster, and smarter construction starts here.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button
              onClick={handleButtonClick}
              className="rounded-lg bg-white px-6 py-2.5 text-md font-semibold text-stone-900 shadow-sm hover:bg-primary-lighter focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote <span aria-hidden="true"> {'>'} </span>
            </button>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden opacity-25 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-yellow-200 to-primary opacity-80"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden opacity-25 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-primary-lighter to-primary opacity-80 animate-pulse"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100000]">
            {/* Modal Container */}
            <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[800px] h-[80vh] relative overflow-hidden flex flex-col pt-12 px-6">
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
      </div>
    </div>
  )
}
