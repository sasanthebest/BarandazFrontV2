import { IconType } from "react-icons";
import { HiUser } from "react-icons/hi2";

const MenuItem= ({icon:Icon, onClick, label }) => {
  return (
    <div className="flex flex-row gap-2">
      {/* <Icon size={20}/> */}

    <div
      onClick={onClick}
      className="
      w-full
      p-3
      transition
      "
      >
      {label}
    </div>
      </div>
  );
};

export default MenuItem;
