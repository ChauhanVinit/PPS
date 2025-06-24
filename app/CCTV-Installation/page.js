"use client";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-05.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-05.png";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
import KeyFeatures from "../../components/Services/KeyFeatures";
import IndustriesWeServe from "../../components/Services/IndustriesWeServe";
import Highlights from "@/components/Services/Highlights";
import FAQ from "@/components/Services/FAQ";
import BenefitsIMG from "../../public/Services/Benefits-image-05.png";
import Rapidincident from "../../public/ShoppingCenter/Rapid-incident-response.svg";
import ComprehensiveArea from "../../public/Services/Comprehensive-area-coverage.svg";
import Realtime from "../../public/Services/Real-time-communication.svg";
import VisibleDitterence from "../../public/Services/Visible-Ditterence.svg";
const heroData = {
  title: <>CCTV Installation Services<br className="hidden 2xl:block" /> for Reliable Property<br className="hidden 2xl:block" />  Surveillance</>,
  desc: "Secure your home or business with professional CCTV installation services by Plaza Protection. Get reliable, 24/7 surveillance and real-time monitoring tailored to your property.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Why Plaza Protection Is The Smart Choice For CCTV Installation?",
  desc: "Secure your property with Plaza Protection's expert CCTV installation services. Customized solutions, advanced tech, and 24/7 support for complete peace of mind.",
  img: CoreFeature,
};


const KeyFeaturesData = {
  title: "Trusted CCTV Installation Services for Smarter Security",
  desc: "Boost your property's security with Plaza Protection’s trusted CCTV solutions. We deliver precision installation, smart monitoring, and advanced visual clarity for total peace of mind.",
};
const HighlightsData = {
  title: "Smarter Surveillance, Safer Spaces",
  desc: "At Plaza Protection, we’re dedicated to enhancing your security with intelligent, cutting-edge CCTV solutions. Whether you're upgrading your current system or starting fresh, our tailored approach ensures maximum protection and peace of mind.",
  image: BenefitsIMG,
};
const IndustriesWeServeData = {
  desc: "Our CCTV installation services provide comprehensive surveillance solutions designed to enhance security and monitor critical areas effectively. Using the latest technology, we tailor systems to fit your facility’s unique requirements, ensuring clear visibility, reliable recording, and seamless integration with your existing security infrastructure. From small businesses to large industrial sites, our scalable installations help you deter risks, respond proactively, and maintain peace of mind around the clock.",
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "Tailored Surveillance Strategies",
    description:
      "Custom CCTV design for full property coverage.",
  },
  {
    icon: collectionIcon,
    title: "Crystal-Clear Visuals",
    description:
      "HD and 4K cameras for sharp, detailed footage.",
  },
  {
    icon: collectionIcon,
    title: "Access From Anywhere",
    description:
      "Monitor your property remotely.",
  },
  {
    icon: collectionIcon,
    title: "Expert Installation & Support",
    description:
      "Expert tech installation & upkeep",
  },
];

const KeyFeature = [
  {
    icon: checkmark,
    title: "Strategic System Design",
    description: "We install CCTV to cover key entry points, blind spots, and vulnerable areas.",
  },
  {
    icon: checkmark,
    title: "Ultra-HD Video Quality",
    description: "Experience best image resolution with our HD and 4K cameras, ensuring all detail is captured clear.",
  },
  {
    icon: checkmark,
    title: "Remote Monitoring & Alerts",
    description: "Access live footage from any device and receive instant alerts to stay informed even when you're away.",
  },
  {
    icon: checkmark,
    title: "Reliable, Scalable Technology",
    description: "Our CCTV systems are easily upgraded and integrated for full security coverage.",
  },
];

const Highlight = [
  {
    icon: Rapidincident,
    title: "Visible Security Presence",
    description: "CCTV cameras deter criminal activity on your property.",
  },
  {
    icon: ComprehensiveArea,
    title: "Real-Time Incident Management",
    description: "Access live feeds and alerts to respond to threats instantly.",
  },
  {
    icon: Realtime,
    title: "Valuable Video Evidence",
    description: "Store high-quality footage for insurance and legal support.",
  },
  {
    icon: VisibleDitterence,
    title: "Improved Safety Culture",
    description: "Visible surveillance ensures security and peace of mind for everyone.",
  },
];
const faqs = [
  {
    question: "Can I monitor my CCTV system remotely?",
    answer:
      " Yes. Our CCTV installations include remote access features, allowing you to view live footage and recordings from your phone, tablet, or computer anytime, anywhere.",
  },
  {
    question: "Do you provide both indoor and outdoor cameras?",
    answer:
      " Absolutely. We install weatherproof outdoor cameras and discreet indoor units, all designed to provide maximum coverage and clarity.",
  },
  {
    question: "Are the cameras high-definition?",
    answer:
      "Yes. We offer HD and 4K resolution cameras to ensure sharp, clear images that make identification easy even in low-light conditions.",
  },
  {
    question:
      "Can the system be integrated with other security tools?",
    answer:
      "Definitely. Our CCTV systems can integrate with alarms, access control, and remote monitoring for a comprehensive security solution.",
  },
];
const CCTVInstallation = () => {
    
  return (
    <>
     
      <Hero {...heroData} />
      <IndustriesWeServe {...IndustriesWeServeData} />
      <CoreFeatures data={accordionItems} {...coreFeaturesData} />
      <KeyFeatures data={KeyFeature} {...KeyFeaturesData} />
      <Highlights data={Highlight} {...HighlightsData} />
      <FAQ data={faqs} />
      <FreeQuote />
     
    </>
  );
};

export default CCTVInstallation;
