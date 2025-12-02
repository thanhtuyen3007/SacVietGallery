import images from "~/assets";
import { MenuSideBar } from "./MenuSideBar";
import { useState } from "react";
import clsx from "clsx";

export const SideBars = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        "container-sideBars w-full fixed top-0 left-0 z-[90]",
        isOpen && "bg-bg-secondary shadow-md"
      )}
    >
      <div className="sideBar">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-sideBar hover:cursor-pointer mt-20 ml-20 focus:outline-none"
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
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <MenuSideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};
