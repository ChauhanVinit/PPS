import facebook from "../public/facebook.svg";
import X from "../public/X.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import youtube from "../public/youtube.svg";

export const footerContentData = {
  description:
    "Plaza Protection delivers top-tier protection across the San Jose Bay Area with personalized onsite services that put your safety front and center.",
socialMedia: [
  {
    icon: facebook,
    alt: "Facebook icon - Plaza Protection",
    path: "https://www.facebook.com/plazaprotection",
  },
  {
    icon: youtube,
    alt: "YouTube icon - Plaza Protection channel",
    path: "https://www.youtube.com/channel/UCnQsLIB-ebKJ_J6oW78GDRA",
  },
  {
    icon: X,
    alt: "X (formerly Twitter) icon - Plaza Protection",
    path: "https://x.com/plazaprotection?mx=2",
  },
  {
    icon: linkedin,
    alt: "LinkedIn icon - Plaza Protection profile",
    path: "https://www.linkedin.com/company/plaza-protection",
  },
  {
    icon: instagram,
    alt: "Instagram icon - Plaza Protection",
    path: "https://www.instagram.com/plazaprotection/",
  },
],

  sections: [
    {
      title: "Services",
      links: [
        {
          label: "Unarmed Security",
          path: "/Unarmed-Security",
        },
        {
          label: "Fire Watch",
          path: "/Fire-Watch",
        },
        {
          label: "Remote Monitoring",
          path: "/Remote-Guarding-Service",
        },
        {
          label: "Vehicle Patrol",
          path: "/Vehicle-patrol",
        },
        {
          label: "CCTV Installation",
          path: "/CCTV-Installation",
        },
      ],
    },
    {
      title: "INDUSTRIES",
      links: [
        {
          label: "Residential Communities",
          path: "/Residential-Communities",
        },
        {
          label: "Commercial Buildings",
          path: "/Commercial-Buildings",
        },
        {
          label: "Construction Sites",
          path: "/Construction-Sites",
        },
        {
          label: "Shopping Centers",
          path: "/Shopping-Centers",
        },
        {
          label: "Healthcare Facilities",
          path: "/Healthcare-Facilities",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          path: "/About-us",
        },
        {
          label: "Contact Us",
          path: "/Contact-Us",
        },
        {
          label: "Blog",
          path: "/Blog",
        },
        {
          label: "Request A Quote",
          path: "/Request-A-Quote",
        },
      ],
    },
  ],
  bottomSection: {
    copyRight: "All Right Reserved by PlazaProtection Copyright ©2025",
    links: ["Terms", "Privacy", "Security"],
  },
};
