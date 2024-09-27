import React from 'react';
import CircleForm from './Circularform';
import Fullsphere from './Contactusrotatingsphere';
import FullScreenCube from './Hemispherewithmolecules/Hemisphere';
import FooterCube from './Footercube';

const Contactus = () => {
  return (
    <div className="relative h-[600px]">
      <CircleForm />
      <div className="absolute -z-20 pt-40 mb-10  pl-52 w-screen md:right-40 md:top-6 lg:right-80 lg:top-0 2xl:right-56">
        {/* <Fullsphere /> */}
        <FooterCube/>
      </div>
      
      <div className="absolute top-96 left-96 flex flex-col items-center space-y-10">
      <div className="font-bold hover:underline text-center md:text-4xl lg:text-6xl">
      CONTACT US
  </div>
  <div className="rounded-full bg-white hover:underline lg:text-xl p-4 ">
    WS209, Central Workshop, IIT Delhi.
  </div>
  <div className="rounded-full bg-white hover:underline  lg:p-4 lg:text-xl">
    vyomaniitd@gmail.com
  </div>
</div>

     
    </div>
  );
};

export default Contactus;
