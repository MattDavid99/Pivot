import React from 'react'
// import IconClean from '../assets/clean.png';
import IconConnect from '../assets/connect.png'
import IconSetting from '../assets/setting.png'
import IconWork from '../assets/work.png'
import IconFinish from '../assets/finish.png'
import './installation.css'

export const InstallationSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Unfold It',
      description:
        'Start by taking the frame out of the box and unfolding it to reveal the metal structure.',
      icon: IconConnect,
    },
    {
      number: 2,
      title: 'Loosely Attach Back Post',
      description:
        'Position the back post and loosely attach it to ensure flexibility for adjustments.',
      icon: IconSetting,
    },
    {
      number: 3,
      title: 'Install In The Opening',
      description:
        'Place the frame in the prepared door opening, ready for precise adjustments.',
      icon: IconWork,
    },
    {
      number: 4,
      title: 'Level The Header',
      description:
        'Adjust the header to ensure it is perfectly level, providing a stable and aligned structure.',
      icon: IconConnect,
    },
    {
      number: 5,
      title: 'Secure To The Floor',
      description:
        'Secure the bottom track to the floor, anchoring the frame in place for lasting stability.',
      icon: IconFinish,
    },
  ]

  return (
    <div className="mx-auto px-4 mb-12 sm:px-6 lg:px-8 lg:py-10 border rounded-lg mt-16 gap-10 bg-gray-50 five-step-mobile">
      <div className="text-center ">
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          Simple 5-Step Installation
        </h4>
      </div>
      <ul className="mx-auto mt-10 mb-4 grid grid-cols-1 gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className="flex-start group relative flex lg:flex-col"
          >
            {index < steps.length - 1 && (
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-primary-lighter lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"
              ></span>
            )}
            <div className="inline-flex h-10 w-10 font-bold shrink-0 items-center justify-center rounded-xl border border-primary-light bg-white transition-all duration-200 group-hover:border-primary group-hover:bg-primary-lighter">
              <img
                className="h-5 w-5 text-gray-600"
                alt="Steps To Install"
                src={step.icon}
              />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-6 text-gray-900 group-hover:text-stone-800">
              <h3 className=" text-xl font-bold before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                <span className="text-stone-600"> {step.number}. </span>
                {step.title}
              </h3>
              <h4 className="mt-2 text-base text-gray-600">
                {step.description}
                {step.link && (
                  <div>
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (https://amazon....)
                    </a>
                  </div>
                )}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
