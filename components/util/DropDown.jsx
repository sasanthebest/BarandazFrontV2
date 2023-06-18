"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { BsCheck2All } from "react-icons/bs";

const DropDown = ({ data, id, inputeTitle, sId, set, specifc, helpText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  // const [searched, setSearched] = useState("");
  const [filteredDataList, setFilteredDataList] = useState(data);

  const filterBySearch = (e) => {
    
    const query=e.target.value
    // console.log(indexOf(query.toLowerCase()));
    let updatedList = [...data];
    updatedList = updatedList.filter((item) => {
      console.log(item.title.toLowerCase().includes(query.toLowerCase()));
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
    setFilteredDataList(updatedList);
    setSelected(updatedList[0])
  };

  const handleCity = (index) => {
    if (filteredDataList.length > 0) {
      setSelected(filteredDataList[0])
      setIsOpen(false);
    }
    else{setSelected(data(index))
    setIsOpen(false);}

    
  };

  useEffect(() => {
    if (specifc) {
      const data = {
        adspecification: sId,
        value: selected.title,
      };
      set(id, data);
    } else {
      set(id, selected.id);
    }
  }, [selected]);

  return (
    <div className="w-full ">
      <p className=" mb-3 pr-1">{inputeTitle}</p>
      {helpText && <p className="text-xs text-stone-500 pb-2">{helpText}</p>}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between items-center w-full rounded border p-2 mt-1 cursor-pointer"
      >
        <p className="cursor-pointer bg-white w-full outline-none text-xs">
          {selected.title}
        </p>
        <FaAngleDown
          className={`text-neutral-500 ${
            isOpen && "transform rotate-180 duration-500 origin-center"
          }`}
        />
      </div>
      {isOpen && (
        <>
          <div className="flex flex-row gap-1 items-center p-1 border rounded shadow">
            <RiSearchLine className="text-stone-400" />
            <input
              onChange={(e) => {
                // setSearched(e.target.value);
                filterBySearch(e);
              }}
              placeholder="جستجو"
              className="outline-none w-full flex flex-row gap-1 items-center p-2 text-xs text-stone-400"
            />
          </div>
          <div className="bg-white border rounded shadow w-full overflow-y-scroll mt-1 h-60v">
            {filteredDataList.map((ci, index) => (
              <div
                key={index}
                onClick={() => handleCity(index)}
                className="flex flex-row justify-between items-center hover:bg-stone-100 cursor-pointer"
              >
                <p
                  className={`cursor-pointer hover:text-neutral-700 p-2 text-sm text-neutral-500 `}
                >
                  {ci.title}
                </p>
                {selected === ci && (
                  <BsCheck2All className={`text-rose-400 ml-1`} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DropDown;
