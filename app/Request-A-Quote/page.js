"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Button from "../../utils/Button";
import Footer from "../../components/Footer";
import Input from "../../utils/Input";
import Textarea from "../../utils/Textarea";
import Dropdown from "../../utils/Dropdown";
import { nanoid } from "nanoid";
import right from "../../public/right.svg";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";

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

const RequestAQuote = () => {
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
        Plaza Protection : <br className="hidden sm:block" /> Securing San Jose
        Inside Out
      </>
    ),
    btnText: "Contact Us",
  };
  return (
    <>
      <div className="mx-4 sm:mx-6 xl:max-w-[1160px] xl:mx-auto sm:text-center mt-10 2xl:mt-[100px] mb-12 2xl:mb-[116px]">
        <h1 className="mb-8 font-dmSans text-5xl !leading-[56px] xl:text-[52px] xl:!leading-[60px] 2xl:text-[56px]  2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px]">
          Request A Quote
        </h1>
        <p className="px-4 sm:px-0 rounded sm:rounded-none border-l-[3px] sm:border-0 border-[#B0BABF]  font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E]">
          Select the security service you are interested in, fill out the form
          below to request a quote customized to your needs, & we will get back
          to you as soon as possible.
        </p>
      </div>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto px-4 sm:px-6 xl:px-10 2xl:p-20 mb-10  2xl:mb-20 2xl:bg-[#EDF5FF]/40 rounded-[40px]">
        <div className="p-4 md:p-6 2xl:p-8 rounded-2xl  md:rounded-3xl bg-[#F0F4FF] shadow-[0_5px_15px_0_rgba(19,85,255,0.2)]">
          <h2 className="mb-6 font-dmSans text-[28px] !leading-9  md:text-[32px] md:!leading-10 font-semibold text-[#222A5B] tracking-[-1px]">
            Get Free Quote
          </h2>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 ">
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
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
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
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
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
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
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
              placeholder={"Assignment Details"}
              value={freeQuote.userMessage}
              name={"userMessage"}
              className={"!py-[17px] border-[#7198FE]/50"}
            />
          </div>
          <div className="mt-6 2xl:mt-8 ">
            <Button
            bgtransparent={'sm:!rounded-2xl'}
              variant="blue"
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
              style={"!w-full sm:max-w-[175px]   "}
              name="Submit"
            />

          </div>
        </div>
      </div>

      <SecurityTrustBanner {...SecurityTrustData} />
    </>
  );
};

export default RequestAQuote;
