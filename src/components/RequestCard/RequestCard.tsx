import Image, { StaticImageData } from "next/image";
import PP1 from "@/public/assets/Ellipse 4.png";
import PP2 from "@/public/assets/Ellipse 4 (1).png";
import PP3 from "@/public/assets/Ellipse 4 (2).png";
import PP4 from "@/public/assets/Ellipse 4 (4).png";
import PP5 from "@/public/assets/Ellipse 4 (3).png";
import Link from "next/link";
import { FC } from "react";

interface iRequest {
  image: string | StaticImageData;
  name: string;
  content: string;
  timestamp: string;
}

const RequestCard = () => {
  const requests: iRequest[] = [
    {
      image: PP1,
      content:
        "Paggico is a growing car wash that caters to the every need of your autombiles",
      name: "Adeniji Promise O.",
      timestamp: "Today, 02:45 PM",
    },
    {
      image: PP2,
      content:
        "Paggico is a growing car wash that caters to the every need of your autombiles",
      name: "Adeniji Promise O.",
      timestamp: "Today, 02:45 PM",
    },
    {
      image: PP3,
      content:
        "Paggico is a growing car wash that caters to the every need of your autombiles",
      name: "Adeniji Promise O.",
      timestamp: "Today, 02:45 PM",
    },
    {
      image: PP4,
      content:
        "Paggico is a growing car wash that caters to the every need of your autombiles",
      name: "Adeniji Promise O.",
      timestamp: "Today, 02:45 PM",
    },
    {
      image: PP5,
      content:
        "Paggico is a growing car wash that caters to the every need of your autombiles",
      name: "Adeniji Promise O.",
      timestamp: "Today, 02:45 PM",
    },
  ];

  return (
    <div
      className={`bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm`}
    >
      <div className="flex justify-between px-4 h-[74px] md:h-[70px] items-center border-b-[1.5px] border-contrast-10">
        <h2 className="bold-1 md:text-[20px] md:leading-[30px] text-contrast-100">
          Requests
        </h2>
        <Link href={""}>
          <p className="text-blue-base med-3 md:text-[14px] md:leading-[24px] cursor-pointer">
            View all
          </p>
        </Link>
      </div>

      <div className="px-4 flex flex-col gap-4 py-6">
        {requests.map((request, i) => {
          return (
            <div className="flex gap-3" key={i}>
              <div className="">
                <Image
                  src={request.image}
                  alt={""}
                  className="w-[52px] h-[52px] md:w-[40px] md:h-[40px] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col w-[90%]">
                <h2 className="bold-2 md:text-[16px] md:leading-[28px] text-contrast-100">
                  {request.name}
                </h2>
                <p className="med-3 md:text-[14px] md:leading-[28px] text-contrast-80">
                  {request.content.substring(0, 35)}...
                </p>
                <p className="font-normal md:text-[10px] md:leading-[18px] text-[12px]">
                  {request.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestCard;
