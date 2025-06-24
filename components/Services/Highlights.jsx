"use client";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";


const Highlights = ({ data, title, desc, image }) => {
  return (
    <div id="highlights" className="mx-4 sm:mx-6 xl:mx-10  2xl:max-w-[1440px] 2xl:mx-auto mb-10
     2xl:mb-[68px] px-4 py-10 sm:px-6 xl:px-8 2xl:px-16 2xl:p-16 rounded-[40px] bg-[#EDF5FF]/50">
      <Tag title={"Highlights"} />
      <Heading title={title} className={"!mb-6 !tracking-[-2px] !text-[#222A5B]"} />
      <p className="font-dmSans font-normal text-lg 2xl:text-xl  2xl:!leading-8 text-[#374049]">
        {desc}
      </p>

      <div className="mt-[60px] flex flex-col xl:flex-row gap-8 xl:gap-10 2xl:gap-[74px] ">
        <div className="flex flex-col sm:flex-row xl:flex-col gap-4 xl:gap-10  2xl:gap-[60px]">
          {data.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex-1 xl:flex-none p-4 rounded-2xl border border-[#E8E8E8]"
            >
              <div className="w-12 h-12  inline-flex items-center justify-center">
                <Image src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="mt-5 mb-2 font-dmSans text-xl font-semibold text-[#171A1D] max-w-full xl:max-w-[284px]">
                {item.title}
              </h3>
              <p className="font-dmSans text-base font-normal text-[#374049] max-w-full xl:max-w-[284px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grow flex items-center justify-center  sm:px-4">
          <Image src={image} alt="BenefitsIMG" className="min-w-full sm:min-w-[440px] max-w-[440px]" />
        </div>

        <div className="flex flex-col sm:flex-row xl:flex-col gap-4 xl:gap-10  2xl:gap-[60px]">
          {data.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="flex-1 xl:flex-none p-4 rounded-2xl border border-[#E8E8E8]"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center">
                <Image src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="mt-5 mb-2 font-dmSans text-xl font-semibold text-[#171A1D] max-w-full xl:max-w-[284px]">
                {item.title}
              </h3>
              <p className="font-dmSans text-base font-normal text-[#374049] max-w-full xl:max-w-[284px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
