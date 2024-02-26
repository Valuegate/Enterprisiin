import { HealthIcon, LocationIcon, LoveIcon, MarketplaceIcon } from "@/public/icons";
import Image from "next/image";
import Image1 from "@/public/assets/Rectangle 106.png";
import Image2 from "@/public/assets/Rectangle 106 (1).png";
import Link from "next/link";

const MarketplaceCard = () => {
    return ( 
        <>
        <div>
          <div className="flex justify-between gap-6">
            <div className="rounded bg-gray-light-1 shadow-md ">
              <div className="px-[18px] py-[18px]">
                <div className="relative z-10">
                <Image src={Image1} alt={""} />
                <span className="absolute top-[25px] right-[5rem] bg-light-black w-[33px] h-[33px] flex justify-center items-center  rounded-full">
                  <LoveIcon color="#ADAFAE" />
                </span>
                </div>
                <p className="font-bold text-sm text-light-green-17 pt-1">Aquatics and Sport Coaching Opportunity</p>
                <div className="flex gap-4 pt-1">
                    <div className="flex gap-1">
                        <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <LocationIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Lagos, Nigeria.</p>
                    </div>
                    <div className="flex gap-1">
                    <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <HealthIcon color="#292D32" width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Bakery</p>
                    </div>
                </div>
                <p className="pt-1 font-medium text-base text-light-black-5">Pool Academy Aquatics is an international aquatics club...</p>
              <div className="flex justify-between pt-1 pb-4 items-center">
              <div className="flex items-center text-light-green font-normal gap-1 text-xs">
                    NGN{" "}
                    <span className="font-bold text-xl leading-6">400 M</span>
                  </div>
                  <div>
                    <button className="rounded-[40px] w-[63px] h-[26px] items-center text-[#C39E53] font-medium text-xs bg-[#FBF2E0] flex justify-center">For Sale</button>
                  </div>
              </div>

              <Link href={"../../buyerdashboard/expandablemarket"}>
              <button className="rounded bg-light-blue-1 text-blue-base hover:bg-light-blue hover:text-white text-base w-full h-[32px] font-medium">Connect</button>
              </Link>
              </div>
            </div>

            <div className="rounded bg-gray-light-1 shadow-md ">
              <div className="px-[18px] py-[18px]">
                <div className="">
                <Image src={Image2} alt={""} />
                </div>
                <p className="font-bold text-sm text-light-green-17 pt-1">Aquatics and Sport Coaching Opportunity</p>
                <div className="flex gap-4 pt-1">
                    <div className="flex gap-1">
                        <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <LocationIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Lagos, Nigeria.</p>
                    </div>
                    <div className="flex gap-1">
                    <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <HealthIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Bakery</p>
                    </div>
                </div>
                <p className="pt-1 font-medium text-base text-light-black-5">Pool Academy Aquatics is an international aquatics club...</p>
              <div className="flex justify-between pt-1 pb-4 items-center">
              <div className="flex items-center text-light-green font-normal gap-1 text-xs">
                    NGN{" "}
                    <span className="font-bold text-xl leading-6">400 M</span>
                  </div>
                  <div>
                    <button className="rounded-[40px] w-[97px] h-[26px] items-center text-[#C39E53] font-medium text-xs bg-[#FBF2E0] flex justify-center">Required Loan</button>
                  </div>
              </div>

              <button className="rounded bg-light-blue-1 text-blue-base hover:bg-light-blue hover:text-white text-base w-full h-[32px] font-medium">Connect</button>
              </div>
            </div>

            <div className="rounded bg-gray-light-1 shadow-md ">
              <div className="px-[18px] py-[18px]">
                <div className="relative  z-10">
                <Image src={Image1} alt={""} />
                <span className="absolute top-[25px] right-[5rem] bg-light-yellow-3 w-[33px] h-[33px] flex justify-center items-center  rounded-full">
                  <LoveIcon />
                </span>
                </div>
                <p className="font-bold text-sm text-light-green-17 pt-1">Aquatics and Sport Coaching Opportunity</p>
                <div className="flex gap-4 pt-1">
                    <div className="flex gap-1">
                        <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <LocationIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Lagos, Nigeria.</p>
                    </div>
                    <div className="flex gap-1">
                    <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <HealthIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Bakery</p>
                    </div>
                </div>
                <p className="pt-1 font-medium text-base text-light-black-5">Pool Academy Aquatics is an international aquatics club...</p>
              <div className="flex justify-between pt-1 pb-4 items-center">
              <div className="flex items-center text-light-green font-normal gap-1 text-xs">
                    NGN{" "}
                    <span className="font-bold text-xl leading-6">400 M</span>
                  </div>
                  <div>
                    <button className="rounded-[40px] w-[96px] h-[26px] items-center text-[#C39E53] font-medium text-xs bg-[#FBF2E0] flex justify-center">Asset for Sale</button>
                  </div>
              </div>
              <button className="rounded bg-light-blue-1 text-blue-base hover:bg-light-blue hover:text-white text-base w-full h-[32px] font-medium">Connect</button>
              </div>
            </div>

            <div className="rounded bg-gray-light-1 shadow-md ">
              <div className="px-[18px] py-[18px]">
                <div className="">
                <Image src={Image2} alt={""} />
                </div>
                <p className="font-bold text-sm text-light-green-17 pt-1">Aquatics and Sport Coaching Opportunity</p>
                <div className="flex gap-4 pt-1">
                    <div className="flex gap-1">
                        <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <LocationIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Lagos, Nigeria.</p>
                    </div>
                    <div className="flex gap-1">
                    <div className="rounded-full bg-light-green-1 w-[15px] h-[15px] flex justify-center items-center">
                        <HealthIcon width="9" height="9"/>
                        </div>
                        <p className="font-medium text-xs text-light-black-4">Bakery</p>
                    </div>
                </div>
                <p className="pt-1 font-medium text-base text-light-black-5">Pool Academy Aquatics is an international aquatics club...</p>
              <div className="flex justify-between pt-1 pb-4 items-center">
              <div className="flex items-center text-light-green font-normal gap-1 text-xs">
                    NGN{" "}
                    <span className="font-bold text-xl leading-6">400 M</span>
                  </div>
                  <div>
                    <button className="rounded-[40px] w-[63px] h-[26px] items-center text-[#C39E53] font-medium text-xs bg-[#FBF2E0] flex justify-center">For Sale</button>
                  </div>
              </div>

              <button className="rounded bg-light-blue-1 text-blue-base hover:bg-light-blue hover:text-white text-base w-full h-[32px] font-medium">Connect</button>
              </div>
            </div>


          </div>
        </div>
        </>
     );
}
 
export default MarketplaceCard;