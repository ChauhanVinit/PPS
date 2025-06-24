"use client";
import {useEffect, useRef } from "react";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Howitworks = ({data,title,desc}) => {

  const splideMainRef = useRef(null);
    const splideTextRef = useRef(null);
  
    useEffect(() => {
      if (!splideMainRef.current || !splideTextRef.current) return;
  
      const splideMain = splideMainRef.current.splide;
      const splideText = splideTextRef.current.splide;
  
      if (!splideMain || !splideText) return;
  
      // Sync both sliders when one moves
      const syncSlides = (newIndex) => {
        splideMain.go(newIndex);
        splideText.go(newIndex);
      };
  
      splideMain.on("moved", syncSlides);
      splideText.on("moved", syncSlides);
  
      return () => {
        splideMain.off("moved", syncSlides);
        splideText.off("moved", syncSlides);
      };
    }, []);
  return (
    <div
    id="how-it-works"
    className="max-w-[1440px] mx-auto bg-[#EDF5FF] p-16 rounded-[40px] grid grid-cols-12 gap-20 my-[68px]"
  >
    <div className="col-span-6 flex items-end justify-center">
      <Splide
        ref={splideMainRef}
        options={{
          direction: "ttb",
          type: "rewind",
          rewindByDrag: true,
          wheel: true,
          wheelSleep: 0,
          perPage: 1,
          pagination: false,
          arrows: false,
          drag: true,
          flickPower: 300,
          speed: 300,
          easing: "ease-in-out",
          waitForTransition: false,
          height: "598px",
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <Image
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>

    <div className="col-span-6">
      <Tag title={"How it works"} />
      <Heading
        title={title}
        className={"max-w-[550px] !mb-6"}
      />
      <p className="mb-6 font-jakarta font-normal text-lg !leading-8 text-[#374049] max-w-[550px]">
       {desc}
      </p>
      

      <Splide
        ref={splideTextRef}
        options={{
          direction: "ttb",
          height: "170px",
          wheel: true,
          wheelSleep: 0,
          perPage: 1,
          gap: "16px",
          pagination: false,
          arrows: false,
          drag: true,
          flickPower: 300,
          speed: 300,
          easing: "ease-in-out",
          waitForTransition: false,
          type: "rewind",
          rewindByDrag: true,
        }}
        className="mt-[60px] overflow-y-scroll invisible-scroll"
      >
        {data.map((item, index) => (
          <SplideSlide key={item.id}>
            <div
              className="p-4 rounded-2xl border border-[#FFF0E0] cursor-pointer"
              onClick={() => {
                splideMainRef.current.splide.go(index);
                splideTextRef.current.splide.go(index);
              }}
            >
              <Image
                src={item.icon}
                width={32}
                height={32}
                alt={item.title}
                className="transition-none"
              />
              <h3 className="mt-6 mb-2 font-urbanist text-xl !leading-6 font-bold text-[#171A1D]">
                {item.title}
              </h3>
              <p className="font-jakarta text-base font-normal text-[#374049]">
                {item.description}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  </div>
  )
}

export default Howitworks
