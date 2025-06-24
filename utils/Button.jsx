"use client";
import Link from "next/link";

const Button = ({
  name,
  icon,
  type = "button",
  style = "",
  variant,
  onClick,
  path,
  bgtransparent,
}) => {
  const buttonContent = (
    <div
      className={`w-full transition-all duration-300 ease-in-out group flex items-center justify-between  sm:justify-center  gap-2 cursor-pointer text-base font-semibold font-dmSans capitalize px-6 sm:py-2 sm:px-2 h-14 xs:h-16 overflow-hidden ${bgtransparent} ${
        variant === "custom"
          ? "bg-white border border-[#98A2B3] text-[#1D2939]"
          : "text-white bg-[#1355FF] hover:bg-[#222A5B]"
      } `}
    >
      {/* Sliding text */}
      <div className="relative h-full flex items-center justify-center">
        <div className="transition-all duration-300 ease-in-out translate-y-0 group-hover:-translate-y-full h-full flex items-center justify-center">
          {name}
        </div>
        <div className="absolute top-full transition-all duration-300 ease-in-out group-hover:translate-y-[-100%] h-full flex items-center justify-center">
          {name}
        </div>
      </div>

      {/* Icon */}
      {icon && (
        <div className="relative right-0 group-hover:-right-2 transition-all duration-300 ease-in-out">
          {icon}
        </div>
      )}
    </div>
  );

  return path ? (
    <Link href={path} className={`w-full ${style}`}>
      {buttonContent}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={`w-full ${style}`}>
      {buttonContent}
    </button>
  );
};

export default Button;
