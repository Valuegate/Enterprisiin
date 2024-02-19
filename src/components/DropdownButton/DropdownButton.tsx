import Link from "next/link";
import React, {
  useState,
  useRef,
  useEffect,
  FC,
  MouseEventHandler,
} from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface iDropdownButton {
  title: string;
  value: string | null;
  menus: iMenuItem[];
}

interface iMenuItem {
  name: string;
  onClick: MouseEventHandler;
}

const DropdownButton: FC<iDropdownButton> = ({ value, menus, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any }) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-center bg-contrast-10 rounded md:w-[165px]"
      ref={dropdownRef}
    >
      <button
        className="flex justify-center items-center px-3 h-[40px] rounded text-center med-3 text-contrast-base md:w-[100%]"
        onClick={handleButtonClick}
      >
        <span className={`${value !== null && "hidden"}`}>{title}</span>
        {value !== null && (
          <span className="font-[600] text-contrast-80 pl-1">{value}</span>
        )}
        <MdOutlineArrowDropDown
          className={`w-8 h-8 fill-current ${isOpen && "rotate-180"}`}
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg z-10 bg-white ring-[1.5px] ring-contrast-10 ring-opacity-5">
          <div
            className="py-4 px-2 text-left"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menus.map((menu, i) => {
              return (
                <div
                  role="menuitem"
                  className="block cursor-pointer px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-blue-base hover:text-white hover:rounded"
                  onClick={(e) => {
                    menu.onClick(e);
                    handleButtonClick();
                  }}
                  key={i}
                >
                  {menu.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
