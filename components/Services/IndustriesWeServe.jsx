"use client";
import Tag from "../../utils/Tag";
import useIsClient from "../../Hook/useClient";
import Heading from "../../utils/Heading";
import Button from "../../utils/Button";
import ResidentialCommunities from "../../public/Services/Residential Communities.png";
import CommercialBuilding from "../../public/Services/Commercial Building.png";
import ConstructionSite from "../../public/Services/Construction Site.png";
import ShoppingMall from "../../public/Services/Shopping Mall.png";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import rightDark from "../../public/right-dark.svg";
import "@splidejs/react-splide/css";
const IndustriesWeServe = ({desc}) => {
  const cardItems = [
    {
      src: ResidentialCommunities,
      alt: "Residential Communities",
      title: "Residential Communities",
    },
    {
      src: CommercialBuilding,
      alt: "Commercial Building",
      title: "Commercial Building",
    },
    {
      src: ConstructionSite,
      alt: "Construction Site",
      title: "Construction Site",
    },
    { src: ShoppingMall, alt: "Shopping Mall", title: "Shopping Mall" },
  ];
  const isClient = useIsClient();
  return (
    <div
      className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto  px-4 pb-[122px] pt-10  sm:py-10 sm:px-6 xl:px-8 2xl:py-20 2xl:px-16 bg-[#E7E7FF]/20 rounded-[40px] mb-10
     2xl:mb-[68px] "
    >
      <div className="flex flex-col xl:flex-row  xl:justify-between items-start xl:items-end gap-8 xl:gap-0">
        <div>
          <Tag title={"Industries where we served"} />
          <Heading
            title={"Solutions That Scale Every Industry"}
            className={"!mb-6 !text-[#222A5B]"}
          />
          <p className="font-dmSans font-normal text-xl !leading-8 text-[#333333] max-w-full xl:max-w-[915px]">
           {desc}
          </p>
        </div>
        <div className="w-full xl:w-auto">
          <Button
           bgtransparent={'!bg-transparent'}
            variant="custom"
            icon={<Image src={rightDark} alt="right" className="sm:hidden w-4 h-4" />}
            style={"w-full sm:max-w-[162px] sm:min-w-[162px]"}
            name="View More"
            // path="/Contact-Us"
          />
        </div>
      </div>

      <div className="mt-8  flex  items-center gap-6  sm:hidden">
        {isClient && (
          <Splide
          className="services-slider"
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perMove: 1,
              rewind: true,
              perPage: 1,
              gap: "24px",
              pagination: false,
              autoplay: false,
              arrows: false,
              breakpoints: {
                640: { pagination: true, arrows: true },
              },
              classes: {
                arrow: "custom-arrow",
                prev: "serv-prev",
                next: "serv-next",
              },
              interval: 3000,
            }}
            // className="dots:absolute dots:right-0 dots:-bottom-16 sm:dots:-bottom-[72px]  dots:p-0 dots:min-w-[300px] dots:justify-center  dots:items-center  dots:gap-4 dot:!bg-[#88C0FF] dot:w-2 dot:h-2 activeDot:scale-100 activeDot:!bg-[#1355FF] dot:shadow-none dot:outline-none "
          >
            {cardItems.map((item, index) => (
              <SplideSlide key={index}>
                <div
                  key={index}
                  className="w-full max-w-[310px] mx-auto relative rounded-2xl overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 h-1/2 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.7)_41%,_rgba(255,255,255,1)_88%)] w-full"></div>
                  <div className=" absolute bottom-4 left-1/2 -translate-x-1/2 w-full p-[10px] text-center">
                    <h3 className="font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
      <div className="mt-[60px] hidden sm:grid  grid-cols-12 items-center gap-4 2xl:gap-6 ">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="col-span-6 md:col-span-4 lg:col-span-3  relative rounded-2xl overflow-hidden mx-auto"
          >
            <Image src={item.src} alt={item.alt} />
            <div className="absolute bottom-0 h-1/2 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0.7)_41%,_rgba(255,255,255,1)_88%)] w-full"></div>
            <div className="absolute bottom-4 w-full p-[10px] text-center">
              <h3 className="font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
