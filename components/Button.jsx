'use client'
import { IconType } from "react-icons";

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
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
 
        ${outline ? "bg-white" : "bg-rose-700"}
        ${outline ? "border-neutral-400 border" : "border-rose-700"}
        ${outline && "text-black"}
        ${outline && "hover:bg-rose-500 hover: text-white"}

        ${outline ? "py-1" : "py-3"}
        ${outline ? "text-sm" : "text-md"}

        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "border-[1px]" : "border-2"}
        ${small ? "hover:bg-rose-500 hover: text-white":'text-black'}
    `}
    >
      {Icon && <Icon className="absolute left-4 top-3" size={24} />}
      <div className="">{label}</div>
    </button>
  );
};

export default Button;
