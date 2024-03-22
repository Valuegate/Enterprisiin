"use client";

import Auto from "@/public/assets/Rectangle 101.png";

import Button from "@/public/components/Button";
import { FC, useState } from "react";

import DropdownButton from "@/public/components/DropdownButton/DropdownButton";
import { GrLocation } from "react-icons/gr";
import { TbGraph } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import Image, { StaticImageData } from "next/image";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Select, MultiSelect } from "@mantine/core";

import { useDashboardStore } from "@/public/stores/dashboardStore";
import ViewBusiness from "../Overview/ViewBusiness";

interface iMarketBusinessData {
  image: string | StaticImageData;
  name: string;
  location: string;
  role: string;
  description: string;
  price: string;
  status: string;
  onClick: () => void;
}

interface iFilterData {
  type: string;
  countries: string[];
  states: string[];
  industries: string[];
  minPrice: number;
  maxPrice: number;
}

const Marketplace = () => {
  const [currentBusiness, setCurrentBusiness] = useState<number>(-1);
  const [sortFilter, setSortFilter] = useState<string>("All");
  const [filterData, setFilterData] = useState<iFilterData>({
    countries: [],
    industries: [],
    states: [],
    maxPrice: 0,
    minPrice: 0,
    type: "",
  });
  const [openedFilter, { open: openFilter, close: closeFilter }] =
    useDisclosure(false);
  const businesses: iMarketBusinessData[] = Array(15).fill({
    image: Auto,
    name: "Aquatics and Sport Coaching Opportunity",
    location: "Lagos, Nigeria",
    description:
      "Pool Academy Aquatics is an international aqauatics club that deals with fishes and clubbing",
    role: "Bakery",
    price: "400 M",
    status: "For Sale",
  });

  const viewingBusiness = useDashboardStore((state) => state.viewingBusiness);

  return (
    <>
      {currentBusiness === -1 ? (
        <div className={`px-6 pt-4 overflow-y-scroll h-[90vh] md:h-auto pb-10`}>
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-center md:flex-col">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-[20px] md:leading-[30px] font-bold text-black md:mt-10 mt-2">
                  Marketplace
                </h2>
                <p className="med-3 text-contrast-base mt-2 md:text-[14px] md:leading-[20px]">
                  Buy, Invest and Loan businesses as much as you can afford.
                </p>
              </div>
              <div className="flex items-center gap-5 w-fit md:justify-between md:mt-3 md:w-full">
                <DropdownButton
                  menus={[
                    {
                      name: "All",
                      onClick: () => {
                        setSortFilter("All");
                      },
                    },
                    {
                      name: "Accepted",
                      onClick: () => {
                        setSortFilter("Accepted");
                      },
                    },
                    {
                      name: "Proposed",
                      onClick: () => {
                        setSortFilter("Proposed");
                      },
                    },
                    {
                      name: "Rejected",
                      onClick: () => {
                        setSortFilter("Rejected");
                      },
                    },
                  ]}
                  title="Sort by:"
                  value={sortFilter}
                />
                <Button
                  type="button"
                  height="h-[40px]"
                  className="text-white rounded px-3 md:px-7 flex justify-center items-center gap-2"
                  colorType="primary"
                  handleClick={openFilter}
                >
                  <IoFilterOutline fill="#FFFFFF" />
                  Filters
                </Button>
                <div className="gap-2 flex items-center">
                  <div className="h-[40px] flex items-center justify-center w-[40px] rounded bg-blue-10 md:hidden">
                    <BiSolidDashboard fill="#3399FF" size={"26px"} />
                  </div>
                  <div className="h-[40px] flex items-center justify-center w-[40px] rounded bg-input ">
                    <GrMenu fill="#474747" size={"26px"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap md:flex-col gap-7 md:gap-4">
              {businesses.map((business, i) => {
                return (
                  <MarketCard
                    key={i}
                    description={business.description}
                    image={business.image}
                    location={business.location}
                    name={business.name}
                    price={business.price}
                    role={business.role}
                    status={business.status}
                    onClick={() => {
                      setCurrentBusiness(i);
                      useDashboardStore.setState({ viewingBusiness: true });
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <ViewBusiness
          business={{
            amount: 400000,
            businessStatus: "",
            description: businesses[currentBusiness].description,
            image: businesses[currentBusiness].image,
            interest: "",
            liked: true,
            location: "",
            name: businesses[currentBusiness].name,
            status: businesses[currentBusiness].status,
          }}
          onExit={() => {
            setCurrentBusiness(-1);
            useDashboardStore.setState({ viewingBusiness: false });
          }}
        />
      )}
      <Modal opened={openedFilter} centered onClose={closeFilter}>
        <div className="flex flex-col">
          <p className="bold-1 text-contrast-100">Filter</p>
          <p className="med-3 text-contrast-base">
            Buy, Invest and Loan businesses as much as you can
          </p>
          <div className="mt-6 flex flex-col items-start">
            <p className="semi-3 text-contrast-80">Business Type</p>
            <Select
              data={[
                "Business for Sale",
                "Business Investment",
                "Business Loan",
                "Asset for Sale",
              ]}
              placeholder="Select"
              width={300}
              value={filterData.type}
              onChange={(e) => {
                setFilterData({ ...filterData, type: e! });
              }}
            />
            <p className="semi-3 text-contrast-80 mt-4">Country</p>
            <MultiSelect
              placeholder="Select"
              data={["Nigeria", "China", "India", "Algeria"]}
              onChange={(e) => {
                setFilterData({ ...filterData, countries: e });
              }}
            />
            <p className="semi-3 text-contrast-80 mt-4">State</p>
            <MultiSelect
              placeholder="Select"
              data={["Ogun", "Oyo", "Lagos", "Kaduna"]}
              onChange={(e) => {
                setFilterData({ ...filterData, states: e });
              }}
            />
            <p className="semi-3 text-contrast-80 mt-4">Industry</p>
            <MultiSelect
              placeholder="Select"
              data={[
                "Building & Construction",
                "Education",
                "Agriculture",
                "Technology",
              ]}
              onChange={(e) => {
                setFilterData({ ...filterData, industries: e });
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

const MarketCard: FC<iMarketBusinessData> = ({
  image,
  name,
  location,
  role,
  description,
  price,
  status,
  onClick,
}) => {
  return (
    <div className="bg-white md:bg-background md:shadow-none shadow-md w-[260px] md:w-full h-[330px] md:h-auto flex flex-col p-4 md:p-0">
      <div className="relative">
        <Image
          src={image}
          alt=""
          className="w-full h-24 object-fill rounded-t-[10px] "
        />
        <div
          className={`absolute hidden md:block right-0 top-0 bg-yellow-10 text-yellow-60 px-2 rounded-tr-[10px] py-1 font-medium text-[12px] leading-[18px]`}
        >
          {status}
        </div>
      </div>
      <div className="border-t-none md:border-[1.5px] md:border-contrast-10 rounded md:px-2">
        <p className="bold-3 md:leading-[28px] text-contrast-100 mt-1 ">
          {name}
        </p>
        <div className="mt-1 flex items-center gap-3 md:justify-between w-full">
          <div className="w-full flex gap-3 md:w-fit md:gap-2">
            <div className="flex items-center gap-1 ">
              <div className="bg-contrast-10 rounded-full p-[2px]">
                <GrLocation size={"12px"} stroke="#474747" />
              </div>
              <div className="font-medium text-contrast-50 text-[12px] leading-[16px]">
                {location}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-contrast-10 rounded-full p-[2px]">
                <TbGraph size={"12px"} stroke="#474747" />
              </div>
              <div className="font-medium text-contrast-50 text-[12px] leading-[16px]">
                {role}
              </div>
            </div>
          </div>

          <p className="font-semibold text-[12px] leading-[24px] text-green-100 md:block hidden">
            NGN <span className="font-bold text-[18px]">{price}</span>
          </p>
        </div>
        <p className="med-3 text-contrast-base mt-1 md:hidden">
          {description.substring(0, 56)}...
        </p>
        <div className="mt-2 flex w-full justify-between items-center md:hidden">
          <p className="font-semibold text-[12px] leading-[24px] text-green-100">
            NGN <span className="font-bold text-[18px]">{price}</span>
          </p>
          <div
            className={`bg-yellow-10 text-yellow-60 px-2 rounded-full py-1 font-medium text-[12px] leading-[18px]`}
          >
            {status}
          </div>
        </div>
        <button
          onClick={onClick}
          className="w-full h-8 bg-blue-base rounded text-white med-3 mt-3 md:mb-5"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Marketplace;
