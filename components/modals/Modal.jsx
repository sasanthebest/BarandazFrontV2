"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../util/Button";
import { AiFillCloseCircle } from "react-icons/ai";

const Modals = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) return null;
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden fixed z-200 
          inset-0 outline-none focus:outline-none bg-neutral-700/70 h-full"
      >
        {/* modal */}
        <div className="fixed top-6 w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-1/4 m-2 ">
          {/* CONTENT */}

          <div
            className={`translate duration-300 w-full
            ${showModal ? "transalte-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="relative translate  border-none rounded-lg shadow-md shadow-sky-300
                flex flex-col w-full  bg-white outline-none focus:outline-none"
            >
              {/* HEADER */}
              <div className="p-4  z-50 ">
                <div className="flex items-center justify-between">
                  <div className="text-lg">{title}</div>
                  <AiFillCloseCircle
                    className="cursor-pointer"
                    onClick={handleClose}
                    color="#eb3458"
                    size={18}
                  />
                </div>
              </div>

              {/* BODY */}
              <div className="p-3 flex-auto h-full ">{body}</div>
              {/* FOOTER */}
              <div className="bottom-0">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
