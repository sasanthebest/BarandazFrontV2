import Image from "next/image";
import calender from './svg/calender.svg'
const TimeWraper = ({ time }) => {
  const date = new Date();

  const timeCreator = () => {
    let created_at = Date.parse(`${time}`);
    let now = Date.now();
    let mytime = (now - created_at) / 1000;
    if (mytime >= 86400) {
      return `${Math.round(mytime / 86400)} روز پیش`;
    } else if (mytime < 86400 && mytime >= 3600) {
      return `${Math.round(mytime / 3600)} ساعت پیش`;
    } else if (mytime < 3600 && mytime >= 60) {
      return `${Math.round(mytime / 60)} دقیقه پیش`;
    }
    return mytime;
  };
  return (
    <div
      className="flex place-items-end gap-1 font-thin text-xs text-slate-700"
    >
      <Image src={calender} alt="" height={16} width={16} />
      {timeCreator()}
    </div>
  );
};

export default TimeWraper;
