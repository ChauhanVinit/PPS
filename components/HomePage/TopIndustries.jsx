"use client";
import Image from "next/image";
import carnegie from "../../public/carnegie.svg";
import club from "../../public/club.svg";
import essex from "../../public/essex.svg";
import walmart from "../../public/walmart.svg";
import WillisCompany from "../../public/Willis-Company.svg";
const images = [
  { src: walmart, alt: "Walmart" },
  { src: carnegie, alt: "Carnegie" },
  { src: essex, alt: "Essex" },
  { src: club, alt: "Club" },
  { src: WillisCompany, alt: "Willis Company" },
];

const TopIndustries = () => {
  return (
    <div className="mx-0 sm:mx-6  xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto  px-4 py-8  sm:px-6  xl:px-8  2xl:py-20 2xl:px-[70px] grid grid-cols-12 items-center gap-4 2xl:gap-0">
      <div className="col-span-12 lg:col-span-4">
        <h3 className="font-dmSans text-[28px] 2xl:text-[32px] font-semibold leading-9 2xl:!leading-10 text-[#171A1D] tracking-[-1px] max-w-[323px]">
          Trusted By San Jose’s Leading Industries
        </h3>
      </div>

      <div className="col-span-12 lg:col-span-8   overflow-hidden">
        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-marquee">
            {[...images, ...images].map((item, index) => (
              <div key={index} className="px-4">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-auto h-[70px]"
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default TopIndustries;
