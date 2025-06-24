"use client";
import mapsLocation from "../../public/maps-location.svg";
import Image from "next/image";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import rightDark from "../../public/right-dark.svg";
const Hero = () => {
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px]  2xl:mx-auto mt-8 lg:mt-[67px] mb-10 lg:mb-20 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 relative pt-[15px] ">
        <div className="px-5 py-2 inline-flex items-center gap-3 rounded-[50px] border border-[#B6CAFF]/50  h-12">
          <Image src={mapsLocation} className="w-6 h-6" alt="mapsLocation" />
          <span className="text-lg !leading-6 font-urbanist  font-semibold text-[#1355FF] tracking-[-0.5px]">
            San Jose, CA/Bay Area
          </span>
        </div>

        <h1 className="font-dmSans mt-4 mb-6 text-5xl  xs:text-[56px] xs:!leading-[64px]  sm:text-6xl sm:!leading-[68px] xl:text-[72px] xl:!leading-[80px] font-bold tracking-[-1px] text-[#171A1D] lg:max-w-[711px]">
          Hire <br className="sm:hidden"  /> Professional Security Guard Services
        </h1>
        <p className="text-lg sm:text-xl sm:!leading-8 font-dmSans font-normal text-[#45535E] max-w-full lg:max-w-[589px]">
          Plaza Protection provides top-tier security services across the San
          Jose Bay Area. Our trained guards specialize in de-escalation,
          ensuring safety while maintaining professionalism.
        </p>

        <div className=" w-full mt-12 flex sm:flex-row flex-col items-center gap-4">
          <Button
            icon={<Image src={right} alt="right" className="w-4 h-4" />}
            variant="blue"
            style={"w-full sm:max-w-[243px]"}
            name="Request Quote"
            path="/Request-A-Quote"
          />

          <Button
            variant="custom"
            icon={
              <Image
                src={rightDark}
                alt="right"
                className="w-4 h-4"
              />
            }
            style={"w-full sm:max-w-[162px]"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>

        <div className="hidden 2xl:block absolute -right-[63px] max-w-[687px] bottom-0   ml-auto w-full min-h-[120px] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(228,239,255,0.42)_50%,_rgba(228,239,255,1)_100%)] "></div>
      </div>
      <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
        <video autoPlay playsInline muted loop className="w-full h-full max-w-[720px]">
          <source type="video/mp4" src="/PPS-Hero-Banner.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
