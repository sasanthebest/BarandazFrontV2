


import React from 'react'

const ButtonC = ({label, onClick}) => {
  return (
    <div
    onClick={onClick}
     class="
    rounded 
    relative 
    inline-flex 
    group 
    items-center 
    justify-center 
    px-5
    py-2 
    m-1 
    cursor-pointer 
    border-b-4 
    border-l-2 
    active:border-sky-500 
    active:shadow-none 
    shadow-lg 
    bg-gradient-to-tr 
    from-sky-400
    to-sky-300
    border-sky-300
    text-white">
        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-sky-300 rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span class="relative">{label}</span>
    </div>
  )
}

export default ButtonC