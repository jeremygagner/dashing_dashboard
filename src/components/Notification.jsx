import React, { useCallback, useEffect, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor, handleClose } = useStateContext();

  const notifRef = useRef(null);

  const handleClickOut = useCallback(
    (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        handleClose("notification");
      }
    },
    [handleClose]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleClose("notification");
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    document.addEventListener("mousedown", handleClickOut, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
      document.removeEventListener("mousedown", handleClickOut, false);
    };
  }, [handleClickOut, handleEscape]);

  return (
    <div ref={notifRef} className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2"
            style={{ backgroundColor: currentColor }}
          >
            {" "}
            5 New
          </button>
        </div>
        <Button
          text={<MdOutlineCancel />}
          color={currentColor}
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
