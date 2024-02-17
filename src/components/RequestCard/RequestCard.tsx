import Image, { StaticImageData } from "next/image";
import PP1 from "@/public/assets/Ellipse 4.png";
import PP2 from "@/public/assets/Ellipse 4 (1).png";
import PP3 from "@/public/assets/Ellipse 4 (2).png";
import PP4 from "@/public/assets/Ellipse 4 (4).png";
import PP5 from "@/public/assets/Ellipse 4 (3).png";
import Link from "next/link";

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
    <div className="w-full bg-white rounded border-border-black border-[1.5px]">
      <div className="flex justify-between px-4 py-4">
        <h2 className="text-xl text-black font-bold">Requests</h2>
        <Link href={""}>
          <p className="text-base text-gray cursor-pointer">View all</p>
        </Link>
      </div>
      <hr className="mb-4 mt-2 border-none bg-light-black-1 h-[1px]" />

      <div className="px-4 flex flex-col gap-4 pb-4">
        {requests.map((request, i) => {
          return (
            <div className="flex gap-3" key={i}>
              <div className="">
                <Image src={request.image} alt={""} />
              </div>
              <div className="flex flex-col w-[90%]">
                <h2 className="text-xl text-black font-bold">{request.name}</h2>
                <p className="text-sm font-medium text-black-80">
                  {request.content.substring(0, 50)}...
                </p>
                <p className="text-xs text-black-40 font-medium">
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
