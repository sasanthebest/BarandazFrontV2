"use client";
import { IconType } from "react-icons";

const Button = ({ label, onClick, disabled, outline, small, icon: Icon  ,bgColor,textColor}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        text-sm
        w-36
        h-15
        ${bgColor}
        ${
          small
            ? "py-1 text-sm border-[1px] hover:bg-rose-500 hover: text-white"
            : "py-3 text-md border-none text-black"
        }    
    `}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      <div style={{color:textColor}}>{label}</div>
    </button>
  );
};

export default Button;
