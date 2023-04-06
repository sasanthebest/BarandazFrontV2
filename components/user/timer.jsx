"use client";
import { useEffect, useState } from "react";

const Timer = ({ time, setTime }) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(time);
  const [start, setStart] = useState(true);
  const timer = () => {
    if (minute === 0 && second === 0) {
      setStart(false);
      setTime(0);
    }
    if (start) {
      if (minute != 0 && second === 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (second != 0) setSecond(second - 1);
    }
  };
  useEffect(() => {
    setTimeout(() => timer(), 1000);
  });

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <h1>
        {minute}:{second}
      </h1>
    </div>
  );
};

export default Timer;
