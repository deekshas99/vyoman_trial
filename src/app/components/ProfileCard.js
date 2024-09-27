'use client';
import React, { useState } from 'react';
import img from '../assets/svg/1st.svg';
import whitearrow from '../assets/svg/whitearrow.svg';
import Image from 'next/image';
import imagelink from '../assets/svg/link image.svg';

const Profilecarddata = [
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
  {
    name: 'Gulshan Ku',
    position: 'Holding Position',
    link: '#',
    src: img,
  },
];

const ProfileCard = ({ name, position, link, src }) => {
  return (
    <div className="flex h-64 flex-col justify-between border-[1px] border-gray-200 md:h-80 lg:h-72 xl:h-[400px]">
      {/* Name and Position */}
      <div className="flex justify-around gap-8 border-b-2 border-gray-200 p-4 pl-6 sm:gap-3 sm:pl-5 md:gap-8 md:pl-6 lg:justify-around lg:gap-4 lg:pl-4 xl:gap-4 2xl:gap-12 2xl:pl-12">
        <h2 className="text-xs font-bold lg:text-sm xl:text-base">
          {name.toUpperCase()}
        </h2>
        <p className="ml-4 text-xs text-gray-500 sm:ml-0 lg:text-sm xl:text-base">
          {position.toUpperCase()}
        </p>
        <div className="pr-10">
          <a
            href={link}
            className="mt-1 flex gap-2 rounded-full border-2 border-gray-400 p-4 py-2 pr-6 text-xs text-black hover:text-gray-700 sm:pr-3 md:px-4 md:py-3 md:pb-2 lg:mr-4 lg:px-4 lg:py-2 lg:pr-6 lg:text-xs xl:px-4 xl:py-2 xl:text-sm"
          >
            <Image
              src={imagelink}
              alt="image"
              className="sm:-px-2 mt-[2px] h-3 w-3 sm:h-2 sm:w-2"
            />
            <div className="text-xs">Website</div>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative mb-8 flex justify-center sm:mb-6 md:mb-7 lg:mb-8 xl:mb-12">
        <Image
          src={src}
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40 lg:mt-4 lg:h-40 lg:w-40 xl:h-60 xl:w-60"
        />
        <div className="absolute bottom-1 right-28 flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 sm:bottom-2 sm:right-20 md:bottom-3 md:right-24 md:h-8 md:w-8 lg:bottom-3 lg:right-12 lg:h-12 lg:w-12 xl:bottom-4 xl:right-20 xl:h-12 xl:w-12">
          <div className="">
            <Image src={whitearrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCardList = () => {
  const [data] = useState(Profilecarddata);

  return (
    <div className="container mx-auto ml-5 mt-[630px] px-4 pl-10 pr-10 sm:mt-[650px] sm:pl-10 sm:pr-20 md:ml-20 md:mt-[1000px] lg:ml-20 lg:mt-20 lg:pl-8 lg:pr-16 xl:mt-40 xl:pl-40 xl:pr-40 2xl:mt-0 2xl:pl-12 2xl:pt-0">
      <div className="mb-5 mt-10 flex gap-10">
        <div className="mt-4 h-5 w-5 rounded-full bg-black"></div>
        <div className="text-2xl font-light hover:underline md:text-4xl lg:text-5xl xl:pt-1 xl:text-4xl">
          ABOUT US
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:mt-10">
        {data.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            position={profile.position}
            link={profile.link}
            src={profile.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCardList;
