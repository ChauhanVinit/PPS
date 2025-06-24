"use client";
import lineShape from "../../public/line-shape.svg";
import bottomShape from "../../public/bottom-shape.svg";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import GuardTracking from "../../public/Security-Guard-Tracking.svg";
import ViewingSchedule from "../../public/Viewing-Schedule.svg";
import Coordinatewithguard from "../../public/Coordinate-with-guard.svg";
import LiveDashboard from "../../public/Live-Dashboard.svg";
import Realreporting from "../../public/Real-time-reporting.svg";
import ManagingVisitors from "../../public/Managing-Visitors.svg";
import Sitetour from "../../public/Streamline-site-tour.svg";

const featureData = [
  {
    id: 1,
    title: "Security Guard Tracking",
    description:
      "Monitor the real-time GPS location and movement of guards on your site via the live map in our client portal.",
    image: GuardTracking,
    span: "col-span-12 lg:col-span-4   2xl:col-span-4",
  },
  {
    id: 2,
    title: "Viewing Schedules",
    description:
      "Stay in the loop—view schedules, post orders, and request special coverage on the go.",
    image: ViewingSchedule,
    span: "col-span-12 lg:col-span-4  2xl:col-span-4",
  },
  {
    id: 3,
    title: "Coordinate With Guards",
    description:
      "Enhance communication with your security guards, streamlining real-time updates and efficient teamwork.",
    image: Coordinatewithguard,
    span: "col-span-12 lg:col-span-4  2xl:col-span-4",
  },
  {
    id: 4,
    title: "Real-Time Reporting",
    description:
      "Access detailed reports and visitor logs anytime, anywhere, through the Plaza Protection client portal.",
    image: Realreporting,
    span: "col-span-12 lg:col-span-6 2xl:col-span-3",
  },
  {
    id: 5,
    title: "Managing Visitors",
    description:
      "Streamline visitor management with real-time tracking and access control for efficient, secure site access.",
    image: ManagingVisitors,
    span: "col-span-12 lg:col-span-6 2xl:col-span-3",
  },
  {
    id: 6,
    title: "Streamlined Site Tours",
    description:
      "Step into the future with QR, NFC, and virtual tags for secure site tours and patrols on predefined routes.",
    image: Sitetour,
    span: "col-span-12 lg:col-span-6 2xl:col-span-3",
  },
  {
    id: 7,
    title: "Live Dashboard",
    description:
      "Collaborate with us seamlessly—co-manage patrol operations in real-time with secure access to our live dashboard.",
    image: LiveDashboard,
    span: "col-span-12 lg:col-span-6 2xl:col-span-3",
  },
];

const KeyFeature = () => {
  return (
    <div className="w-full 2xl:pr-[calc((100%-1440px)/2)] ">
      <div className="relative rounded-[40px] sm:rounded-tl-[0px] sm:rounded-bl-[0px]   sm:rounded-tr-[40px] sm:rounded-br-[40px] bg-[#0A2540] mx-4 sm:mr-6 sm:ml-0  xl:mr-10 2xl:mx-0  mt-10 2xl:mt-20 sm:pb-[154px]">
        <Image
          src={lineShape}
          className="z-0 absolute top-0 left-0 w-[431px] h-[357px]"
          alt="lineShape"
        />
        <Image
          src={bottomShape}
          className="z-0 absolute bottom-0 left-0 w-[462px] h-[465px]"
          alt="bottomShape"
        />

        <div className="ml-auto max-w-[1440px]  py-8 px-4 sm:py-10 sm:px-6  xl:px-8  2xl:py-20 2xl:px-[60px] relative z-10">
          <Tag
            title={"What sets us apart"}
            className={"!bg-none !text-[#B9D8FF]"}
          />
          <Heading
            title={"Always Keeping Our Clients In The Loop"}
            className={"!text-white"}
          />
          <Heading
            title={
              "Transforming Security With Innovative Guard Management Systems"
            }
            className={"!mt-0 !text-white"}
          />
          <div className="w-full grid grid-cols-12 gap-4 mt-10 2xl:mt-[60px]">
            {featureData.map((item) => (
              <div
                key={item.id}
                className={`${item.span} p-4 2xl:p-8 rounded-2xl bg-[#07213B]`}
              >
                <div className="flex items-center sm:flex-col  sm:items-start gap-4 sm:gap-8">
                  <Image
                    src={item.image}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="w-12 h-12"
                  />
                  <h2 className="font-dmSans text-xl lg:text-[22px] lg:!leading-[30px]  2xl:text-2xl font-semibold text-[#21A9ED] tracking-[-0.5px]">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-4 font-dmSans font-normal text-base  text-[#FFFFFF]/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
    
export default KeyFeature;
