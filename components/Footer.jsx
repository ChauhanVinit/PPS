"use client";
import Image from "next/image";
import Logo from "../public/pps-logo.svg";
import { footerContentData as data } from "../data/FooterContent";
import callRinging from "../public/call-ringing.svg";
import estimate from "../public/estimate-02.svg";
import location from "../public/location-04.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" rounded-[40px] md:rounded-[0px] px-4  sm:px-6 xl:px-8 2xl:px-[120px] pt-8 sm:pt-10 2xl:pt-20 pb-8 bg-[#EDF5FF] ">
      <div className="w-full 2xl:max-w-[1200px] mx-auto">
        <div className="w-full mb-6 lg:hidden">
          <Image src={Logo} alt="Logo" className="w-[182px] h-12" />
          <p className="block lg:hidden mt-6 font-urbanist text-base  font-normal text-[#374049] max-w-[500px]">
            Plaza Protection delivers top-tier protection across the San Jose
            Bay Area with your safety front and center.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-6 md:gap-4 lg:gap-0 justify-between pb-10 border-b border-[#212121]/20">
          <div className="w-1/3 hidden lg:block">
            <Image src={Logo} alt="Logo" className="w-[182px] h-12" />
            <p className="block lg:hidden mt-6 font-urbanist text-base  font-normal text-[#374049] max-w-[340px]">
              Plaza Protection delivers top-tier protection across the San Jose
              Bay Area with your safety front and center.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex md:flex-col lg:flex-row items-start lg:items-center gap-4 justify-start  md:justify-center ">
            <div className="min-w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
              <Image src={callRinging} alt="Call icon" className=" w-5 h-5" />
            </div>
            <div>
              <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF] ">
                Call
              </h3>
              <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049]">
                +1 844-557-5292
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex md:flex-col lg:flex-row items-start lg:items-center gap-4 justify-start lg:justify-end ">
            <div className="min-w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
              <Image src={estimate} alt="Email icon" className=" w-5 h-5" />
            </div>
            <div>
              <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                Email
              </h3>
              <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049] break-all">
                contact@plazaprotection.com
              </p>
            </div>
          </div>
          <div className="flex md:flex-col lg:flex-row lg:hidden w-full md:w-1/3  items-start lg:items-center gap-4 justify-start lg:justify-end ">
            <div className="min-w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
              <Image src={location} alt={'Map pin location icon'} className=" w-5 h-5" />
            </div>
            <div>
              <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                Location
              </h3>
              <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049] text-wrap">
                1900 Camden Ave San Jose, CA 95124 United States
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 border-b border-[#212121]/20">
          <div className="flex items-start">
            <div className=" hidden lg:block w-1/3">
              <div className="flex gap-4 justify-start items-start ">
                <div className="min-w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
                  <Image src={location} alt={'Map pin location icon'} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                    Location
                  </h3>
                  <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049] max-w-[268px] text-wrap">
                    1900 Camden Ave San Jose, CA 95124 United States
                  </p>
                </div>
              </div>
              <p className="hidden lg:block mt-6 mb-8 font-urbanist text-base  font-normal text-[#374049] max-w-[340px]">
                Plaza Protection delivers top-tier protection across the San
                Jose Bay Area with your safety front and center.
              </p>
              <div className="hidden  lg:flex items-center gap-4">
                {data.socialMedia.map((media, index) => (
                  <Link href={media.path} target="_blank" key={index}>
                    <Image
                      src={media.icon}
                      alt={media.alt}
                      className=" w-10 h-10"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="grow lg:pl-20 flex flex-col gap-4 sm:gap-0 sm:flex-row items-start justify-between">
              {data.sections.map((section, index) => (
                <div key={index} className=" min-w-[198px]">
                  <h3 className="mb-4 px-2 font-jakarta text-[13px] !leading-[26px] font-bold text-[#0C2459] uppercase">
                    {section.title}
                  </h3>
                  <ul className="list-none">
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="p-2 font-urbanist text-base font-medium text-[#171A1D] !leading-5"
                      >
                        <a href={link.path} target="_blank">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden mt-8 flex items-center justify-start sm:justify-center gap-4">
            {data.socialMedia.map((media, index) => (
              <Link href={media.path} target="_blank" key={index}>
                <Image
                  src={media.icon}
                  alt={media.alt}
                  className=" w-10 h-10"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-4  items-center justify-between">
          <p className="font-urbanist font-semibold text-xs sm:text-sm sm:leading-5 text-[#344054]">
            {data.bottomSection.copyRight}
          </p>
          <div className="inline-flex items-center gap-8">
            {data.bottomSection.links.map((link, index) => (
              <div
                key={index}
                className={`font-urbanist font-semibold text-xs sm:text-sm sm:leading-5 text-[#344054] relative ${
                  index > 0
                    ? "before:absolute before:top-2 before:-left-4 before:w-1 before:h-1 before:rounded-[100px] before:bg-[#344054]"
                    : ""
                }`}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
