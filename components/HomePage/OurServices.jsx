"use client";
import clientA from "../../public/Client-img-01.png";
import clientB from "../../public/Client-img-02.png";
import clientC from "../../public/Client-img-03.png";
import clientD from "../../public/Client-img-04.png";
import lineShape02 from "../../public/line-shape02.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";

const clientTestimonials = [
  {
    id: 1,
    clientImage: clientA,
    clientText: `Plaza Protection has offered valued security patrol services to our customers by making sure that their professional team is on the ground when a situation arises. They are quick to respond to all alerts and handle the matter in a professional manner, we would highly recommend their security patrol services to any organization that wants to work with a professional security guard company. `,
    clientName: "Andre Walington",
    clientRole: "Carnegie Foundation",
  },

  {
    id: 2,
    clientImage: clientB,
    clientText: `I would like to thank Plaza Protection for providing excellent security guard services to our company. They made sure that our apartments were safe and secure for our residents. The guards are always professional and do an excellent job of meeting our expectations. I would highly recommend Plaza Protection to any company that is looking to hire a professional security patrol company. `,
      clientName: "Nick L.",
      clientRole: "Folsom Residential ",
  },
  {
    id: 3,
    clientImage: clientC,
    clientText: `Plaza Protection has been providing excellent security patrol services to our residential community in the Bay Area. From the very beginning, they understood our needs and worked with our staff to address security concerns. Plaza Protection security guards are professional and well-trained. I always recommend Plaza Protection to anyone looking for extra protection for their community. `,
      clientName: "Steven H.",
      clientRole: "Country Club Villa",
  },
];

const OurServices = () => {
  const isClient = useIsClient();
  return (
    <div className="relative mx-4 sm:mx-6 xl:mx-10 my-10 2xl:my-[60px] 2xl:max-w-[1300px] 2xl:mx-auto py-8 px-0 sm:py-10 sm:px-6 xl:px-8 2xl:py-20 2xl:px-[60px] rounded-[40px]">
      <Image
        src={lineShape02}
        className="z-0 absolute top-[160px] -left-60 w-[548px]  h-[640px]"
        alt="lineShape"
      />
      <Tag title={"Don’t trust us? Trust businesses like yours"} />
      <Heading title={"Hear What Our Clients Say"} />
       {
        isClient &&  <Splide
        className="testimonial-slider mt-[60px]"
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perMove: 1,
          rewind: true,
          perPage: 1,
          gap: "24px",
          autoplay: false,
          arrows: true,
          pagination: false,
          breakpoints: {
                768: {pagination: true },
                
              },
          classes: {
            arrow: "custom-arrow", 
            prev: "custom-prev",  
            next: "custom-next", 
          },
          interval: 3000,
          pagination: false,
        }}
        // className=" dots:!absolute dots:right-0 dots:!bottom-[18px]  dots:p-0 dots:min-w-[300px] dots:justify-center  dots:items-center  dots:gap-4 dot:!bg-[#88C0FF] dot:w-2 dot:h-2 activeDot:scale-100 activeDot:!bg-[#1355FF] dot:shadow-none dot:outline-none mt-20"
      >
        {clientTestimonials.map((testimonial, index) => (
          <SplideSlide key={index} >
            <div className="flex flex-col items-start lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-20   2xl:gap-[200px] pb-[90px] lg:pb-[110px]">
              <div className="relative lg:w-[30%]">
                <Image
                  src={testimonial.clientImage}
                  className=" w-auto min-w-0 xl:min-w-[344px]  h-[399px]"
                  alt={`client${testimonial.id}`}
                />

                <div className="min-w-[222px] max-w-[222px] border border-[#B9D8FF] absolute right-0 bottom-3  p-[18.17px] bg-[#EDF5FF]  rounded-bl-[18.17px] rounded-tr-[18.17px] ">
                  <h3 className="mb-1 font-urbanist font-bold text-xl !leading-6 text-[#1355FF]">
                    {testimonial.clientName}
                  </h3>
                  <p className="font-dmSans text-sm font-semibold text-[#11205A] !leading-[18px]">
                    {testimonial.clientRole}
                  </p>
                </div>
              </div>
              <div className="py-0 lg:py-[22px] lg:w-[70%]">
                <p className="text-[#171A1D] font-dmSans text-xl !leading-9 xl:!text-[22px] xl:!leading-[38px] 2xl:text-2xl 2xl:!leading-10 font-normal tracking-[-0.5px]">
                  {/* <span className="text-[50px]">“</span> */}
                  {testimonial.clientText}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
       }
     
    </div>
  );
};

export default OurServices;
