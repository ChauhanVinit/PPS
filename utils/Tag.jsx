"use client";
const Tag = ({className,title }) => {
  return (
    <>
      <span className={`font-urbanist text-xs sm:text-sm leading-normal font-semibold text-[#1355FF] px-4 sm:px-5 py-[9px] rounded-[100px] border border-[#B6CAFF]/50 uppercase bg-[linear-gradient(to_right,_rgba(226,_234,_255,_0.7)_0%,_rgba(226,_234,_255,_0.7)_100%)] ${className}  `}>
        {title}
      </span>
    </>
  );
};

export default Tag;
