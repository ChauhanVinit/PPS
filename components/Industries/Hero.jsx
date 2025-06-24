import React from "react";
import Image from "next/image";
import Gun from "../../public/Residential/gun.svg";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Ellipse from "../../public/Ellipse.svg";
import Fire from "../../public/Residential/fire.svg";

const Hero = ({ title, desc, guardImg, industryImg }) => {
  return (
    <div className="w-full max-w-[1360px] mt-16 mb-[141px] mx-auto">
      <div className="flex gap-[93px]">
        <div className="relative">
          <Image
            src={industryImg}
            width={302}
            height={470}
            className="rounded-3xl min-w-[302px] h-auto"
            alt="streetHouses"
            loading="lazy"
          />
          <div className="z-[51] absolute -right-[104px] bottom-24 inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
              <Image src={Gun} alt="Gun" className="w-4 h-4" />
            </div>
            <div className="font-urbanist text-xs font-semibold text-[#11205A]">
              Unarmed Security
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-6">
              {title}
            </h1>
            <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[572px] ">
              {desc}
            </p>
          </div>

          <div className="absolute bottom-0 -left-[126px] z-50">
            <Image src={ConectElement} alt="ConectElement" width={713} />
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-12 items-start">
        <div className="p-6 rounded-3xl bg-[#2877FF]/5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div>
              <Image src={Ellipse} width={60} height={60} alt="streetHouses" />
            </div>
            <div>
              <h3 className="font-jakarta text-xl !leading-6 font-semibold text-[#171A1D] mb-2">
                Magna Architectural Design
              </h3>
              <p className="font-jakarta text-base font-semibold text-[#6B7280]">
                Manager
              </p>
            </div>
          </div>
          <div>
            <p className="font-jakarta text-base italic text-[#6B7280] max-w-[471px]">
              “Plaza Protection provides top-tier security without firearms. As
              San Jose’s leading unarmed security provider, our skilled guards
              prevent theft and vandalism, offering a reassuring defense.”
            </p>
          </div>
        </div>
        <div className="p-6 rounded-3xl border-[3px] border-[#F1F1F1]">
          <div className="mb-5 flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-[1%] text-[#11205A]">
              85%
            </h1>
            <h3 className="font-jakarta text-base text-[#0C2459] font-bold">
              Daily activities
            </h3>
          </div>

          <div className="inline-flex items-center gap-[22px]">
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[70%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className="font-jakarta font-semibold text-sm text-[#939393]">
                Sun
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[65%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className="font-jakarta font-semibold text-sm text-[#939393]">
                Mon
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[45%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                Tue
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[35%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className="font-jakarta font-semibold text-sm text-[#939393]">
                Wed
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[25%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className="font-jakarta font-semibold text-sm text-[#939393]">
                Thu
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[80%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                Fri
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                <div className="absolute bottom-0 w-full h-[40%] bg-[#1355FF] rounded-full"></div>
              </div>
              <span className="font-jakarta font-semibold text-sm text-[#939393]">
                Sat
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-[-215px]">
          <Image
            src={guardImg}
            width={399}
            height={429}
            className="rounded-3xl"
            alt="Guard Image"
            loading="lazy"
          />

          <div className="z-[51] absolute -left-[59px] top-[136px] inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
              <Image src={Fire} alt="Fire" width={16} height={16} />
            </div>
            <div className="font-urbanist text-xs font-semibold text-[#11205A]">
              Fire Watch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
