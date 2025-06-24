"use client";
import Image from "next/image";

const Card = ({ item, className }) => {
  return (
    <div
      className={`
        w-full md:w-[calc(50%-12px)] 
        border border-[#E0EEFF] bg-transparent px-4 py-5 
        flex items-center gap-6 rounded-full ${className}
      `}
    >
      <div className="min-w-[58px] h-[58px] bg-[#EDF5FF] rounded-full inline-flex items-center justify-center">
        <Image src={item.icon} alt={item.title} className="w-8 h-8" />
      </div>
      <div>
        <h3 className="font-dmSans text-xl lg:text-2xl font-semibold text-[#171A1D] tracking-[-0.5px] break-words">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
