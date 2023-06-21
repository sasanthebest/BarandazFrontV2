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
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50
          inset-0 outline-none focus:outline-none bg-neutral-800/70"
      >
        <div className="relative sm:w-full md:w-4/6 lg:w-2/5 xl:w-2/5 my-6 mx-auto lg:h-auto md:h-auto">
          {/* CONTENT */}

          <div
            className={`translate duration-300 h-full
            ${showModal ? "transalte-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg
               relative flex flex-col w-full bg-white outline-none focus:outline-none"
            >
              {/* HEADER */}
              <div className="flex items-center p-4 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 absolute left-3"
                >
                  <AiFillCloseCircle color="#eb3458" size={18} />
                </button>

                <div className="text-lg">{title}</div>
              </div>

              {/* BODY */}
              <div className="relative p-3 flex-auto  min-w-[350px] min-h-[150px]">{body}</div>
              {/* FOOTER */}
              <div className="flex flex-col rounded-b-lg bg-white">{footer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
