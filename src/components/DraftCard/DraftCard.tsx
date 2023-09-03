import Link from "next/link";
import Image from "next/image";
import Auto from "@/public/assets/Rectangle 101.png";
import { LocationIcon, MoreIcon } from "@/public/icons";
import Button from "../Button";

const DraftCard = () => {
  return (
    <>
      <div className="chart-width bg-white rounded">
        <div className="flex justify-between px-4 py-4">
          <h2 className="text-xl text-black font-bold">Drafts</h2>
          <Link href={""}>
            <p className="text-base text-gray cursor-pointer">View all</p>
          </Link>
        </div>
        <hr className="border-none bg-light-black-1 h-[1px]" />

        <div className="pt-4 px-4">
          <div className="bg-gray-light-1 rounded">
            <div className="relative pt-4 pb-4">
              <div className="flex gap-4 items-center float-right absolute right-4">
                <Button
                  type="button"
                  className="bg-light-green-20 rounded-[40px] w-[94px] h-[34px] flex justify-center items-center gap-2 text-base font-medium text-light-green"
                  // disabled={true}
                  colorType="primary"
                  // loading={load}
                  //   handleClick={() => setLoad(!load)}
                >
                  <span className="bg-light-green border border-light-green rounded-full w-2 h-2"></span>
                  Active
                </Button>

                <MoreIcon />
              </div>

              <div className="flex gap-4 ">
                <div className="ml-6">
                  <Image src={Auto} alt={""} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl mb-2 text-light-black-6">
                    Auto Component Distributor...
                  </h2>
                  <div className="flex items-center gap-2 pb-2">
                    <p className="font-medium text-xs text-light-black-4">
                      Sale Amount:
                    </p>
                    <p className="text-light-green font-normal text-xs">
                      NGN{" "}
                      <span className="font-bold text-xl leading-6">
                        400,000
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Requests
                        </span>
                      </div>
                    </div>
                    <div className="custom-separator"></div>
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Clicks
                        </span>
                      </div>
                    </div>
                    <div className="custom-separator"></div>
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 px-4 pb-4">
          <div className="bg-gray-light-1 rounded">
            <div className="relative pt-4 pb-4">
              <div className="flex gap-4 items-center float-right absolute right-4">
                <Button
                  type="button"
                  className="bg-light-green-20 rounded-[40px] w-[94px] h-[34px] flex justify-center items-center gap-2 text-base font-medium text-light-green"
                  // disabled={true}
                  colorType="primary"
                  // loading={load}
                  //   handleClick={() => setLoad(!load)}
                >
                  <span className="bg-light-green border border-light-green rounded-full w-2 h-2"></span>
                  Active
                </Button>

                <MoreIcon />
              </div>

              <div className="flex gap-4 ">
                <div className="ml-6">
                  <Image src={Auto} alt={""} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl mb-2 text-light-black-6">
                    Auto Component Distributor...
                  </h2>
                  <div className="flex items-center gap-2 pb-2">
                    <p className="font-medium text-xs text-light-black-4">
                      Sale Amount:
                    </p>
                    <p className="text-light-green font-normal text-xs">
                      NGN{" "}
                      <span className="font-bold text-xl leading-6">
                        400,000
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Requests
                        </span>
                      </div>
                    </div>
                    <div className="custom-separator"></div>
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Clicks
                        </span>
                      </div>
                    </div>
                    <div className="custom-separator"></div>
                    <div className="flex items-center gap-1">
                      <div className="bg-light-green-1 border border-light-green-1 rounded-full p-[5px] w-8 h-8">
                        <LocationIcon />
                      </div>
                      <div className="font-medium text-base text-light-black-5">
                        0{" "}
                        <span className="font-normal text-xs text-light-black-4">
                          Likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default DraftCard;
