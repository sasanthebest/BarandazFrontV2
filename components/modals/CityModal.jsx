"use client";
import React, { useEffect, useState } from "react";
import Modals from "./Modal";
import useCityModal from "@/hooks/useCityModal";
import { useBarandazContext } from "@/context/context";
import { FaAngleDown } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { VscCircle, VscCircleFilled } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import ButtonC from "../util/ButtonC";

const CityModal = ({ allCities }) => {
  const cityModal = useCityModal();
  const { setFilteredCities } = useBarandazContext();
  const [Index, setIndex] = useState(-1);
  const [opened, setOpened] = useState(-1);
  const [selected, setSelected] = useState([]);
  const [childs, setChilds] = useState([]);

  const onOpen = (index) => {
    if ((Index != -1 && opened != index) || Index === -1) {
      setIndex(index);
      setOpened(index);
    }
    if (Index != -1 && opened === index) {
      setIndex(-1);
      setOpened(-1);
    }
  };

  const onSelect = (id, title, parent) => {
    selected.filter((item) => item.id === id).length != 0
      ? setSelected(selected.filter((item) => item.id != id))
      : setSelected([...selected, { id, title, parent }]);
  };

  const onSelectAll = (id) => {
    if (
      selected.filter((item) => item.parent === id).length === childs.length
    ) {
      setSelected(selected.filter((item) => item.parent != id));
    }
    if (selected.filter((item) => item.parent == id).length < childs.length) {
      const newSelection = selected.filter((item) => item.parent != id);
      console.log(newSelection);
      setSelected([...childs, ...newSelection]);
    } else {
      setSelected([...selected, ...childs]);
    }
  };

  useEffect(() => {
    const newSelected = new Set(selected);

    setFilteredCities(newSelected.size);
  }, [selected]);

  const footer = (
    <div className="w-full">
      <ButtonC label="تایید" />
    </div>
  );

  const bodyContent = (
    <div className="w-full h-full p-1">
      {selected.length != 0 && (
        <div className=" w-full">
          {selected.length >= 4 && (
            <div
              onClick={() => setSelected([])}
              className="w-20 border rounded border-rose-500 cursor-pointer p-2 flex items-center gap-2"
            >
              <p className="text-sm text-zinc-500">حذف همه</p>
            </div>
          )}

          <div className="overflow-x-auto flex flex-row gap-2 items-center p-2">
            {[...new Set(selected)].map((city, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelected(
                    selected.filter((item) => item.title != city.title)
                  )
                }
                className="border rounded border-sky-500 hover:border-rose-700 cursor-pointer p-2 flex items-center gap-2"
              >
                <p className="text-sm text-zinc-500">{city.title}</p>
                <RxCross2 className="text-sky-500" size={12} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="h-96 overflow-y-auto">
        {allCities
          .filter((item) => item.parent === null)
          .map((city, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  setChilds(
                    allCities.filter((item) => item.parent === city.id)
                  );
                  onOpen(index);
                }}
                className="cursor-pointer flex items-center justify-between border-b  p-3"
              >
                <p className="  w-full outline-none text-md">{city.title}</p>
                <FaAngleDown
                  className={`text-neutral-500 ${
                    index === Index
                      ? "transform rotate-135 duration-700 "
                      : "transform -rotate-180 duration-700 "
                  }`}
                />
              </div>
              {opened === index && index === Index && (
                <div
                  className={`translate duration-700 
                                    ${
                                      opened === index && index === Index
                                        ? "translate-y-0"
                                        : "translate-y-full"
                                    }`}
                >
                  {childs.length != 0 ? (
                    <div>
                      <div className="  p-3  bg-white">
                        <div className="flex items-center gap-2">
                          <div
                            onClick={() => onSelectAll(city.id)}
                            className="border rounded border-sky-500 cursor-pointer p-2 flex items-center gap-2"
                          >
                            <p className="text-sm text-zinc-500">
                              انتخاب همه ی شهرهای {city.title}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="relative mt-2 mb-2 w-92 h-72 overflow-y-auto p-5 border rounded">
                        <div>
                          {childs.map((city, index) => (
                            <div
                              onClick={() =>
                                onSelect(city.id, city.title, city.parent)
                              }
                              key={index}
                              className="w-full flex items-center justify-between border-b  p-3"
                            >
                              <p className="cursor-pointer w-full outline-none text-md">
                                {city.title}
                              </p>
                              {selected.filter((item) => item.id === city.id)
                                .length != 0 ? (
                                <VscCircleFilled
                                  className="text-sky-500"
                                  size={25}
                                />
                              ) : (
                                <VscCircle size={25} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="p-2">
                        برای این استان تا کنون شهری ثبت نشده است!!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
  return (
    <Modals
      title="شهر ها"
      isOpen={cityModal.isOpen}
      onClose={cityModal.onClose}
      disabled={false}
      body={bodyContent}
      footer={footer}
    />
  );
};

export default CityModal;
