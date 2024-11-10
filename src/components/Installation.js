import React, { useState, useEffect } from 'react';
import { InstallationSteps } from './InstallationSteps';
import { SectionHeader } from './SectionHeader';
import DoubleDoor from '../assets/Double-Table-WithDoor.png';
import SingleDoor from '../assets/Single-Table-WithDoor.png';

const ImageBlockWithTitle = ({ title, imageSrc, onClick, titleClass }) => (
  <div className="flex flex-col items-center">
    <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 z-40 ${titleClass}`}>{title}</h3>
    <img
      src={imageSrc}
      alt={`${title} Diagram`}
      className="w-full max-w-[80%] lg:max-w-[90%] h-auto cursor-pointer"
      onClick={() => onClick(imageSrc)}
    />
  </div>
);

export const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto'; // Re-enable background scroll
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Reset scroll on unmount
    };
  }, []);

  return (
    <div className="container mx-auto px-4 -mt-8">
      {/* Main heading and installation steps */}
      <SectionHeader heading="Pivot Pocket Door Frame" />
      <InstallationSteps />

      {/* New Image Sections for Single and Double Door */}
      <div className="space-y-10 md:space-y-12 mt-8">
        <ImageBlockWithTitle title="Single Door" imageSrc={SingleDoor} onClick={openModal} titleClass="single-door-title" />
        <ImageBlockWithTitle title="Double Door" imageSrc={DoubleDoor} onClick={openModal} titleClass="double-door-title" />
      </div>

      {/* Modal for full-size image view */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40" onClick={closeModal}>
          <div className="relative max-w-full max-h-full p-4 md:p-8">
            <img src={currentImage} alt="Expanded view" className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};
