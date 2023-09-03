import Image from "next/image";
import PP1 from "@/public/assets/Ellipse 4.png";
import PP2 from "@/public/assets/Ellipse 4 (1).png";
import PP3 from "@/public/assets/Ellipse 4 (2).png";
import PP4 from "@/public/assets/Ellipse 4 (4).png";
import PP5 from "@/public/assets/Ellipse 4 (3).png";
import Link from "next/link";

const RequestCard = () => {
  return (
    <div className="w-80 bg-white rounded">
      <div className="flex justify-between px-4 py-4">
        <h2 className="text-xl text-black font-bold">Requests</h2>
        <Link href={""}>
          <p className="text-base text-gray cursor-pointer">View all</p>
        </Link>
      </div>
      <hr className="mb-4 border-none bg-light-black-1 h-[1px]" />

      <div className="px-4">
        <div className="flex gap-3 pb-4">
          <div className="">
            <Image src={PP1} alt={""} />
          </div>
          <div>
            <h2 className="text-xl text-black font-bold">Adeniji Promise O.</h2>
            <p className="text-sm text-black">
              Paggico is a growing car wash a...
            </p>
            <p className="text-xs text-gray">Today, 02:45 PM</p>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          <div className="">
            <Image src={PP2} alt={""} />
          </div>
          <div>
            <h2 className="text-xl text-black font-bold">Adeniji Promise O.</h2>
            <p className="text-sm text-black">
              Paggico is a growing car wash a...
            </p>
            <p className="text-xs text-gray">Today, 02:45 PM</p>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          <div className="">
            <Image src={PP3} alt={""} />
          </div>
          <div>
            <h2 className="text-xl text-black font-bold">Adeniji Promise O.</h2>
            <p className="text-sm text-black">
              Paggico is a growing car wash a...
            </p>
            <p className="text-xs text-gray">Today, 02:45 PM</p>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          <div className="">
            <Image src={PP4} alt={""} />
          </div>
          <div>
            <h2 className="text-xl text-black font-bold">Adeniji Promise O.</h2>
            <p className="text-sm text-black">
              Paggico is a growing car wash a...
            </p>
            <p className="text-xs text-gray">Today, 02:45 PM</p>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          <div className="">
            <Image src={PP5} alt={""} />
          </div>
          <div>
            <h2 className="text-xl text-black font-bold">Adeniji Promise O.</h2>
            <p className="text-sm text-black">
              Paggico is a growing car wash a...
            </p>
            <p className="text-xs text-gray">Today, 02:45 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
