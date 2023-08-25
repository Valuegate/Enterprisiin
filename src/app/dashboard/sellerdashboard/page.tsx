import { InfoIcon } from "@/public/icons";
import Image from "next/image";
import Cloud from "../../../assets/Frame 35643.png"
import DashboardCard from "@/public/components/DashboardCard/DashboardCard";
import { Charts } from "@/public/components/Charts/Charts";

const SellerDashboard = () => {
    return ( 
        <>
        <div className="px-6 pt-4">
            <h2 className="text-2xl font-bold text-black">Overview</h2>
            <div className="flex justify-between pt-4">
            <div className="w-80 bg-white rounded-md">
                    <div className="flex justify-between py-4 px-4">
                        <div className="">
                            <p className="text-base font-medium">Total Balance</p>
                            <div className="pt-4 text-2xl font-bold pb-2">₦400,000</div>
                            <p className="text-xs font-medium text-light-black-4">31/04/2023 last withdraw</p>
                        </div>
                        <div className="">
                            <div className="float-right">
                            <InfoIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <DashboardCard heading={"Total Sold Businesses"} amount={"₦400,000"} date={"09 businesses"} />
                <DashboardCard heading={"Buyer Requests"} amount={"02"} date={"31/04/2023"} />

            </div>

            <div className="flex pt-4">
                <div>
                    <Charts />
                </div>
                <div></div>
            </div>
        </div>
        </>
     );
}
 
export default SellerDashboard;