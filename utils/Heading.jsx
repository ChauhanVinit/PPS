"use client"
const Heading = ({title,className}) => {
  return (
    <>
      <h1 className={`mt-6 font-dmSans text-[32px]  2xl:text-[40px] !pointer-events-none leading-10 2xl:!leading-[48px] font-semibold  text-[#171A1D] capitalize tracking-[-1px] ${className}  `}>
        {title}
      </h1>
    </>
  );                                              
};

export default Heading;
