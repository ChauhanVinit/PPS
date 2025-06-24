"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import right from "../../public/right.svg";
import rightDark from "../../public/right-dark.svg";
const scrollIntoData = [
  { id: "why-choose", title: "Why Choose Us" },
  { id: "key-features", title: "Key Features" },
  { id: "highlights", title: "Highlights" },
];

const Hero = ({ title, desc, img }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="px-4 sm:px-6  xl:px-10 2xl:max-w-[1440px] 2xl:mx-auto mb-10 mt-10  2xl:mt-20 2xl:mb-[140px]">
      <div className="flex flex-col lg:flex-row items-stretch w-full  relative overflow-visible ">
        <div className="w-full lg:w-1/2 2xl:w-full   2xl:max-w-[490px] relative z-10 lg:pt-[38px] lg:pb-[34px]">
          <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] xl:text-[60px] xl:!leading-[68px] 2xl:text-[64px]  2xl:!leading-[72px] font-semibold text-[#222A5B] mb-8 capitalize tracking-[-3px]  lg:-mr-80   xl:-mr-96">
            {title}
          </h1>
          <p className="font-dmSans text-lg 2xl:text-xl !leading-8 px-4 rounded border-l-[3px] border-l-[#B0BABF] font-normal text-[#45535E] lg:-mr-14">
            {desc}
          </p>
          <div className="w-full mt-12 inline-flex sm:flex-row flex-col items-center gap-4">
            <Button
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
              variant="blue"
              style={"!w-full sm:max-w-[243px]"}
              name="Request Quote"
              path="/Request-A-Quote"
            />
            <Button
              variant="custom"
              icon={<Image src={rightDark} alt="right" className="w-4 h-4" />}
              style={"w-full sm:max-w-[162px]"}
              name="Contact Us"
              path="/Contact-Us"
            />
          </div>

          <div className="inline-flex items-center px-2  sm:px-4 border border-[#E9E9E9] rounded-full gap-2 mt-12 min-h-[62px]">
            {scrollIntoData.map((item) => (
              <button
                key={item.id}
                className="relative px-2  sm:px-[14px] font-dmSans font-semibold text-xs   sm:text-base text-[#666666] tracking-[-0.5px] after:absolute after:h-5 after:w-[1px] after:bg-[#D7D7D7] after:-right-[3.5px]  after:top-0 last:after:hidden"
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full hidden lg:block lg:w-1/2  2xl:grow flex-shrink-0 z-0">
          <Image src={img} alt="GuardImage" className="object-cover h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
