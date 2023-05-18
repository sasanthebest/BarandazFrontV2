"use client";

import {useState } from "react";

import { BiDollar } from "react-icons/bi";

const Inpute = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,}) => {
  const { onBlur, name, ref } = register(id,{required}); 
  const [price,setPrice]=useState('')

  const handleChange=(e)=>{
    e.target.value ? setPrice(e.target.value):setPrice('هزار تومان ')
  }

  
  return (
    <div className="w-full relatice">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute topp-5 lsef-2"
        />
      )}

      <input
        id={id}
        disabled={disabled}
        onChange={(e)=>handleChange(e)} 
        onBlur={onBlur} // assign onBlur event
        name={name} // assign name prop
        ref={ref} // assign ref prop
        placeholder=" "
        type={type}
        // min={type ==='number' ? 1000 :undefined}
        className={`
            peer
            w-full
            p-4   
            pt-3
            mt-4
            font-light
            bg-white
            border-2
            rounded-md
            outline-none
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? "pl-9" : "pl-4"}
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`
            absolute
            text-md
            duration-150
            transform
            -translate-y-3
            top-5
            z-10
            origin-[0]
            ${formatPrice ? "left-9" : "left-4"}
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
      {type==='number'&&(

        <div className="left-4">{price}</div>
      )}
    </div>
  );
};

export default Inpute;