import React from 'react';
import { HemisphereLight } from 'three';
import Hemispherewithmolecules from '../../Hemispherewithmolecules';
import navimage from '../../../assets/svg/navimage.svg';
import Image from 'next/image';
const Headerimage = () => {
  return (
    <div>
      <div className="absolute z-30 h-10">
        <Image src={navimage} alt="image" width={4500} />
      </div>
    </div>
  );
};

export default Headerimage;
