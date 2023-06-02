"use client";


const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-md text-stone-500">{title}</div>
      {subtitle && <div className="font-light text-xs text-neutral-500 mt-2">{subtitle}</div>}
    </div>
  );
};

export default Heading;
