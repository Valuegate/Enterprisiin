import Image from "next/image";
import { FcCheckmark } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import ProfilePics from "@/public/assets/Ellipse 4 (5).png";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/public/icons";
import Button from "../Button";
import ConnectPopup from "../ConnectPopup/ConnectPopup";

const AccountCard = () => {
  return (
    <>
      <div className="w-80 bg-white rounded">
        <div className="flex justify-end pr-4 pt-4 pb-4">
          <button className="flex gap-1 justify-center items-center w-[94px] h-[29px] rounded-[40px] bg-light-green-21 font-normal text-[14px] leading-[21px] text-light-green">
            <FcCheckmark />
            Verified
          </button>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <Image src={ProfilePics} alt={""} />
          <h2 className="font-bold text-[20px] leading-[30px] text-light-green-17 py-2">
            Oyekunle Qudus
          </h2>
          <p className="text-base font-medium text-light-black-5 pb-2">
            Co-founder
          </p>
          <p className="text-[14px] leading-[21px] font-normal text-light-black-4 pb-2">
            Oyo State, Nigeria.
          </p>
          <div className="flex gap-4 pb-6">
            <div className="bg-white-1 w-[32px] h-[32px] border-none rounded-full flex justify-center items-center">
              <TwitterIcon color="#55acee" />
            </div>
            <div className="bg-white-1 w-[32px] h-[32px] border-none rounded-full flex justify-center items-center">
              <InstagramIcon />
            </div>
            <div className="bg-white-1 w-[32px] h-[32px] border-none rounded-full flex justify-center items-center">
              <BsFacebook color="#55acee" className="w-[20px] h-[20px]" />
            </div>
          </div>

        </div>
          <div className="px-10 pb-14 relative z-10">
            <ConnectPopup />
          </div>
      </div>
    </>
  );
};

export default AccountCard;
