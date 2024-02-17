import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Auto from "@/public/assets/Rectangle 101.png";
import { LocationIcon, MoreIcon } from "@/public/icons";
import Button from "../Button";

interface iDraft {
  image: string | StaticImageData;
  title: string;
  active: boolean;
  price: number;
  requests: number;
  clicks: number;
  likes: number;
}

const DraftCard = () => {
  const drafts: iDraft[] = [
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: false,
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      title: "Auto Component Distribution Company",
    },
  ];

  return (
    <>
      <div className="bg-white rounded border-border-black border-[1.5px] w-full">
        <div className="flex justify-between px-4 py-4">
          <h2 className="text-xl text-black font-bold">Drafts</h2>
          <Link href={""}>
            <p className="text-base text-gray cursor-pointer">View all</p>
          </Link>
        </div>
        <hr className="border-none mt-2 bg-light-black-1 h-[1px]" />

        <div className="md:px-5 md:flex md:flex-col">
          {drafts.map((draft, i) => {
            return (
              <div className="mt-5 px-4 md:px-0" key={i}>
                <div className="bg-gray-light-1 md:bg-white rounded">
                  <div className="relative pt-4 mb-4 md:pt-0 md:pb-0">
                    <div className="flex gap-4 items-center float-right absolute right-4 md:hidden">
                      <div
                        className={`${
                          draft.active
                            ? "bg-light-green-20 text-light-green"
                            : "bg-light-black-3 text-black-70"
                        } rounded-[40px] h-[34px] flex justify-center items-center gap-2 px-3 text-base font-medium`}
                      >
                        <span
                          className={`${
                            draft.active ? "bg-light-green" : "bg-black-70"
                          }  rounded-full w-2 h-2`}
                        ></span>
                        {draft.active ? "Active" : "Archived"}
                      </div>

                      <MoreIcon />
                    </div>

                    <div className="flex gap-4 md:flex-col md:gap-0">
                      <div className="ml-6 md:ml-0 md:w-full md:relative">
                        <Image
                          src={Auto}
                          alt={""}
                          className="md:w-[100%] md:object-cover md:h-40 rounded-[10px] md:rounded-b-none"
                        />
                        <div
                          className={`md:block hidden absolute top-0 right-0 ${
                            draft.active
                              ? "bg-light-green-20 text-light-green"
                              : "bg-gray-light-1 text-black-70"
                          } rounded-tr-[10px] px-3`}
                        >
                          {draft.active ? "Active" : "Archived"}
                        </div>
                      </div>
                      <div className="md:flex md:flex-col md:border-border-black md:border-[1.5px] md:border-t-0 md:px-4 rounded-b-[10px] mb-4">
                        <h2 className="font-bold md:text-lg text-xl mb-2 text-light-black-6 md:mt-2">
                          {draft.title.substring(0, 25)}...
                        </h2>
                        <div className="flex items-center gap-2 pb-2 md:hidden">
                          <p className="font-medium md:text-sm text-xs text-light-black-4">
                            Sale Amount:
                          </p>
                          <p className="text-light-green font-normal md:text-sm text-xs">
                            NGN{" "}
                            <span className="font-bold md:text-lg text-xl  leading-6">
                              {draft.price}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2 md:mb-4">
                          <div className="flex items-center gap-1">
                            <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-medium text-base text-light-black-5">
                              {draft.requests}{" "}
                              <span className="font-normal text-xs text-light-black-4 md:hidden">
                                Requests
                              </span>
                            </div>
                          </div>
                          <div className="custom-separator md:hidden"></div>
                          <div className="flex items-center gap-1">
                            <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-medium text-base text-light-black-5">
                              {draft.clicks}{" "}
                              <span className="font-normal text-xs text-light-black-4 md:hidden">
                                Clicks
                              </span>
                            </div>
                          </div>
                          <div className="custom-separator md:hidden"></div>
                          <div className="flex items-center gap-1">
                            <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-medium text-base text-light-black-5">
                              {draft.likes}{" "}
                              <span className="font-normal text-xs text-light-black-4 md:hidden">
                                Likes
                              </span>
                            </div>
                          </div>
                          <div className="text-light-green font-normal md:block hidden md:text-sm text-xs w-full md:text-right">
                            NGN{" "}
                            <span className="font-bold md:text-lg text-xl  leading-6">
                              {draft.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DraftCard;
