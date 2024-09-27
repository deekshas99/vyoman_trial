'use client';
import { useState } from 'react';
import arrow from '../assets/svg/arrow.svg';
import Image from 'next/image';
import photoimage from '../assets/svg/image project..svg';

// Sample data array
const Data = [
  {
    id: 1,
    title: 'PROJECT TOPIC ONE STATEMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh eget interdum morbi quis pellentesque morbi in dui. Morbi ornare ut a',
  },
  {
    id: 2,
    title: 'PROJECT TOPIC ONE STATEMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh eget interdum morbi quis pellentesque morbi in dui. Morbi ornare ut a',
  },
  {
    id: 3,
    title: 'PROJECT TOPIC ONE STATEMENT',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nibh eget interdum morbi quis pellentesque morbi in dui. Morbi ornare ut a',
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null); // Control for multiple accordions
  const [comdata] = useState(Data);

  const toggleAccordion = (id) => {
    setIsOpen(isOpen === id ? null : id); // Toggle the current accordion
  };

  return (
    <div className="lg:pr:24 w-screen pl-10 pr-10 lg:pl-24 xl:mt-20 xl:pl-[24rem] xl:pr-[20rem] 2xl:mt-60 2xl:pl-72">
      <div className="flex gap-1 p-4">
        <div className="mt-10 h-5 w-5 rounded-full bg-black"></div>
        <div className="p-6 pt-8 text-2xl font-light md:text-4xl lg:text-5xl xl:text-4xl">
          PROJECTS
        </div>
      </div>
      {comdata.map((item) => (
        <div key={item.id} className="mb-4 border-b-2 border-gray-400">
          <button
            className="h-40 w-full p-4 text-left text-lg font-medium focus:outline-none"
            onMouseEnter={() => toggleAccordion(item.id)}
            onMouseLeave={() => toggleAccordion(0)}
          >
            <div className="flex justify-between">
              <div
                className={`${
                  isOpen === item.id
                    ? ''
                    : 'h-16 w-16 rounded-full bg-black p-5 pl-6 text-sm text-white md:text-sm lg:text-lg xl:text-2xl'
                }`}
              >
                {isOpen === item.id ? '' : item.id}
              </div>
              <h1
                className={`pt-5 text-sm md:text-sm lg:text-lg xl:text-2xl${
                  isOpen === item.id ? 'hidden' : ''
                }`}
              >
                {isOpen === item.id ? '' : item.title}
              </h1>
              <Image
                src={arrow}
                alt="arrow"
                className={`transform transition-transform ${
                  isOpen === item.id ? 'hidden' : ''
                }`}
              />
            </div>
          </button>
          {isOpen === item.id && (
            <div className="relative">
              <div className="grid grid-cols-3">
                <div className="w-60 pb-32 text-sm font-bold md:text-sm lg:text-2xl xl:text-4xl">
                  {item.title}
                </div>
                <div className="mb-10 h-80 w-80 overflow-hidden rounded-full bg-gray-300 p-10">
                  <Image src={photoimage} alt="image" />
                </div>
                <div className="">{item.description}</div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
