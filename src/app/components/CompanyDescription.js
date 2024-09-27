import React from 'react';

const Companydescription = () => {
  return (
    <div className="ml-12 flex w-10/12 flex-col gap-8 p-6 sm:ml-16 md:ml-28 lg:ml-28 lg:flex-row lg:gap-20 xl:ml-28 xl:gap-20 2xl:ml-40 2xl:gap-60">
      {/* Text Section */}
      <div className="mt-10 leading-relaxed w-full text-2xl md:text-4xl lg:ml-10 lg:mt-24 lg:w-[400px] lg:text-5xl xl:text-6xl 2xl:ml-20 2xl:w-[40%] 2xl:text-6xl">
        We are a team of researchers working on outdoor air
        quality monitoring.
      </div>

      {/* Description Section */}
      <div className="mt-3 w-full text-base md:text-base lg:mt-[90px] lg:w-[500px] lg:pt-20 lg:text-sm xl:mt-20 xl:text-lg 2xl:mt-6 2xl:text-lg">
        Recently, there have been significant advances in low-cost sensors (LCS)
        in air pollution monitoring. Our group is interested in understanding
        how these tools can help inform more rapid technology assessments or
        more quickly understand the impact of policy interventions. <br />
        <div className="mt-6 text-base font-semibold md:mt-10 lg:mt-4 lg:pt-0 lg:text-sm xl:mt-12 xl:text-lg 2xl:mt-7">
          We have been working with multiple LCS and conducting experiments in
          locations like New Delhi and Jodhpur. A step beyond that, our team has
          been working on developing indigenous sensors as well.
        </div>
      </div>
    </div>
  );
};

export default Companydescription;
