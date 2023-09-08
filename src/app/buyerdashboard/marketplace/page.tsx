"use client";
import { LocationIcon, LoveIcon, OverviewIcon } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { MdBakeryDining, MdOutlineArrowDropDown, MdOutlineBakeryDining } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Image1 from "@/public/assets/Rectangle 106.png";
import MarketplaceCard from "@/public/components/MarketplaceCard/MarketplaceCard";
import Filters from "@/public/components/Filters/Filters";

const Marketplace = () => {
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
      <div className="px-6 pt-4 overflow-y-scroll h-[85vh]">
        <div className="flex justify-between items-center pb-4">
          <div>
            <h2 className="text-2xl font-bold text-black pb-2">Marketplace</h2>
            <p className="text-base font-medium text-light-black-5">
              Buy, Invest and Loan businesses as much as you can afford.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <div>
              <div
                className="relative inline-block text-center z-20"
                ref={dropdownRef}
              >
                <button
                  className="flex justify-center items-center w-[143px] h-[40px] border-none rounded bg-light-black text-center text-base"
                  onClick={handleButtonClick}
                >
                  Sort by:<span className="text-light-green-9">All</span>
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
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Alphabetical
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Date Created
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-base leading-8 text-light-black-5 hover:bg-green hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Last modified
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Filters />
            </div>

            <div className="">
              <div className="flex gap-2">
                <div className="rounded w-[40px] h-[40px] items-center bg-light-black-15 flex justify-center ">
                  <OverviewIcon color="#2C4C3B" />
                </div>
                <div className="rounded w-[40px] h-[40px] items-center bg-light-black flex justify-center ">
                  <RxHamburgerMenu color="#2C4C3B" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
            <MarketplaceCard />
        </div>

        <div className="pt-6 pb-4">
            <MarketplaceCard />
        </div>
      </div>
    </>
  );
};

export default Marketplace;
