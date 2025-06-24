"use client";
import { useState } from "react";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import rightDark from "../../public/right-dark.svg";
const CoreFeatures = ({ data, title, desc, img }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
                                               
  return (
    <div
      id="why-choose"
      className="mx-0 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto px-4 py-10 sm:px-6 xl:px-8 2xl:py-20 2xl:px-16 flex flex-col-reverse lg:flex-row   items-center gap-8 lg:gap-10 2xl:gap-20 rounded-[40px] mb-10 2xl:mb-[68px]"
    >  
      <div className="w-full lg:w-1/2">
        <Image src={img} className="object-cover" alt="Why Choose Us" />
      </div>

      <div className="w-full lg:w-1/2">
        <Tag title={"Why Choose Us"} />
        <Heading title={title} className={"!text-[#222A5B] tracking-[-2px]"} />
        <p className="mt-6 mb-8 font-normal font-dmSans text-lg 2xl:text-xl  2xl:!leading-8 text-[#374049] max-w-full lg:max-w-[593px]">
          {desc}
        </p>
         <div className="flex">
            <Button
          variant="custom"
          icon={<Image src={rightDark} alt="right" className="w-4 h-4" />}
          style={"w-full sm:max-w-[162px]"}
          name="Contact Us"
          path="/Contact-Us"
        />    
           </div>      
        <div className="mt-8 lg:mt-10 2xl:mt-[60px] flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E0EAFF] cursor-pointer transition-all px-6 py-4"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-semibold font-dmSans  text-xl  2xl:text-2xl text-[#171A1D] tracking-[-0.5px]">
                {item.title}
              </h3>
              <div
                className={`transition-all duration-200 cubic-bezier(0.4, 0, 0.68, 0.06) overflow-hidden ${
                  openIndex === index
                    ? "max-h-12 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >     
                <p className="font-dmSans text-base font-normal text-[#374049]">
                  {item.description}
                </p>
              </div>
            </div>   
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
