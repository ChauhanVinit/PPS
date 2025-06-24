"use client";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-02.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-02.png";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
import KeyFeatures from "../../components/Services/KeyFeatures";
import IndustriesWeServe from "../../components/Services/IndustriesWeServe";
import Highlights from "@/components/Services/Highlights";
import FAQ from "@/components/Services/FAQ";
import TechnologyDriven from "../../public/Services/Technology-Driven.svg";
import DigitalReports from "../../public/CommercialBuilding/Incident-Reporting.svg";
import BenefitsIMG from "../../public/Services/Benefits-image-01.png";
import RealTimeSecurity from "../../public/Residential/Security-24.svg";
import InstantAlerts from "../../public/Residential/Instant-Threat-Alerts.svg";

const heroData = {
  title: `Round-The-Clock Unarmed Security For Protection And Peace Of Mind`,
  desc: "Providing 24/7 unarmed security services, our guards ensure safety with a constant, reassuring presence. More than just patrols, we foster peace of mind for businesses and communities alike.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "24/7 Unarmed Security For Reliable Protection And Rapid Response",
  desc: "Plaza Protection provides 24/7 unarmed security with trained guards and advanced technology. Our team ensures rapid response and a strong, visible presence for constant safety. ",
  img: CoreFeature,
};

const KeyFeaturesData = {
  title: "Unarmed Security Guard Services For Protection And Surveillance",
  desc: "Unarmed security guard services provide vital protection through professional presence, conflict resolution, and vigilant surveillance. These guards are trained to de-escalate situations, manage access control, and monitor premises for suspicious activity.",
};

const HighlightsData = {
  title: "Seamless Oversight Through Our Enhanced Guard Management System",
  desc: "Our cutting edge security guard management system puts you in control of every aspect of your security. You’ll have real-time access to schedules, detailed reports, and GPS tracking of guards, ensuring transparency and oversight.",
  image: BenefitsIMG,
};

const IndustriesWeServeData = {
  desc: "From retail and healthcare to logistics and corporate offices, our unarmed security services are designed to adapt to the unique demands of every environment. With a focus on visibility, professionalism, and proactive response, we deliver scalable protection that evolves with your industry — ensuring safety without compromise.",
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "24/7 Unarmed Security",
    description: "Constant and dependable protection.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Technology",
    description: "Enhancing security effectiveness.",
  },
  {
    icon: collectionIcon,
    title: "Rapid Threat Response",
    description: "Immediate action against potential risks.",
  },
  {
    icon: collectionIcon,
    title: "Strong, Visible Presence",
    description: "Deterrence and peace of mind.",
  },
];

const KeyFeature = [
  {
    icon: checkmark,
    title: "Patrols And Inspections",
    description:
      "Conducting regular site patrols to ensure safety and security.",
  },
  {
    icon: checkmark,
    title: "Incident Reporting",
    description:
      "Detailed documentation of incidents and security-related events.",
  },
  {
    icon: checkmark,
    title: "Risk Assessment",
    description:
      " Identifying and addressing potential security vulnerabilities.",
  },
  {
    icon: checkmark,
    title: "Conflict De-Escalation",
    description: "Trained to handle and diffuse tense situations effectively.",
  },
];

const Highlight = [
  {
    icon: RealTimeSecurity,
    title: "Real-Time 24/7 Security Monitoring",
    description:
      "Stay updated on constant, dependable protection at all times.",
  },
  {
    icon: TechnologyDriven,
    title: "Technology-Driven Security Insights",
    description:
      "Leverage advanced tools to enhance and monitor security operations.",
  },
  {
    icon: InstantAlerts,
    title: "Instant Threat Alerts",
    description:
      "Get notified immediately for swift response to any emerging security risks.",
  },
  {
    icon: DigitalReports,
    title: "Digital Reports",
    description:
      "Stay updated on constant, dependable protection at all times.",
  },
];

const faqs = [
  {
    question: "Are unarmed security guards effective without weapons?",
    answer:
      "Yes, unarmed guards are effective in many environments such as offices, retail stores, residential communities, schools, and healthcare facilities. Their presence alone can deter criminal behavior, and their training in surveillance and conflict resolution ensures safety without the use of force.",
  },
  {
    question: "How do unarmed guards differ from armed guards?",
    answer:
      "The main difference between unarmed and armed guards is the presence of a firearm. Unarmed guards rely on surveillance, communication, and customer service skills to maintain order and safety. Armed guards, on the other hand, are typically deployed in higher-risk areas and require additional training and licensing. Many businesses prefer unarmed guards for environments where a non-threatening, approachable presence is more appropriate.",
  },
  {
    question: "How do unarmed security guards handle emergencies or threats?",
    answer:
      "Unarmed guards are trained in emergency response and de-escalation techniques. In serious situations, they follow protocol by securing the area, alerting authorities, and documenting incidents for further investigation.",
  },
  {
    question:
      "Are unarmed guards trained to work with local law enforcement?",
    answer:
      "Yes. Unarmed guards are trained to coordinate with police, fire departments, and emergency medical services when necessary. They know how to report incidents accurately and assist first responders when they arrive on-site, ensuring a smooth handover in emergencies.",
  },
];

const UnarmedSecurity = () => {
   
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

export default UnarmedSecurity;
