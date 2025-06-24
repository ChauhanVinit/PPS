"use client";
import { useState } from "react";
import UnarmedSecurity from "../../public/UnarmedSecurity.svg";
import fire from "../../public/fire.svg";
import tvSmart from "../../public/tv-smart.svg";
import car from "../../public/car-03.svg";
import cctvcamera from "../../public/cctv-camera.svg";
import Image from "next/image";
// import validation from "../../public/validation.svg";
// import HomeServicesBanner from "../../public/HomeServicesBanner.png";
import FeaturesBanner from "../../public/FeaturesBanner.png";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import rightDark from "../../public/right-dark.svg";
const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  const tabs = [
    {
      label: "Unarmed Security",
      icon: UnarmedSecurity,
      title: "Unarmed Security That You Can Blindly Trust",
      description:
        "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons. As San Jose's leading unarmed security provider, our officers effectively deter crimes like theft and vandalism, serving as a reassuring first line of defense.",
      path: "/Unarmed-Security",
    },
    {
      label: "Fire Watch",
      icon: fire,
      title: "Preventing Fire Hazards And Safeguarding Your Property",
      description:
        "Your ultimate defense against fire risks, our certified fire watch guards not only provide 24/7 surveillance but also ensure all fire detection systems are functioning properly. By adhering to strict safety protocols, we protect your property around the clock, helping you avoid costly fines, downtime, and potential disasters. ",
      path: "/Fire-Watch",
    },
    {
      label: "Remote Monitoring",
      icon: tvSmart,
      title: " Expert Remote Guarding Facilities For Advanced Surveillance",
      description:
        "Step into the future of security with our revolutionary remote guarding solution. Merging state-of-the-art technology with specialized human expertise. Our virtual guards excel in CCTV surveillance, providing round-the-clock monitoring, lightning-fast response, and unparalleled peace of mind for our clients. ",
      path: "/Remote-Guarding-Service",
    },
    {
      label: "Vehicle Patrol",
      icon: car,
      title: "Reliable Vehicle Patrol Services",
      description:
        "Our professional Vehicle Patrol Services provide consistent, high-visibility security to protect your property and deter unwanted activity. Whether for commercial, residential, or industrial properties, our vehicle patrols offer a dependable layer of protection that keeps your site secure around the clock. With comprehensive reporting and a commitment to excellence.",
      path: "/Vehicle-patrol",
    },
     {
      label: "CCTV Installation",
      icon: cctvcamera,
      title: "Advanced CCTV Installation Services",
      description:
        "Our CCTV Installation Services deliver reliable and effective surveillance solutions to keep your property secure. We assess your site’s unique requirements and install high-definition cameras in strategic locations to maximize coverage and visibility.",
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mt-10 2xl:mt-[60px] py-8 px-4 sm:py-10 sm:px-6 xl:px-8 2xl:py-20 2xl:px-[60px] rounded-[40px] bg-[#F0F6FF] text-center">
      <Tag title="Why Choose Us?" />
      <Heading
        className="!mt-4"
        title="Explore Our Range Of Security Solutions"
      />
      <div className="mt-[60px] !text-left">
        <TabGroup className="flex items-center flex-col 2xl:flex-row  gap-8 2xl:gap-20 ">
          <TabList className="flex  flex-col  justify-center   pl-[34px]  min-w-max sm:min-w-[291px]">
            {tabs.map((item, index) => (
              <div key={index} className="relative flex items-center mb-[22px] last:!mb-0">
                {/* Connector Line - Only show if not the last tab */}
                {index !== tabs.length - 1 && (
                  <div
                    className={` absolute -left-[30px] top-[33px] w-[2px] h-[80px] transition-colors duration-1000 ease-out ${
                      index < activeTab ? "bg-[#1355FF]" : "bg-[#88C0FF]"
                    }`}
                  ></div>
                )}

                {/* Circular Indicator */}
                <div
                  className={` w-[10px] h-[10px] rounded-full absolute left-[-34px] top-[48%] transform -translate-y-1/2 transition-colors duration-1000 ease-out ${
                    index <= activeTab ? "bg-[#1355FF]" : "bg-[#88C0FF]"
                  }`}
                ></div>

                <div
                  className={`smooth relative w-full p-[1px] rounded-2xl hover:bg-gradient-to-r from-[#1355FF] to-[rgb(182,202,255)]   ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#1355FF] to-[#B6CAFF] "
                      : "bg-[linear-gradient(to_right,_rgba(176,198,255,0.5)_0%,_rgba(182,202,255,0.5)_100%)] "
                  }`}
                >
                  <Tab
                    onClick={() => setActiveTab(index)}
                    className="w-full rounded-2xl flex items-center justify-start  px-5  min-h-[60px] leading-normal !bg-[#e6eeff] gap-4 !text-[20px] font-dmSans font-semibold text-[#1355FF] transition-all focus-visible:outline-none data-[selected]:!bg-white data-[selected]:text-[#1355FF] tracking-[-0.5px]"
                  >
                    <Image src={item.icon} alt={item.label} className="w-6 h-6" />
                    <span >{item.label}</span>
                  </Tab>
                </div>
              </div>                                                                        
            ))}
          </TabList>
          <TabPanels className="grow  lg:py-8 2xl:w-[75%]">
            {tabs.map((item, index) => (
              <TabPanel key={index}>
                <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-[60px]">
                  <div>
                    <Image
                      src={FeaturesBanner}
                      alt="HomeServicesBanner"
                      className=" min-w-0  sm:min-w-[428px] w-auto h-[445px]"
                    />
                  </div>
                  <div className="grow text-left sm:text-center lg:text-left">
                    <div className="mb-4">
                      <h3 className="font-dmSans text-xl  lg:text-[22px] lg:!leading-[30px]  2xl:text-2xl 2xl:!leading-8 font-semibold text-[#1355FF] tracking-[-0.5px]">
                        {item.label}
                      </h3>                    
                    </div>                          
                    <h1 className="mb-6 font-dmSans text-[28px] !leading-9 lg:text-[30px] lg:!leading-[30px] 2xl:text-[32px] 2xl:!leading-10 font-semibold text-[#171A1D] tracking-[-0.1px]">
                      {item.title}
                    </h1>
                    <p className="font-dmSans font-normal text-base text-[#45535E] ">
                      {item.description}
                    </p>
                    <div className="w-full mt-10 inline-flex sm:flex-row flex-col items-center justify-start sm:justify-center lg:justify-start gap-4">
                      <Button
                        icon={<Image src={right} alt="right" className="w-4 h-4" />}
                        variant="blue"
                        style="w-full sm:max-w-[243px]"
                        name="Request Quote"
                        path="/Request-A-Quote"
                      />

                      <Button
                        variant="custom"
                        bgtransparent={'!bg-transparent'}
                        icon={<Image src={rightDark} alt="right" className="w-4 h-4" />}
                        style="w-full sm:max-w-[162px] !bg-[#EDF5FF]"
                        name="Learn More"
                        path={item.path}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}                                          
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Services;
