import images from "~/assets";
import { MenuSideBar } from "./MenuSideBar";
import { useState } from "react";
import clsx from "clsx";

export const SideBars = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen", isOpen);
  return (
    <div
      className={clsx(
        "container-sideBars w-full fixed top-0 left-0 z-50",
        isOpen && "bg-bg-primary"
      )}
    >
      <div className="sideBar">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-sideBar hover:cursor-pointer mt-20 ml-20
          focus:outline-none"
        >
          <img
            className=" w-45 h-45 lg:w-64 lg:h-64"
            src={isOpen ? images.closeIcon : images.menuBarIcon}
            alt="IconBar"
          />
        </button>
      </div>
       <div
        className={clsx(
          "overflow-hidden transition-all duration-1200 ease-in-out origin-top",
          isOpen
            ? "max-h-[100vh] opacity-100"
            : "max-h-0 opacity-0"
        )}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <MenuSideBar isOpen={isOpen} />
      </div>
    </div>
  );
};
