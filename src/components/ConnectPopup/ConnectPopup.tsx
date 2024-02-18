import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import * as Form from "@radix-ui/react-form";
import SuccessModal from "../../app/buyerdashboard/successmodal/page";

const ConnectPopup = () => {
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

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title className="title">Connection Request</Modal.Title>
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
              <Form.Root className="">
                <Form.Field className="grid mb-[10px]" name="message">
                  <div className="flex items-baseline justify-between">
                    <Form.Label className="font-semibold text-base text-light-black-5 pb-1">
                      Message
                    </Form.Label>
                    <Form.Message
                      className="font-medium text-xs text-light-black-5 pb-1 opacity-[0.8]"
                      match="valueMissing"
                    >
                      Please write a short note ...
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <textarea
                      placeholder="Write a short note..."
                      className="search pl-4 pt-4 w-full h-[117px] border-none rounded bg-light-black font-medium text-base text-light-black-4 placeholder-italic"
                      required
                    />
                  </Form.Control>
                </Form.Field>

                <div>
                  <label
                    className="flex items-center text-[16px] leading-[32px] font-medium text-light-black-5 mb-4"
                    htmlFor="remember"
                  >
                    <input
                      type="checkbox"
                      id="remember"
                      className="custom mr-2 w-4 h-4"
                    />
                    I agree the Terms & Conditions of this proposal
                  </label>
                </div>

                <div className="">
                  {/* <SuccessModal /> */}
                  <Link href={"../../buyerdashboard/successmodal"}>
                    <button
                      type="submit"
                      className="bg-light-blue w-full h-[40px] rounded flex justify-center items-center font-medium text-base text-white"
                    >
                      Send
                    </button>
                  </Link>
                </div>
              </Form.Root>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Group>
        <button
          onClick={open}
          className="bg-light-blue w-full h-[40px] rounded flex justify-center items-center font-medium text-base text-white"
        >
          Connect
        </button>
      </Group>
    </>
  );
};

export default ConnectPopup;
