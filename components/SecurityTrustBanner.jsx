import React from "react";
import lineShape from "../public/line-shape-08.svg";
import Image from "next/image";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Button from "../utils/Button";
import right from "../public/right.svg";
const SecurityTrustBanner = ({title,btnText}) => {
  return (
    <div className="relative mx-[5px] sm:mx-6  xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto  mb-10 2xl:mb-20 px-4 py-6  sm:py-10 sm:px-6 xl:px-8 2xl:p-20 rounded-2xl sm:rounded-[40px] bg-[#0C2459] text-left sm:text-center overflow-hidden">
      <Image
        src={lineShape}
        className="z-0 absolute top-0 left-0 max-h-[612px] "
        alt="lineShape"
      />
      <div className="relative">
        <Tag
          title={"Security you can blindly trust"}
          className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
        />
        <Heading
          className={"!mt-6 !text-white sm:!max-w-[723px] mx-auto"}
          title={title}
        />
        <p
          className="mt-6 mb-10 font-dmSans text-base !leading-7 font-normal text-white 
          sm:max-w-[616px] mx-auto"
        >
          Serving the San Jose area, our expert team is ready to protect what
          matters most. Contact us today for a free risk assessment!
        </p>

        <Button
         bgtransparent={'!text-white !bg-transparent sm:!rounded-2xl'}
          variant="custom"
           icon={<Image src={right} alt="right" className="sm:hidden w-4 h-4" />}
          style={"w-full sm:max-w-[190px]"}
          name={btnText}
        />
      </div>
    </div>
  );
};

export default SecurityTrustBanner;
