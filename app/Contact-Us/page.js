"use client";
import { useState } from "react";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import GoogleMapComponent from "../../utils/GoogleMapComponent";
import Call from "../../public/Call.svg";
import Mail from "../../public/Mail.svg";
import Location from "../../public/Location.svg";
import ContactBannerA from "../../public/Contact-01.png";
import ContactBannerB from "../../public/Contact-02.png";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";

const Contact = () => {
  const contactDetails = [
    {
      icon: Call,
      alt: "Call",
      label: "Get in touch with us now",
      value: "1-844-55-557-5292",
      border: true,
    },
    {
      icon: Mail,
      alt: "Mail",
      label: "Email:",
      value: "contact@plazaprotection.com",
      border: true,
    },
    {
      icon: Location,
      alt: "Location",
      label: "Address",
      value:
        "Plaza Protection 1900 Camden Ave San Jose, CA 95124 United States",
      border: false,
    },
  ];

  const ServicesOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];
  const facilityOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];
  const areaOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];
  const durationOptions = [
    {
      id: nanoid(),
      name: "Vehicle Patrol",
    },
    {
      id: nanoid(),
      name: "Foot Patrol",
    },
    {
      id: nanoid(),
      name: "Fire Watch",
    },
  ];

  const [freeQuote, setFreeQuote] = useState({
    userName: "",
    companyName: "",
    userEmail: "",
    name: "",
    userMessage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in freeQuote) {
      setFreeQuote({
        ...freeQuote,
        [name]: value,
      });
    }
  };

  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br className="hidden sm:block" /> Trusted Security
        Guard Company
      </>
    ),
    btnText: "Request A Quote",
  };
 
  return (
    <>
      
      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1360px] 2xl:mx-auto mt-10 2xl:mt-[91px] mb-8 2xl:mb-[70px] sm:text-center">
        <h1 className="font-dmSans text-5xl !leading-[56px] xl:text-[52px] xl:!leading-[60px] 2xl:text-[56px]  2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-8">
          Contact Us
        </h1>
        <p className="px-4 sm:px-0 rounded sm:rounded-none border-l-[3px] sm:border-0 border-[#B0BABF]  font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[1326px] mx-auto ">
          Whether you're looking for on-site security, patrol services, or
          advanced monitoring, our team is here to assist you. Reach out to us
          today to learn more about our services or request a quote now. We’re
          available 24/7 to ensure your peace of mind and protect what matters
          most.
        </p>
      </div>

      <div className="hidden sm:flex items-center justify-center mx-4 sm:mx-6 xl:max-w-[1200px] xl:mx-auto  mb-10 2xl:mb-20">
        <Image
          src={ContactBannerA}
          alt="ContactBanner"
          className="object-cover rounded-[40px]"
        />
      </div>

      <div className="sm:hidden flex items-center justify-start mx-4 sm:mx-6 xl:max-w-[1200px] xl:mx-auto  mb-10 2xl:mb-20">
        <Image
          src={ContactBannerB}
          alt="ContactBanner"
          className="object-cover rounded-[40px]"
        />
      </div>

      <div className="mx-0 sm:mx-6  xl:mx-10 2xl:container 2xl:mx-auto mb-10 2xl:mb-20 py-10 px-4 sm:px-6 xl:px-10 2xl:p-20 rounded-[40px] flex flex-col xl:flex-row items-center gap-8 xl:gap-10 2xl:gap-20 bg-[#EDF5FF]">
        <div className="w-full xl:w-[calc(50%-20px)] 2xl:w-[calc(50%-40px)]">
          <Tag title={"Quick View CONTACT Us"} />
          <Heading
            className={"!mt-4"}
            title={
              "Contact Us Today to Discuss Your Security Needs and Ensure Your Peace of Mind"
            }
          />
          <p className="mt-6 font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 font-normal text-[#374049]">
            Whether you're looking for personal or business protection, we are
            here to provide reliable and professional services. Let us help you
            safeguard what matters most.
          </p>

          <div className="mt-8 px-4 rounded-3xl bg-[#EDF5FF]/20">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className={`py-4 flex items-center gap-6 ${
                  item.border ? "border-b border-[#1355FF]/10" : ""
                }`}
              >
                <div className=" min-w-[50px] h-50px inline-flex items-center justify-center">
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    alt={item.alt}
                  />
                </div>
                <div>
                  <p className="font-dmSans text-base font-normal text-[#374049]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px] break-all">
                    {item.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full xl:w-[calc(50%-20px)] 2xl:w-[calc(50%-40px)] p-4 md:p-6 2xl:p-8 rounded-2xl  md:rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]">
          <h2 className="mb-6 font-dmSans text-[32px] !leading-10 font-semibold text-[#222A5B]">
            Get Free Quote
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  ">
            <div className="w-full  md:w-1/2">
              <Input
                placeholder={"Your Name"}
                onChange={handleInputChange}
                value={freeQuote.userName}
                name={"userName"}
                className={"!py-[15px] px-6 border-[#7198FE]/50"}
              />
            </div>
            <div className="w-full  md:w-1/2">
              <Input
                placeholder={"Company Name"}
                onChange={handleInputChange}
                value={freeQuote.companyName}
                name={"companyName"}
                className={"!py-[15px] px-6 border-[#7198FE]/50"}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  mt-4">
            <div className="w-full  md:w-1/2">
              <Input
                placeholder={"Email"}
                onChange={handleInputChange}
                value={freeQuote.userEmail}
                name={"userEmail"}
                className={"!py-[15px] px-6 border-[#7198FE]/50"}
              />
            </div>
            <div className="w-full  md:w-1/2">
              <Input
                placeholder={"Your Name"}
                onChange={handleInputChange}
                value={freeQuote.name}
                name={"name"}
                className={"!py-[15px] px-6 border-[#7198FE]/50"}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  mt-4">
            <div className="w-full  md:w-1/2">
              <Dropdown
                options={ServicesOptions}
                height="h-[55px]"
                placeholder="Select Services"
              />
            </div>
            <div className="w-full  md:w-1/2">
              <Dropdown
                options={facilityOptions}
                height="h-[55px]"
                placeholder="Type Of Facility"
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6  mt-4">
            <div className="w-full  md:w-1/2">
              <Dropdown
                options={areaOptions}
                height="h-[55px]"
                placeholder="Select Area"
              />
            </div>
            <div className="w-full  md:w-1/2">
              <Dropdown
                options={durationOptions}
                height="h-[55px]"
                placeholder="Duration Of Service"
              />
            </div>
          </div>
          <div className="w-full  mt-4">
            <Textarea
              placeholder={"Write Your Message"}
              value={freeQuote.userMessage}
              name={"userMessage"}
              className={"!py-[17px] border-[#7198FE]/50"}
            />
          </div>
          <div className="mt-6 2xl:mt-8 ">
            <Button
              variant="blue"
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
              style={"min-w-full sm:!min-w-[175px]"}
              name="Submit"
            />
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:container 2xl:mx-auto mb-10 2xl:mb-20 rounded-[40px] overflow-hidden">
        <GoogleMapComponent />
      </div>
      <SecurityTrustBanner {...SecurityTrustData} />
     
    </>
  );
};
export default Contact;
