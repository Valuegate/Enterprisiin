import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Auto from "@/public/assets/Rectangle 101.png";
import { LocationIcon, MoreIcon } from "@/public/icons";

function formatNumberWithCommas(number: number) {
  return number.toLocaleString("en-US");
}

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
      <div className="bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm">
        <div className="flex justify-between px-4 h-[74px] md:h-[70px] items-center border-b-[1.5px] border-contrast-10">
          <h2 className="bold-1 md:text-[20px] md:leading-[30px] text-contrast-100">
            Drafts
          </h2>
          <Link href={""}>
            <p className="text-blue-base med-3 md:text-[14px] md:leading-[24px] cursor-pointer">
              View all
            </p>
          </Link>
        </div>

        <div className="md:px-5 md:flex md:flex-col mt-6">
          {drafts.map((draft, i) => {
            return (
              <div className="px-4 md:px-0" key={i}>
                <div className="bg-input md:bg-white rounded">
                  <div className="relative pt-4 mb-4 md:pt-0 md:pb-0">
                    <div className="flex gap-4 items-center float-right absolute right-4 md:hidden">
                      <div
                        className={`${
                          draft.active
                            ? "bg-green-base text-green-100"
                            : "bg-contrast-20 text-contrast-base"
                        } rounded-[40px] h-[34px] flex justify-center items-center gap-2 px-3  med-3`}
                      >
                        <span
                          className={`${
                            draft.active ? "bg-green-100" : "bg-contrast-base"
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
                              ? "bg-green-base text-green-100"
                              : "bg-contrast-20 text-contrast-base"
                          } rounded-tr-[10px] px-3`}
                        >
                          {draft.active ? "Active" : "Archived"}
                        </div>
                      </div>
                      <div className="md:flex md:flex-col md:border-contrast-10 md:border-[1.5px] md:border-t-0 md:px-4 rounded-b-[10px] mb-4">
                        <h2 className="bold-2 md:text-[16px] md:leading-[28px] mb-2 text-contrast-100 md:mt-2">
                          {draft.title.substring(0, 30)}...
                        </h2>
                        <div className="flex items-center gap-2 pb-2 md:hidden">
                          <p className="font-medium text-[12px] leading-[18px] text-contrast-base">
                            Sale Amount:
                          </p>
                          <p className="font-normal text-[12px] leading-[24px] text-green-100 ">
                            NGN{" "}
                            <span className="font-bold text-[18px]">
                              {formatNumberWithCommas(draft.price)}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2 md:mb-4">
                          <div className="flex items-center gap-1">
                            <div className="bg-contrast-20 rounded-full p-[6px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-bold text-contrast-80 text-[16px] md:text-[14px]">
                              {draft.requests}{" "}
                              <span className="font-medium text-[14px] text-contrast-base md:hidden">
                                Requests
                              </span>
                            </div>
                          </div>
                          <div className="custom-separator md:hidden"></div>
                          <div className="flex items-center gap-1">
                            <div className="bg-contrast-20 rounded-full p-[6px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-bold text-contrast-80 text-[16px] md:text-[14px]">
                              {draft.clicks}{" "}
                              <span className="font-medium text-[14px] text-contrast-base md:hidden">
                                Clicks
                              </span>
                            </div>
                          </div>
                          <div className="custom-separator md:hidden"></div>
                          <div className="flex items-center gap-1">
                            <div className="bg-contrast-20 rounded-full p-[6px] w-8 h-8 md:w-6 md:h-6 md:p-[2px]">
                              <LocationIcon />
                            </div>
                            <div className="font-bold text-contrast-80 text-[16px] md:text-[14px]">
                              {draft.likes}{" "}
                              <span className="font-medium text-[14px] text-contrast-base md:hidden">
                                Likes
                              </span>
                            </div>
                          </div>
                          <p className="font-normal text-[12px] leading-[24px] text-green-100 md:block hidden w-full md:text-right">
                            NGN{" "}
                            <span className="font-bold text-[18px]">
                              {formatNumberWithCommas(draft.price)}
                            </span>
                          </p>
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
