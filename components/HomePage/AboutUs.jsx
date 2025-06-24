"use client";
import Residential from "../../public/Residential.png";
import Commercial from "../../public/Commercial.png";
import Construction from "../../public/Construction.png";
import ShoppingCenter from "../../public/Shopping-Center.png";
import Healthcare from "../../public/Healthcare.png";

import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";
import Button from "../../utils/Button";
import rightDark from "../../public/right-dark.svg";
const AboutusData = [
  {
    image: Residential,
    title: "Residential Communities",
    description:
      "Plaza Protection’s security guards are committed to protecting residential communities, providing a secure and peaceful environment for every home.",
    path: "/Residential-Communities",
  },
  {
    image: Commercial,
    title: "Commercial Buildings",
    description:
      "Plaza Protection’s security experts are skilled in addressing the unique challenges of commercial properties, safeguarding your business against break-ins, theft, and vandalism.",
    path: "/Commercial-Buildings",
  },
  {
    image: Construction,
    title: "Construction Sites",
    description:
      "Plaza Protection security guards safeguard construction sites by preventing theft, monitoring activity, and maintaining a safe environment for your crew and assets.",
    path: "/Construction-Sites",
  },
  {
    image: ShoppingCenter,
    title: "Shopping Center",
    description:
      "Plaza Protection’s security guards offer customized protection for shopping centers, creating a safe and welcoming environment for both shoppers and retailers.",
    path: "/Shopping-Centers",
  },
  {
    image: Healthcare,
    title: "Healthcare Facilities",
    description:
      "Plaza Protection’s security guards are expertly trained to meet the specific safety needs of healthcare environments, ensuring a secure space for patients, staff, and visitors.",
    path: "/Healthcare-Facilities",
  },
];
const AboutUs = () => {
  const isClient = useIsClient();

  return (
    <div className="w-full 2xl:pl-[calc((100%-1440px)/2)] ">
      <div className="rounded-[40px] sm:rounded-tr-[0px] sm:rounded-br-[0px]  sm:rounded-tl-[40px] sm:rounded-bl-[40px]  relative mt-10  sm:-mt-[116px] pb-[114px]  pt-8 px-4 sm:pb-[122px] sm:pt-10  sm:px-6 md:py-10  xl:px-8  2xl:py-20 2xl:pr-[0px] 2xl:pl-[60px] bg-[#EDF5FF]  mx-4 sm:ml-6 sm:mr-0  xl:ml-10 2xl:mx-0">
        <Tag title={"Quick view about us"} />

        <Heading title={"Trusted Security Services For Every Industry"} className={'      md:max-w-[600px] lg:max-w-full'} />
        {isClient && (
          <Splide
            className="QuickView-slider"
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perMove: 1,
              rewind: true,
              perPage: 3,
              gap: "24px",
              pagination: false,
              breakpoints: {
                1440: { gap: "16px" }, 
                1040: {perPage: 2 },
                768: { perPage: 1, pagination: true },
                
              },
              autoplay: false,
              arrows: true,
              classes: {
                arrow: "custom-arrow",
                prev: "serv-prev",
                next: "serv-next",
              },
              interval: 3000,
              
            }}
          >
            {AboutusData.map((item, index) => (
              <SplideSlide key={index}>
                <div className="p-2 xl:p-4">
                  <div className="overflow-hidden max-h-[350px] max-w-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className=" w-full h-auto"
                    />
                  </div>

                  <h2 className="mt-8 mb-4 font-dmSans text-xl  lg:text-[22px] lg:!leading-[30px]  2xl:text-2xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                    {item.title}
                  </h2>
                  <p className="mb-8 font-dmSans text-base  font-normal text-[#45535E]">
                    {item.description}
                  </p>
                  <div className="flex">
                    <Button
                      variant="custom"
                      bgtransparent={'!bg-transparent'}
                       icon={<Image src={rightDark} alt="right" className="w-4 h-4" />}
                      style={"w-full sm:!max-w-[162px] "}
                      name={"Learn More"}
                      path={item.path}
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>                                                 
    </div>
  );
};

export default AboutUs;
