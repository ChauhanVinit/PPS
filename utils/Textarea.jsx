import React from 'react'

const Textarea = ({ onChange, placeholder, name,className }) => {
  return (
    <textarea
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    className={`!min-h-[90px] w-full border border-[#7198FE]/50 rounded bg-white
       py-[17px] px-5 outline-none ring-0 placeholder:text-[#45535E] font-urbanist text-base font-medium text-[#171A1D] ${className} `}
  />
  )
}

export default Textarea
