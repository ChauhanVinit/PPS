"use client";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { useState } from "react";
import plus from "../../public/Services/plus.svg";


const FAQ = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mb-[68px] px-4 py-10 sm:px-6 xl:px-8 2xl:p-16 bg-[#F1F3F5]/50 rounded-[40px]">
      <div className="text-center max-w-[658px] mx-auto">
        <Tag title={"Find out quick answers "} />
        <Heading
          title={
            "Frequently Asked Questions About Unarmed Security Guards Services"
          }
          className={'!text-[#222A5B]'}
        />
      </div>

      <div className="mt-[60px] flex flex-col gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="bg-white p-6 rounded-2xl shadow-[0px_2px_3px_0px_rgba(0,0,0,0.07)] cursor-pointer"
          >
            <div
              className={`flex items-start gap-4 justify-between ${
                openIndex === index ? "pb-4" : "pb-0"
              }`}
            >
              <h3 className="font-dmSans font-semibold text-xl  text-[#0C2459] tracking-[-0.5px]">
                {item.question}
              </h3>
              <button>
                <Image
                  src={plus}
                  alt="Plus"
                  className={`min-w-6 h-6 transition-all duration-200 cubic-bezier(0.4, 0, 0.68, 0.06) ${
                    openIndex === index ? " rotate-45" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-t border-[#B9CBF3]/50  transition-all duration-200 overflow-hidden cubic-bezier(0.4, 0, 0.68, 0.06) ${
                openIndex === index
                  ? "max-h-[280px] opacity-100 pt-4 "
                  : "max-h-0 opacity-0 pt-0"
              }`}
            >
              <p className="font-dmSans text-base font-normal text-[#344054]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
