import React from 'react';
import Image from 'next/image';
import vyoman from '../../../assets/svg/vyoman.svg';
import Headerimage from './Headerimage';

const Header = () => {
  return (
    <header className="relative items-center justify-between">
      <div className="flex flex-col">
        <Headerimage />
        <div className="z-30 flex justify-between pl-4 sm:pl-6 sm:pr-4 lg:pl-16 xl:pr-10">
          <div className="flex-shrink-0">
            <Image
              src={vyoman}
              alt="Vyoman Logo"
              className="h-10 w-24 sm:h-12 sm:w-28 lg:h-16 lg:w-36 xl:h-24 xl:w-44"
            />
          </div>
          <div className="flex items-center">
            <button className="rounded-full bg-black px-6 py-2 text-sm text-white sm:px-6 sm:py-2 sm:text-base">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
