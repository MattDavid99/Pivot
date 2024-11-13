import React, { useState, useEffect } from "react";
import { InstallationSteps } from "./InstallationSteps";
import { SectionHeader } from "./SectionHeader";

import WoodSingleDoor from "../assets/carousels/Wood-Single-Door.png";
import MetalSingleDoor from "../assets/carousels/Metal-Single-Door.png";

import WoodDoubleDoor from "../assets/carousels/Wood-Double-Door.png";
import MetalDoubleDoor from "../assets/carousels/Metal-Double-Door.png";

import SingleChart from "../assets/measurementsTables/Single-Chart-1.png";
import DoubleChart from "../assets/measurementsTables/Double-Chart-1.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./installation.css";

const Carousel = ({
  slides,
  currentSlide,
  previousSlide,
  nextSlide,
  onClick,
  chartImage,
  chartAlt,
}) => {
  const slidesLength = slides.length;
  const disabledLeftButton = currentSlide === 0;
  const disabledRightButton = currentSlide >= slidesLength - 1;

  return (
    <div className="space-y-10 md:space-y-12 mt-8 flex flex-row  ">
      <div className="imageContainer">
        <div className="flex flex-col gap-3 justify-center flex-1 lg:flex-row">
          <ImageBlockWithTitle
            imageSrc={slides[currentSlide]}
            onClick={onClick}
            titleClass="single-door-title"
          />

          <div className=" space-x-4 mr-4 flex buttonContainer">
            <button
              onClick={previousSlide}
              disabled={currentSlide === 0}
              className={`${
                disabledLeftButton ? "bg-[#c0f0c0]" : "bg-[#83ce53]"
              } text-white w-16 h-8 flex items-center justify-center shadow-lg transition duration-300 rounded-full ${
                disabledLeftButton
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#69c569]"
              }`}
              style={{ borderRadius: "20px" }}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              disabled={disabledRightButton}
              className={`${
                disabledRightButton ? "bg-[#c0f0c0]" : "bg-[#83ce53]"
              } text-white w-16 h-8 flex items-center justify-center shadow-lg transition duration-300 rounded-full ${
                disabledRightButton
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#69c569]"
              }`}
              style={{ borderRadius: "20px" }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src={chartImage}
            alt={chartAlt}
            className="chartImg"
          />
        </div>
      </div>
    </div>
  );
};

const ImageBlockWithTitle = ({ imageSrc, onClick }) => (
  <div className="flex flex-col items-center">
    <img
      src={imageSrc}
      alt={`Slide Diagram`}
      className="doorImage"
      loading="lazy"
      onClick={() => onClick(imageSrc)}
    />
  </div>
);

const SingleSlide = [WoodSingleDoor, MetalSingleDoor];
const DoubleSlide = [WoodDoubleDoor, MetalDoubleDoor];

export const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentSingleSlide, setCurrentSingleSlide] = useState(0);
  const [currentDoubleSlide, setCurrentDoubleSlide] = useState(0);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Disable background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Reset scroll on unmount
    };
  }, []);

  function handleNextSlide(type) {
    if (type === "single" && currentSingleSlide >= SingleSlide.length - 1) {
      return;
    }
    if (type === "single") {
      setCurrentSingleSlide((currentSingleSlide) => currentSingleSlide + 1);
    }

    if (type === "double" && currentDoubleSlide >= DoubleSlide.length - 1) {
      return;
    }
    if (type === "double") {
      setCurrentDoubleSlide((currentDoubleSlide) => currentDoubleSlide + 1);
    }
  }

  function handlePreviousSlide(type) {
    if (type === "single" && currentSingleSlide <= 0) {
      return;
    }
    if (type === "single") {
      setCurrentSingleSlide((currentSingleSlide) => currentSingleSlide - 1);
    }
    if (type === "double" && currentDoubleSlide <= 0) {
      return;
    }
    if (type === "double") {
      setCurrentDoubleSlide((currentDoubleSlide) => currentDoubleSlide - 1);
    }
  }

  return (
    <div className="container mx-auto px-4 -mt-8">
      {/* Main heading and installation steps */}
      <SectionHeader heading="Pivot Pocket Door Frame" />
      <InstallationSteps />
      <div className="flex flex-col gap-24">
        <Carousel
          currentSlide={currentSingleSlide}
          nextSlide={() => handleNextSlide("single")}
          previousSlide={() => handlePreviousSlide("single")}
          slides={SingleSlide}
          onClick={openModal}
          chartImage={SingleChart}
          chartAlt={`Single Chart Diagram`}
          type="single"
        />

        <Carousel
          currentSlide={currentDoubleSlide}
          nextSlide={() => handleNextSlide("double")}
          previousSlide={() => handlePreviousSlide("double")}
          slides={DoubleSlide}
          onClick={openModal}
          chartImage={DoubleChart}
          chartAlt={`Double Chart Diagram`}
          type="double"
        />
      </div>
      {/* Modal for full-size image view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full p-4 md:p-8">
            <img
              src={currentImage}
              alt="Expanded view"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
