import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import { SuccessIcon, RejectIcon } from "@/public/icons";
import { BiSolidMessageAltDetail } from "react-icons/bi";

import Pic from "@/public/assets/Ellipse 1.png";

interface Request {
  id: number;
  name: string;
  avatar: string | StaticImageData;
  message: string;
  time: string;
  showIcon: boolean;
  showDetailIcon: boolean;
}

const requests: Request[] = [
  {
    id: 1,
    name: "Adeniji Promise O.",
    avatar: Pic,
    message: "Paggico is a growing car wash a...",
    time: "Today, 02:45 PM",
    showIcon: true,
    showDetailIcon: false,
  },
  {
    id: 2,
    name: "Adeniji Promise O.",
    avatar: Pic,
    message: "Paggico is a growing car wash a...",
    time: "Today, 02:45 PM",
    showIcon: true,
    showDetailIcon: false,
  },
  {
    id: 3,
    name: "Adeniji Promise O.",
    avatar: Pic,
    message: "Paggico is a growing car wash a...",
    time: "Today, 02:45 PM",
    showIcon: true,
    showDetailIcon: false,
  },
  {
    id: 4,
    name: "Adeniji Promise O.",
    avatar: Pic,
    message: "Paggico is a growing car wash a...",
    time: "Today, 02:45 PM",
    showIcon: false,
    showDetailIcon: true,
  },
  { 
    id: 5,
    name: "Adeniji Promise O.",
    avatar: Pic,
    message: "Paggico is a growing car wash a...",
    time: "Today, 02:45 PM",
    showIcon: false,
    showDetailIcon: true,
  },
];

const RequestCard = ({ name, avatar, message, time, showIcon, showDetailIcon }: Request) => (
  <div className="flex gap-3 pb-4">
    <div className="">
      <Image src={avatar} alt={""} width={100} height={100} className="w-[60px] h-[52px]" />
    </div>
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] leading-[30px] text-contrast-70 font-bold">{name}</h2>
        {showIcon && (
          <div className="flex gap-1">
            <SuccessIcon />
            <RejectIcon />
          </div>
        )}
        {showDetailIcon && (
          <div className="flex gap-1">
            <BiSolidMessageAltDetail className="text-blue-base w-[21px] h-[21px]" />
          </div>
        )}
      </div>
      <p className="text-base font-medium text-contrast-base text-black">{message}</p>
      <p className="text-[12px] leading-[18px] font-normal text-contrast-40">{time}</p>
    </div>
  </div>
);

const RequestCardIcon = () => {
  return (
    <div className="bg-white w-full md:border-none md:shadow-none rounded border-contrast-10 border-[1.5px] shadow-sm">
      <div className="pl-4 py-4">
        <h2 className="text-[24px] font-bold leading-[36px] text-contrast-100">Requests</h2>
      </div>
      <hr className="mb-4 border-none bg-contrast-10 h-[1px]" />

      <div className="px-4">
        {requests.map((request) => (
          <RequestCard key={request.id} {...request} />
        ))}
      </div>
    </div>
  );
};

export default RequestCardIcon;