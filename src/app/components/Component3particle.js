'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import first from '../assets/svg/1st.svg';
import second from '../assets/svg/2nd.svg';
import third from '../assets/svg/3.svg';

// Data
const data = [
  {
    src: first,
    alt: 'image',
    title: 'PARTICULATE MATTER',
    description:
      'Particulate matter (PM) consists of tiny solid particles and liquid droplets suspended in the air, affecting air quality and health.',
    width: 0,
    height: 0,
  },
  {
    src: second,
    alt: 'image',
    title: 'OZONE PARTICLES',
    description: `Ground-level ozone is a harmful secondary pollutant formed when two primary pollutants react in sunlight and stagnant air.`,
    width: 0,
    height: 0,
  },
  {
    src: third,
    alt: 'image',
    title: 'BLACK CARBON',
    description:
      'Black carbon is the sooty black material emitted from gas and diesel engines, coal-fired power plants, and other sources that burn fossil fuel.',
    width: 0,
    height: 0,
  },
];

// Component for rendering rounded images
const RoundedImageComponent = ({ src, alt }) => {
  return (
    <div className="flex justify-center overflow-hidden rounded-full">
      <Image
        src={src}
        alt={alt}
        className="h-32 w-32 object-cover sm:h-44 sm:w-44 md:h-60 md:w-60 lg:h-40 lg:w-40 xl:h-52 xl:w-52 2xl:h-60 2xl:w-60"
      />
    </div>
  );
};

export default function Componentof3particlematter() {
  const [roundedImageComponents] = useState(data);

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto mt-1 grid h-80 w-9/12 grid-cols-1 items-center justify-center p-6 sm:pl-16 md:grid-cols-1 lg:grid-cols-3 lg:pl-0 2xl:mt-10 lg:gap-28">
        {roundedImageComponents.map((imageData, index) => (
          <div
            className="flex flex-col items-center md:items-center lg:items-start"
            key={index}
          >
            <RoundedImageComponent src={imageData.src} alt={imageData.alt} />
            <div className="text-center lg:text-start">
              <div className="xl:text-md pt-6 mt-4 block text-xl font-medium md:text-xl xl:mt-6">
                {imageData.title}
              </div>
              <div className="text-base pt-3 md:w-80 md:text-base lg:w-80 lg:text-sm xl:text-base">
                {imageData.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
