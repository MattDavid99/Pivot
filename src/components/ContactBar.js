import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export const ContactBar = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex gap-2 lg:gap-5">
        <div className="flex gap-2 justify-center items-center">
          <FaPhone />
          <p>Call us: (555) 123-4567</p>
        </div>
        |
        <div className="flex gap-2 justify-center items-center">
          <FaEnvelope />
          <p> Email: info@pivotmetalframes.com</p>
        </div>
      </div>
    </div>
  );
};
