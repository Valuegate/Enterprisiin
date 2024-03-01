import Image from "next/image";

import { FC } from "react";
import { LocationIcon } from "@/public/icons";
import { FaHeart } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { iStoreCardData, ACTIVE, ARCHIVED } from "./StoreData";

const StoreCard: FC<iStoreCardData> = ({ store, onClick }) => {
  return (
    <div className="px-4 md:px-0 cursor-pointer" onClick={onClick}>
      <div className="bg-input md:bg-white rounded">
        <div className="relative pt-4 mb-4 md:pt-0 md:pb-0">
          <div className="flex gap-4 md:flex-col md:gap-0">
            <div className="ml-4 md:ml-0 md:w-full md:relative">
              <Image
                src={store.image}
                alt={""}
                className="md:w-[100%] md:object-cover h-[90%] md:h-40 rounded-[10px] md:rounded-b-none"
              />
              <div
                className={`md:block hidden absolute top-0 right-0 ${
                  store.status === ARCHIVED
                    ? "bg-light-dark text-light-dark-1"
                    : store.status === ACTIVE
                    ? "bg-role-green-bg text-role-green"
                    : "bg-role-green-bg text-role-green"
                } rounded-tr-[10px] px-3`}
              >
                {store.status}
              </div>
            </div>
            <div className="md:flex md:flex-col md:border-contrast-10 md:border-[1.5px] md:border-t-0 md:px-4 rounded-b-[10px] mb-4">
              <div className="flex w-full justify-between items-center pr-4 md:pr-0">
                <h2 className="bold-2 md:text-[16px] md:leading-[28px] mb-2 text-contrast-100 md:mt-2">
                  {store.name}
                </h2>

                <div className={`${
                      store.status === ARCHIVED
                        ? "bg-light-dark text-light-dark-1"
                        : store.status === ACTIVE
                        ? "bg-role-green-bg text-role-green"
                        : "bg-role-green-bg text-role-green"
                    } px-2 rounded-full py-1 med-3 md:hidden flex gap-2 items-center`}>
                  <div className="w-2 h-2 border-none rounded-full"
                    style={{ backgroundColor: store.liked ? "#00A707" : "#2C4C3B" }}
                      />
                    {/* <div className="w-2 h-2 border rounded-full"
                    style={{ backgroundColor: store.liked ? "#FF0000" : "#C2C2C2" }}
                      /> */}
                  {/* </div> */}

                  <div
                    
                  >
                    {store.status}
                  </div>
                </div>
              </div>
              <p className="med-3 md:hidden text-contrast-base pr-4">
                {store.description}
              </p>
              <div
                className={`flex items-center gap-2 md:mb-4 mt-2 justify-between`}
              >
                <div className="flex items-center gap-1 md:flex-col w-fit md:w-full md:items-start">
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {store.location}
                    </div>
                  </div>
                  <div className="custom-separator md:hidden mx-1" />
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {store.interest}
                    </div>
                  </div>
                  <div className="custom-separator md:hidden mx-1" />
                  <div className="flex items-center gap-1">
                    <div className="bg-contrast-20 rounded-full p-[5px] md:p-[3px]">
                      <GrLocation stroke="#474747" size={"20px"} />
                    </div>
                    <div className="font-bold text-contrast-70 med-3 md:text-[12px] md:leading-[16px]">
                      {store.storeStatus}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pb-2 md:hidden pr-4">
                  <p className={`med-4 text-contrast-base md:hidden `}>
                    Sale Amount:
                  </p>
                  <p
                    className={`font-normal text-[12px] leading-[24px] text-green-100 `}
                  >
                    NGN{" "}
                    <span className="font-bold text-[18px]">
                      {store.amount.toLocaleString("en-US")}
                    </span>
                  </p>
                </div>

                <p className="font-normal text-[12px] leading-[24px] text-green-100 md:block hidden w-full md:text-right">
                  NGN{" "}
                  <span className="font-bold text-[18px]">
                    {store.amount.toLocaleString("en-US")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
