'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import navimage from '../assets/svg/transparent.png';
import Hemisphere from './Hemispherewithmolecules/Hemisphere';
import Molecule1 from './Hemispherewithmolecules/Molecule1';
import Molecule2 from './Hemispherewithmolecules/Molecule2';
import Molecule3 from './Hemispherewithmolecules/Molecule3';
import CompressedMolecule from './Hemispherewithmolecules/Molecule4';
import Molecule5 from './Hemispherewithmolecules/Molecule5';
import Companydescription from './CompanyDescription';

const Hemispherewithmolecules = () => {
  // const [isZoomed, setIsZoomed] = useState(false)

  // const toggleZoom = () => {
  //   setIsZoomed(!isZoomed)
  // }

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter' || event.key === ' ') {
  //     event.preventDefault()
  //     toggleZoom()
  //   }
  // }
  return (
    <div className="relative">
      {/* <div className="absolute top-8 z-30 h-10">
        <Image src={navimage} alt="image" width={4500} />
      </div> */}
      <div
        className={`absolute top-4 bg-gray-100 bg-gradient-to-b from-gray-300 to-white md:h-[100%] md:w-screen lg:h-[85vh] lg:w-full`}
      >
        <Hemisphere />
      </div>
      <div
        className={`absolute h-20 w-20 md:left-[32%] md:top-[25%] lg:left-[30%] lg:top-[700px]`}
      >
        <Molecule1 />
      </div>
      <div className="absolute h-20 w-20 md:left-[45%] md:top-[25%] lg:left-[40%] lg:top-[700px]">
        <Molecule2 />
      </div>
      <div className="absolute h-20 w-20 md:left-[58%] md:top-[25%] lg:left-[50%] lg:top-[700px]">
        <Molecule3 />
      </div>
      <div className="absolute h-20 w-20 md:left-[72%] md:top-[25%] lg:left-[60%] lg:top-[700px]">
        <CompressedMolecule />
      </div>
      <div className="absolute h-20 w-20 md:left-[85%] md:top-[25%] lg:left-[70%] lg:top-[700px]">
        <Molecule5 />
      </div>
      <div className="absolute z-10 h-10 w-screen bg-gradient-to-b from-gray-100 to-gray-700 opacity-0 mix-blend-multiply md:top-[40%] lg:top-[1360px]"></div>
    </div>
  );
};

export default Hemispherewithmolecules;
