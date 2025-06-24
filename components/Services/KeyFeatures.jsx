"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import rightDark from "../../public/right-dark.svg";
const KeyFeatures = ({ data, title, desc }) => {
  return (
    <div
      id="key-features"
      className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto px-4 py-10 sm:px-6 xl:px-8 2xl:px-16 2xl:py-20 rounded-[40px] bg-[#E7E7FF]/20 mb-10
     2xl:mb-[68px]"
    >
      <div className="flex flex-col xl:flex-row  xl:justify-between items-start xl:items-end gap-8 xl:gap-0">
        <div>
          <Tag title={"Key Features"} />
          <Heading title={title} className={"!mb-6 max-w-[1012px] !text-[#222A5B] tracking-[-2px]"} />
          <p className="font-normal font-dmSans text-lg 2xl:text-xl  2xl:!leading-8 text-[#374049] max-w-full xl:max-w-[915px]">
            {desc}
          </p>
        </div>
        <div className="w-full xl:w-auto  inline-flex sm:flex-row flex-col items-center gap-4">
          <Button
            variant="custom"
            bgtransparent={'!bg-transparent'}
              icon={<Image src={rightDark} alt="right" className="sm:hidden w-4 h-4" />}
              style={"w-full sm:!max-w-[162px] sm:min-w-[162px]"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 2xl:gap-6 mt-[60px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 xl:col-span-3 p-4 rounded-2xl border border-[#FFF0E0] bg-white"
          >
            <Image src={item.icon} alt={item.title} width={32} height={32} />
            <div className="mt-6">
              <h3 className="mb-2 font-dmSans font-bold text-xl  !leading-6 text-[#171A1D] tracking-[-0.5px]">
                {item.title}
              </h3>
              <p className="font-dmSans font-normal text-base text-[#374049]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
