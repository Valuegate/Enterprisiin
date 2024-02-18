import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";
import { BiFilter } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import FilterSelect from "../FilterSelect/FilterSelect";
import { RangeSlider } from "@mantine/core";

const Filters = () => {
  const [opened, { open, close }] = useDisclosure(false);

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

  function valueLabelFormat(value: number) {
    const units = ["", "0000", "M"];

    const unitIndex = Math.min(2, Math.floor(Math.log10(value) / 2));

    const scaledValue = value / Math.pow(1000, unitIndex);

    return `NGN${scaledValue.toFixed(2)} ${units[unitIndex]}`;
  }


  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title className="title">Filters</Modal.Title>
            <Modal.CloseButton className="close" />
          </Modal.Header>
          <Modal.Body>
            <p className="font-medium text-base text-light-black-5 pb-4">
              Buy, Invest and Loan businesses as much as you can
            </p>
            <div>
              <p className="font-semibold text-base text-light-black-5 pb-1">
                Business Types
              </p>
              <div
                className="relative inline-block text-center w-full z-50"
                ref={dropdownRef}
              >
                <button
                  className="flex justify-between pl-4 items-center w-full h-[40px] border-none rounded bg-light-black text-center text-base"
                  onClick={handleButtonClick}
                >
                  Business for Sale
                  <span>
                    <MdOutlineArrowDropDown
                      className={`w-8 h-8 fill-current ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[320px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-2 px-2 text-left"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        All
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Business for Sale
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Business Investment
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Business Loan
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-light-blue hover:text-white hover:rounded"
                        role="menuitem"
                      >
                        Asset for Sale
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 relative z-40">
              <FilterSelect
                option1={"Nigeria"}
                option2={"Russia"}
                option3={"China"}
                option4={"United State"}
                label={"Country"}
                placeholder={"Select"}
              />
            </div>

            <div className="pt-4 relative z-30">
              <FilterSelect
                option1={"Oyo"}
                option2={"Osun"}
                option3={"Ogun"}
                option4={"Lagos"}
                label={"State"}
                placeholder={"Select"}
              />
            </div>

            <div className="pt-4 relative z-20">
              <FilterSelect
                option1={"Building & Construction"}
                option2={"Business Services"}
                option3={"Education"}
                option4={"Food & Beverages"}
                label={"Industries"}
                placeholder={"Select"}
              />
            </div>

            <div className="pt-4 relative z-10">
              <p className="font-semibold text-base text-light-black-5 pb-8">
                Amount Range
              </p>
              <RangeSlider
              color="#3399FF"
                py="xl"
                scale={(v) => 2 ** v}
                step={1}
                min={2}
                max={30}
                labelAlwaysOn
                defaultValue={[10, 20]}
                label={valueLabelFormat}
              />
            </div>

            <div className="pb-4">
            <hr className="border-none bg-light-black-1 h-[1px] w-full" />
            </div>

            <div className="flex justify-between">
                <button className="w-[193px] h-[40px] bg-light-blue-1 flex items-center rounded justify-center text-light-blue text-base">Restart</button>
                <button className="w-[193px] h-[40px] bg-light-blue flex items-center rounded justify-center text-white text-base">Apply</button>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Group>
        <button
          onClick={open}
          className="rounded w-[124px] h-[40px] items-center text-white font-medium text-base bg-light-blue flex justify-center gap-1 "
        >
          <BiFilter className="w-[24px] h-[24px] text-white" />
          Filters
        </button>
      </Group>
    </>
  );
};

export default Filters;
