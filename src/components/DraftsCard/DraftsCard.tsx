import { LoveIcon, LocationIcon, MoreIcon } from "../../icons";
import Button from "../Button";
import Image from "next/image";
import Autos from "@/public/assets/Rectangle 101.png";
import { FC } from "react";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import DropdownButton from "../DropdownButton/DropdownButton";
import AutosCard from "../AutosCard/AutosCard";

interface iDraftsCard {

}

const DraftsCard: FC<iDraftsCard> = ({  }) => {
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
      <div className="bg-white rounded">
        <div className="flex justify-between px-4 py-4">
          <h2 className="text-xl text-black font-bold">Draft</h2>
          <div className="flex gap-3">
            <div>
              <DropdownButton
                title={"Sort by:"}
                menu1={"Business for Sale"}
                menu2={"Business Investment"}
                menu3={"Business Loan"}
                menu4={"Asset for Sale"}
              />
            </div>

            {/* <div><DropdownButton title={"Filter by:"} menu1={"Proposed"} menu2={"Accepted"} menu3={"Rejected"} menu4={undefined} /></div> */}

            <div>
              <div
                className="relative inline-block text-center"
                ref={dropdownRef}
              >
                <button
                  className="flex justify-center items-center w-[143px] h-[40px] border-none rounded bg-light-black text-center text-base"
                  onClick={handleButtonClick}
                >
                  Filter by:<span className="text-light-green-9">All</span>
                  <MdOutlineArrowDropDown
                    className={`w-8 h-8 fill-current ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-4 px-2 text-left"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Active
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Archived
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-none bg-light-black-1 h-[1px]" />

        <div className="px-4 pb-12">
          <div className="pt-4">
          <AutosCard amount={""} request={"0"} click={"0"} like={"0"} status={"Active"}/>
          </div>
          <div className="pt-4">
          <AutosCard amount={""} request={"20"} click={"30,730"} like={"100"} status={"Archived"} percentage="/ 40%" />
          </div>
          <div className="pt-4">
          <AutosCard amount={""} request={"20"} click={"30,730"} like={"100"} status={"Archived"} percentage="/ 40%" />
          </div>
          <div className="pt-4">
          <AutosCard amount={""} request={"20"} click={"30,730"} like={"100"} status={"Archived"} percentage="/ 40%" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default DraftsCard;
