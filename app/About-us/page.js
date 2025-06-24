"use client";
import Button from "../../utils/Button";
import ourtechnologies from "../../public/AboutUs/our-technologies.png";
import Ourmission from "../../public/AboutUs/Our-mission.svg";
import Overview from "../../public/AboutUs/Overview.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import SurveillanceSystems from "../../public/AboutUs/Surveillance-Systems.svg";
import LiveGPS from "../../public/AboutUs/Live-GPS-Tracking.svg";
import IncidentReporting from "../../public/AboutUs/Incident-Reporting.svg";
import TopIndustries from "../../components/HomePage/TopIndustries";
import OurServices from "../../components/HomePage/OurServices";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";
import right from "../../public/right.svg";
import rightDark from "../../public/right-dark.svg";
const coreValues = [
  {
    icon: Ourmission,
    title: "Our Mission",
    descriptionA:
      "Our mission at Plaza Protection is to redefine security by delivering reliable, responsive, and tailored solutions that protect what matters most to you. We are dedicated to safeguarding people, properties, and businesses through a combination of expert personnel, advanced technology, and unwavering commitment to excellence.",
    descriptionB:
      "By fostering a culture of excellence, professionalism, and integrity, we aim to be the trusted partner for safety and protection in the San Jose Bay Area and beyond. At Plaza Protection, your security is our priority.",
  },
  {
    icon: Overview,
    title: "Plaza Protection Overview",
    descriptionA:
      "Plaza Protection is dedicated to delivering superior security solutions that ensure the safety of your premises, employees, and assets. Operating in the San Jose Bay Area, we offer a wide range of services including foot patrol, vehicle patrol, fire watch, and remote guarding, all tailored to meet your specific security needs. Our expert team of security professionals is highly trained and committed to providing proactive, reliable protection around the clock.",
    descriptionB:
      "By combining the latest security technology with proven strategies, Plaza Protection offers unmatched reliability and peace of mind. Whether you need on-site guards, patrols, or advanced surveillance, we are your trusted partner in security.",
  },
];

const ourTechnologies = [
  {
    icon: SurveillanceSystems,
    alt: "SurveillanceSystems",
    title: "Surveillance Systems",
    description:
      "High-definition cameras and motion detectors create a seamless security network.",
  },
  {
    icon: LiveGPS,
    alt: "Live GPS Tracking",
    title: "Live GPS Tracking",
    description:
      "Our guards are equipped with GPS devices, ensuring efficient, on-schedule mobile and full coverage.",
  },
  {
    icon: IncidentReporting,
    alt: "Incident Reporting",
    title: "Incident Reporting",
    description: "Real-time alerts enable fast response and full transparency.",
  },
];
  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br className="hidden sm:block" /> Trusted Security Guard Company
      </>
    ),
    btnText: "Request A Quote",
  };

const AboutUs = () => {
 
  return (
    <>
     
      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1360px] 2xl:mx-auto  my-10 xl:mt-[60px] xl:mb-20 2xl:mt-[100px] 2xl:mb-40">
        <div className="sm:text-center">
          <h1 className="font-dmSans text-5xl !leading-[56px] xl:text-[52px] xl:!leading-[60px] 2xl:text-[56px]  2xl:!leading-[64px] font-semibold text-[#222A5B] mb-8 tracking-[-4px] xs:tracking-[-3px] max-w-[1162px] mx-auto">
            Welcome To Plaza Protection – Your Trusted Security Partner In The
            San Jose Bay Area
          </h1>
          <p className="px-4 sm:px-0 rounded sm:rounded-none border-l-[3px] sm:border-0 border-[#B0BABF]  font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[1162px] mx-auto">
            At Plaza Protection, we specialize in delivering top-tier security
            guard services designed to safeguard people, property, and
            businesses throughout the San Jose Bay Area. With years of expertise
            and a dedicated team of highly trained security professionals, we
            are committed to providing customized solutions tailored to the
            unique needs of our clients.
          </p>
        </div>
        <div className="w-full mt-12 sm:mt-14  inline-flex flex-col sm:flex-row justify-center items-center  gap-4">
          <Button
            variant="blue"
             icon={<Image src={right} alt="right" className="w-4 h-4" />}
            style={"w-full sm:max-w-[243px]"}
            name="Request Quote"
          />

          <Button
            variant="custom"
            icon={<Image src={rightDark} alt="right" className="w-4 h-4" />}
            style={"w-full sm:max-w-[162px]"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>
      </div>
      <TopIndustries />
      <OurServices />

      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mb-10 2xl:mb-20 px-4 sm:px-6  py-10 xl:px-10 2xl:p-20 rounded-[40px] bg-[#EDF5FF]">
        <Tag title={"Quick view about us"}  />
        <Heading
          className={"!mt-4 !text-[#222A5B]"}
          title={"Our core values"}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 xl:gap-6 mt-8 lg:mt-10">
          {coreValues.map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 p-0 lg:p-4">
              <Image
                src={item.icon}
                alt={item.title}
                className="w-auto"
              />
              <div className="mt-8">
                <h3 className="font-dmSans text-[#171A1D] font-semibold text-[28px] lg:text-[32px] leading-9 lg:!leading-10 tracking-[-1px]">
                  {item.title}
                </h3>
                <p className="mt-4 font-dmSans font-normal text-base  text-[#374049]">
                  {item.descriptionA}
                </p>
                <p className="mt-4 font-dmSans font-normal text-base text-[#374049]">
                  {item.descriptionB}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mb-10 2xl:mb-20 px-4 sm:px-6  py-10 xl:px-10 2xl:p-20 rounded-[40px] bg-[#F0F6FF] flex flex-col lg:flex-row gap-8  xl:gap-10 2xl:gap-20">
        <div className="w-full lg:w-1/2">
          <Tag title={"our technologies"} />
          <Heading
            className={"!mt-4 !text-[#222A5B]"}
            title={"Real-Time Protection with Cutting-Edge Technology"}
          />
          <p className="mt-6 font-dmSans text-base  font-normal text-[#374049] max-w-[550px]">
            Our commitment to excellence ensures a safe, secure environment for
            all, giving you peace of mind under our vigilant protection.
          </p>
          <p className="mt-8 font-dmSans text-base  font-normal text-[#374049] max-w-[550px]">
            At Plaza Protection, we integrate cutting-edge technology with our
            expert security services to offer comprehensive protection. Our use
            of advanced security systems ensures that your property and assets
            are always under vigilant surveillance, providing real-time
            monitoring and rapid response capabilities.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            {ourTechnologies.map((item, index) => (
              <div
                key={index}
                className="py-4 flex items-center gap-6 border-b border-[#1355FF]/10 last:border-none"
              >
                <div className="w-[50px] h-50px inline-flex items-center justify-center">
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <h3 className="font-dmSans text-base font-semibold text-[#374049] tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-dmSans text-sm font-normal text-[#171A1D] capitalize max-w-[440px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={ourtechnologies} alt="Our Technologies" className="w-full h-full max-w-[600px] lg:max-w-full" />
        </div>
      </div>

      <SecurityTrustBanner {...SecurityTrustData} />
    
    </>
  );
};

export default AboutUs;
