import Link from "next/link";
import { useState, useRef, useEffect, FC } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface iFilterSelect {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    label: string;
    placeholder: string;
}

const FilterSelect: FC<iFilterSelect> = ({label, placeholder, option1, option2, option3, option4 }) => {
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
    <>
      <div>
        <p className="font-semibold text-base text-light-black-5 pb-1">
          {label}
        </p>
        <div
          className="relative inline-block text-center w-full"
          ref={dropdownRef}
        >
          <button
            className="flex justify-between pl-4 items-center w-full h-[40px] border-none rounded bg-light-black text-center text-base"
            onClick={handleButtonClick}
          >
            {placeholder}
            <span>
              <MdOutlineArrowDropDown
                className={`w-8 h-8 fill-current ${isOpen ? "rotate-180" : ""}`}
              />
            </span>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-[350px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="py-2 px-2 text-left"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  className="block px-4 py-1 text-base leading-8 text-light-black-5"
                  role="menuitem"
                >
                  <label
                    className="flex gap-2 items-center text-base text-light-black-4"
                    htmlFor="nigeria"
                  >
                    <input
                      type="checkbox"
                      id="nigeria"
                      className="custom mr-1 "
                    />
                    {option1}
                  </label>
                </div>
                <div
                  className="block px-4 py-1 text-base leading-8 text-light-black-5"
                  role="menuitem"
                >
                  <label
                    className="flex gap-2 items-center text-base text-light-black-4"
                    htmlFor="russia"
                  >
                    <input
                      type="checkbox"
                      id="russia"
                      className="custom mr-1 "
                    />
                    {option2}
                  </label>
                </div>
                <div
                  className="block px-4 py-1 text-base leading-8 text-light-black-5"
                  role="menuitem"
                >
                  <label
                    className="flex gap-2 items-center text-base text-light-black-4"
                    htmlFor="china"
                  >
                    <input
                      type="checkbox"
                      id="china"
                      className="custom mr-1 "
                    />
                    {option3}
                  </label>
                </div>
                <div
                  className="block px-4 py-1 text-base leading-8 text-light-black-5"
                  role="menuitem"
                >
                  <label
                    className="flex gap-2 items-center text-base text-light-black-4"
                    htmlFor="unitedstate"
                  >
                    <input
                      type="checkbox"
                      id="unitedstate"
                      className="custom mr-1 "
                    />
                    {option4}
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterSelect;
