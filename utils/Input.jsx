import React from "react";

const Input = ({type,placeholder,value,name,id,onChange,className}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      className={` w-full border h-[50px] border-[#7198FE]/50 rounded bg-white px-5  outline-none ring-0 placeholder:text-[#45535E] font-urbanist text-base font-medium text-[#171A1D]  ${className} `}
    />
  );
};

export default Input;
