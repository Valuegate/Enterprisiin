import { InfoIcon } from "@/public/icons";
import Image from "next/image";
import { ReactNode, FC } from "react";
import Cloud from "@/public/assets/Frame 35643.png"

interface iDashboardCard {
    heading: string;
    amount: string;
    date: string;
    // img.src: boolean;
  }

const DashboardCard: FC<iDashboardCard> = ({ heading, amount, date}) => {
    return ( 
        <div className="w-80 bg-white rounded-md">
                    <div className="flex justify-between py-4 px-4">
                        <div className="">
                            <p className="text-base font-medium">{heading}</p>
                            <div className="pt-4 text-2xl font-bold pb-2">{amount}</div>
                            <p className="text-xs font-medium text-light-black-4">{date}</p>
                        </div>
                        <div className="">
                            <div className="float-right">
                            <InfoIcon />
                            </div>
                            <div className="pt-8">
                                <Image src={Cloud} alt={""} />
                            </div>
                        </div>
                    </div>
                </div>
     );
}
 
export default DashboardCard;