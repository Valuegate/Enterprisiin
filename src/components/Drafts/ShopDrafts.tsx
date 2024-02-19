import React, {
  useState,
  useRef,
  useEffect,
  FC,
  MouseEventHandler,
} from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DraftCard, { iDraft, iDraftData } from "./DraftCard";

export interface iShopDraftSectionData {
  drafts: iDraft[];
  onSelectDraft: any;
}

const ShopDrafts: FC<iShopDraftSectionData> = ({ drafts, onSelectDraft }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any }) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [sortByFilter, setSortByFilter] = useState<string | null>(null);
  const [filterBy, setFilterBy] = useState<string | null>(null);

  return (
    <>
      <div className="bg-white rounded border-contrast-10 border-[1.5px] w-full shadow-sm">
        <div className="flex md:flex-col md:justify-center md:items-start md:gap-2 justify-between px-4 h-[74px] md:h-[122px] items-center border-b-[1.5px] border-contrast-10">
          <h2 className="bold-1 md:text-[20px] md:leading-[30px] text-contrast-100">
            Drafts
          </h2>
          <div className="flex gap-3 items-center md:justify-between md:w-full">
            <DropdownButton
              title={"Sort by:"}
              value={sortByFilter}
              menus={[
                {
                  name: "Business for sale",
                  onClick: (e) => {
                    setSortByFilter("Business for sale");
                  },
                },
                {
                  name: "Business investment",
                  onClick: (e) => {
                    setSortByFilter("Business investment");
                  },
                },
                {
                  name: "Business loan",
                  onClick: (e) => {
                    setSortByFilter("Business loan");
                  },
                },
                {
                  name: "Asset for sale",
                  onClick: (e) => {
                    setSortByFilter("Asset for sale");
                  },
                },
              ]}
            />
            <DropdownButton
              title={"Filter by:"}
              value={filterBy}
              menus={[
                {
                  name: "Active",
                  onClick: (e) => {
                    setFilterBy("Active");
                  },
                },
                {
                  name: "Archived",
                  onClick: (e) => {
                    setFilterBy("Archived");
                  },
                },
              ]}
            />
          </div>
        </div>

        <div className="px-4 pt-6 pb-2 flex flex-col">
          {drafts.map((draft, i) => {
            return (
              <DraftCard
                draft={draft}
                showDescription={true}
                key={i}
                onClick={(e) => {
                  onSelectDraft(i);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopDrafts;
