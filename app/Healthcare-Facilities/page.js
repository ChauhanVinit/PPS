"use client";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import HospitalImage from "../../public/HospitalSecurity/HospitalImage.png";
import HospitalGuardImage from "../../public/HospitalSecurity/HospitalGuardImage.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import VisitorManagement from "../../public/ShoppingCenter/Visitor-Management.svg";
import PatientStaff from "../../public/HospitalSecurity/Patient-Staff-Safety.svg";
import AssetProtection from "../../public/HospitalSecurity/Asset-Protection.svg";
import Customsecurityplan from "../../public/HospitalSecurity/Custom-Security-Plan.svg";
import Emergencyprotocol from "../../public/HospitalSecurity/Emergency Preparedness.svg";
import HospitalSecurityA from "../../public/HospitalSecurity/HospitalSecurityA.png";
import HospitalSecurityB from "../../public/HospitalSecurity/HospitalSecurityB.png";
import HospitalSecurityC from "../../public/HospitalSecurity/HospitalSecurityC.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Card from "../../components/Card";
import person from "../../public/Residential/person-08.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.png";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.png";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.png";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.png";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.png";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.png";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.png";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.png";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.png";
import SurveillanceMonitoring from "../../public/ShoppingCenter/Surveillance-And-Monitoring.svg";
import Realtime from "../../public/HospitalSecurity/Real-time-communication.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useIsClient from "../../Hook/useClient";
const tabs = [
  {
    label: "24/7 Surveillance And Monitoring",
    icon: SurveillanceMonitoring,
    image1: LocationMonitoringA,
    image2: LocationMnitoringB,
    image3: LocationMnitoringC,
  },

  {
    label: "Alarm Response",
    icon: Realtime,
    image1: RealTimeA,
    image2: RealTimeB,
    image3: RealTimeC,
  },
  {
    label: "Visitor Management",
    icon: VisitorManagement,
    image1: VisitorAssistanceA,
    image2: VisitorAssistanceB,
    image3: VisitorAssistanceC,
  },
];

const SecurityStrategiesData = [
  {
    icon: PatientStaff,
    title: "Patient And Staff Safety",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: AssetProtection,
    title: "Asset Protection",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: Customsecurityplan,
    title: "Custom Security Plans",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: Emergencyprotocol,
    title: "Emergency Preparedness",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
];
const residentialFeatures = [
  {
    icon: checkmarkCircle,
    title: "Patient Escort Services",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Fire Watch Services",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Secure Parking Management",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Remote Area Surveillance",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
];

const HospitalSecurity = () => {
  const isClient = useIsClient();
   
  return (
    <>
   
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
            <Image
              src={HospitalImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="HospitalImage"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[144px] bottom-[101px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
                <Image
                  src={PatientStaff}
                  alt="Patient And Staff Safety"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Patient And Staff Safety
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] 2xl:text-[56px] 2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-6 capitalize">
                Ensuring Patient And Staff Safety With Professional Hospital
                Security
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[806px] ">
                Protecting What Matters Most in Healthcare Spaces
              </p>
            </div>

            <div className="hidden xl:block absolute bottom-[9px] -left-20 z-50">
              <Image
                src={ConectElement}
                alt="ConectElement"
                className="w-[713px]"
              />
            </div>
          </div>
        </div>
        <div className="xl:hidden relative mt-8  w-full max-w-[713px] mx-auto z-50">
          <Image
            src={ConectElement}
            alt="ConectElement"
            className=" object-cover"
          />

          <div className="z-[51] absolute left-0 translate-x-6  top-0 translate-y-[3px] inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={PatientStaff}
                alt="Surveillance"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px]   sm:text-xs font-medium text-[#1A1A1A]">
              Patient And Staff Safety
            </div>
          </div>

          <div className="z-[51] absolute right-0 -translate-x-6 bottom-0 -translate-y-[8px]  inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={Customsecurityplan}
                alt="Fire"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px] !leading-[9.5px] sm:!leading-4 sm:text-xs font-medium text-[#1A1A1A]">
              Custom Security Plans
            </div>
          </div>
        </div>
        <div className="flex items-start mt-[74px] gap-[52px] ">
          <div className="grow flex flex-col item-start md:flex-row md:items-center  gap-5 p-6 lg:p-[35px] rounded-3xl bg-[#FFB82E]/5">
            <div className="flex items-end gap-[14px]">
              <div className="min-w-[206px]">
                <div className="flex items-end justify-between">
                  <Image
                    src={person}
                    alt="person"
                    className="w-[60px] h-[60px]"
                  />
                  <Image
                    src={Quote}
                    alt="person"
                    className=" hidden md:block w-[43px] h-[43px]"
                  />
                </div>
                <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">
                  Jerome Bell
                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                  Willis & Company
                </p>
              </div>
              <div className="md:hidden">
                
                <Image src={Quote} alt="person" className="w-[43px] h-[43px]" />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-lg font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
               “We appreciate Plaza protection’s attention to detail and their compassionate approach. Their team is always vigilant, and quick to respond to any situation without disrupting care.”
              </p>
            </div>
          </div>

          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={HospitalGuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="HospitalGuardImage"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[105px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={Customsecurityplan} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Custom Security Plans
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mb-10 2xl:mb-20 bg-[#F0F6FF] rounded-[40px] px-4 pt-10 pb-[122px] sm:px-6 xl:px-8 2xl:p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px]"
          title="Seamless Security For Safe And Efficient Healthcare Operations"
        />
        <p className="text-center font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 text-[#333333] font-normal max-w-[1126px] mx-auto">
          Seamless security ensures the safety and efficiency of healthcare
          operations by protecting staff, patients, visitors, and critical
          assets. Advanced surveillance, access control, and visitor management
          prevent unauthorized access and safeguard sensitive areas like
          emergency rooms and patient records.
        </p>

        <div className="mt-8 xl:mt-10 2xl:mt-14">
          <TabGroup>
            <TabList className="mx-auto max-w-[390px] lg:max-w-full flex flex-col lg:flex-row lg:items-center gap-8 p-4">
              {tabs.map((item, index) => (
                <Tab
                  key={index}
                  className="inline-flex items-center gap-2 flex-1 !text-left rounded border-b-2 border-transparent focus-visible:outline-none data-[selected]:border-[#1355FF]"
                  role="tab"
                >
                  <div className="h-[58px] w-[58px] inline-flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      height={32}
                      width={32}
                    />
                  </div>
                  <span className="font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px]">
                    {item.label}
                  </span>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {tabs.map((item, index) => (
                <TabPanel key={index}>
                  {/* Desktop grid view */}
                  <div className="hidden lg:grid grid-cols-12 gap-6 mt-10 2xl:mt-[60px]">
                    {[item.image1, item.image2, item.image3].map((image, i) => (
                      <div key={i} className="col-span-4">
                        <Image
                          src={image}
                          alt={item.label}
                          className="h-full w-full  rounded-3xl"
                        />
                      </div>
                    ))}
                  </div>
{/* shadow-[0_21px_32px_0_rgba(0,88,250,0.1)] */}
                  {/* Mobile slider view */}
                  {isClient && (
                    <div className="industries-slider block lg:hidden mt-8">
                      <Splide
                        aria-label="My Favorite Images"
                        options={{
                          type: "loop",
                          perMove: 1,
                          rewind: true,
                          perPage: 1,
                          gap: "24px",
                          pagination: true,
                          autoplay: false,
                          arrows: true,
                          interval: 3000,
                          breakpoints: {
                            1040: {
                              perPage: 1,
                            },
                          },
                          classes: {
                            arrow: "custom-arrow",
                            prev: "slider-prev",
                            next: "slider-next",
                          },
                        }}
                        // className="dots:absolute dots:right-0 dots:-bottom-16 sm:dots:-bottom-[72px] dots:p-0 dots:min-w-[300px] dots:justify-center dots:items-center dots:gap-4 dot:!bg-[#88C0FF] dot:w-2 dot:h-2 activeDot:scale-100 activeDot:!bg-[#1355FF] dot:shadow-none dot:outline-none"
                      >
                        {[item.image1, item.image2, item.image3].map(
                          (image, imgIndex) => (
                            <SplideSlide key={imgIndex}>
                              <Image
                                src={image}
                                alt={item.label}
                                className="h-full w-auto mx-auto lg:w-full shadow-[0_21px_32px_0_rgba(0,88,250,0.1)] rounded-3xl"
                              />
                            </SplideSlide>
                          )
                        )}
                      </Splide>
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mt-10 2xl:mt-20  px-4 py-10 sm:px-6 xl:px-8 2xl:p-20 ">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px]"
          title="Ensuring Hospital Security With Trained And Reliable Security Personnel"
        />
        <p className="font-dmSans text-lg  xl:text-xl xl:!leading-8 text-[#333333] font-normal !text-center max-w-[1126px] mx-auto">
          Ensure the safety and security of your hospital with our trained and
          reliable security personnel. Our team is equipped with the knowledge
          and expertise to handle any security challenges, from monitoring
          entrances and exits to managing emergency situations.
        </p>

        <div className="w-full flex flex-wrap gap-x-10 gap-y-10 mt-10 2xl:!mt-[60px]">
          {SecurityStrategiesData.map((item, index) => (
            <Card
              key={index}
              item={item}
              className={"!border-[#FFF0E0] md:w-[calc(50%-20px)]"}
            />
          ))}
        </div>
      </div>

      <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto my-10 2xl:my-20 bg-[#EBFFF1]/30 rounded-[40px] px-4 py-10 sm:px-6 xl:px-8 2xl:p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px] max-w-[1152px] mx-auto"
          title="Guarding Hospitals With Proactive Security Solutions For Optimal Protection"
        />
        <p className="font-dmSans text-lg  xl:text-xl xl:!leading-8  text-[#333333] font-normal text-center max-w-[1126px] mx-auto">
          Hospitals face unique security challenges, requiring customized
          solutions to ensure safety and efficiency. Our tailored security
          strategies are designed to meet the unique needs of healthcare
          facilities, delivering peace of mind and ensuring the safety of
          everyone within your hospital, day and night.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 xl:gap-8 mt-[60px]">
          <div className="w-full md:w-[47%] flex justify-center">
            <Image
              src={HospitalSecurityA}
              alt="HospitalSecurityA"
              className="w-full rounded-[40px] max-w-[329px] md:max-w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full  md:grow flex justify-center">
            <Image
              src={HospitalSecurityB}
              alt="HospitalSecurityB"
              className="w-full rounded-[40px] max-w-[329px] md:max-w-full hidden md:block object-cover"
              loading="lazy"
            />
            <Image
              src={HospitalSecurityC}
              alt="HospitalSecurityA"
              className="w-full max-w-[329px] md:hidden object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-x-6 gap-y-6 mt-10 2xl:mt-[60px]">
          {residentialFeatures.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      <FreeQuote />
      
    </>
  );
};

export default HospitalSecurity;
