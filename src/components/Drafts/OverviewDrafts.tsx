import Link from "next/link";
import Auto from "@/public/assets/Rectangle 101.png";
import DraftCard, { iDraft } from "@/public/components/Drafts/DraftCard";

const OverviewDrafts = () => {
  const drafts: iDraft[] = [
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: false,
      description:
        "Paggico is a growing car wash that caters to the every need of your autombiles. Paggico is a growing car wash that caters to the every need of your autombiles",
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      description:
        "Paggico is a growing car wash that caters to the every need of your autombiles. Paggico is a growing car wash that caters to the every need of your autombiles",
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      description:
        "Paggico is a growing car wash that caters to the every need of your autombiles. Paggico is a growing car wash that caters to the every need of your autombiles",
      title: "Auto Component Distribution Company",
    },
    {
      image: Auto,
      price: 400000,
      likes: 0,
      clicks: 0,
      requests: 0,
      active: true,
      description:
        "Paggico is a growing car wash that caters to the every need of your autombiles. Paggico is a growing car wash that caters to the every need of your autombiles",
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
          <p className="text-blue-base med-3 md:text-[14px] md:leading-[24px] cursor-pointer">
            View all
          </p>
        </div>

        <div className="md:px-5 md:flex md:flex-col mt-6">
          {drafts.map((draft, i) => {
            return (
              <DraftCard
                draft={draft}
                showDescription={false}
                key={i}
                onClick={(e) => {}}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OverviewDrafts;
