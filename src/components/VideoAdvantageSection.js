import React from 'react'
import { SectionHeader } from './SectionHeader'
import './installation.css'

export const VideoAdvantageSection = ({ scrollToHero }) => {
  const obj = 'https://dhgco4b5xc3u.cloudfront.net/normal-2.mp4'

  const advantages = [
    'Provides seamless integration for all project types',
    'Optimized for easy installation and reduced labor costs',
    'Sleek design for enhanced aesthetics',
    'Compatible with eco-friendly building materials',
    'Built with durability in mind',
    'Tailored with practicality and experience',
  ]

  return (
    <div className="container mx-auto px-4 -mt-8">
      {/* Only the main heading without subheading or description */}
      <SectionHeader heading="Engineered For Excellence." />

      <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8 engineered-content -mt-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Video Section */}
          <div className="lg:col-start-1">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden engineered-video">
              <video
                src={obj}
                autoPlay
                controls
                loop
                muted
                className="w-full h-full object-cover"
                style={{ pointerEvents: 'auto' }}
              ></video>
            </div>
          </div>

          {/* Advantage List Section */}
          <div className="lg:col-start-2 lg:max-w-2xl mt-8 lg:mt-0">
            <p className="text-2xl pb-2 font-semibold leading-6 text-primary uppercase">
              The Pivot Pocket Door Advantage
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
              Built for Versatility, Designed for Convenience
            </h4>
            <ul className="mt-6 space-y-3.5 text-lg">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 text-gray-600">{advantage}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
