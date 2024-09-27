'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import photoimage from '../assets/svg/2nd.svg';
import image2 from '../assets/svg/3.svg';

const carouselItems = [
  { id: 1, imageSrc: photoimage, location: 'Gramodaya Parisar, Delhi' },
  { id: 2, imageSrc: image2, location: 'Connaught Place, Delhi' },
  { id: 3, imageSrc: photoimage, location: 'India Gate, Delhi' },
];

export default function ResponsiveCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (activeIndex + 1) % carouselItems.length;

  return (
    <div className="mx-auto w-full max-w-xs px-4 pt-8 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <div className="relative aspect-square">
        <div className="absolute inset-0 ml-10 h-3/4 w-3/4 overflow-hidden rounded-full sm:inset-auto sm:bottom-0 sm:left-0 sm:right-0 sm:top-0">
          <Image
            src={carouselItems[activeIndex].imageSrc}
            alt={`Study at ${carouselItems[activeIndex].location}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute -right-32 top-20 hidden h-1/2 w-1/2 overflow-hidden rounded-full opacity-30 lg:block">
          <Image
            src={carouselItems[nextIndex].imageSrc}
            alt={`Next study at ${carouselItems[nextIndex].location}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 left-10 w-52 py-1 sm:w-60 sm:px-3 sm:py-1 md:w-80 lg:-left-40 lg:bottom-[7.5rem] lg:w-96 lg:border-b-2 lg:border-black 2xl:-left-96 2xl:bottom-40 2xl:w-[40rem] 2xl:border-b-2 2xl:border-gray-400">
          <p className="text-center text-xs font-semibold sm:text-sm lg:text-start lg:text-xl xl:text-2xl">
            {carouselItems[activeIndex].location}
          </p>
        </div>
        <div className="absolute bottom-2 right-4 flex space-x-1 lg:bottom-28 2xl:-right-60 2xl:top-[30rem]">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
