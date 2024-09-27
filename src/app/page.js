import Accordion from '../app/components/Accordion';
import Companydescription from '../app/components/CompanyDescription';
import Componentof3particlematter from '../app/components/Component3particle';
import Contactus from '../app/components/Contactus';
import ResponsiveCarousel from '../app/components/Crousel';
import Hemispherewithmolecules from '../app/components/Hemispherewithmolecules';
import ProfileCardList from '../app/components/ProfileCard';

export default function Home() {
  return (
    <>
      <Hemispherewithmolecules />
      <div className="md:mt-[480px] lg:mt-[1000px]">
        <Companydescription />
        <div className="2xl:ml-6">
          <Componentof3particlematter />
        </div>
      </div>

      <Accordion />
      <div className="flex gap-8 2xl:ml-72 2xl:mt-40">
        <div className="mt-4 h-5 w-5 rounded-full bg-black"></div>
        <div className="text-4xl font-light xl:pt-1">COLLOCATED STUDIES</div>
      </div>

      <div className="md:ml-20 2xl:mt-20">
        <ResponsiveCarousel />
      </div>
      <div className="2xl:ml-36">
        <ProfileCardList />
      </div>
      <Contactus />
    </>
  );
}
