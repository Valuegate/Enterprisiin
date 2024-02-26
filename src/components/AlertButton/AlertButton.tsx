import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import Ask from "@/public/assets/ask.png"

const AlertButton = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          type="submit"
          className="border-r-amber-400 bg-error rounded w-[147px] h-[40px] text-white"
        >
          Delete Account
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="flex flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[45px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <div className="">
                <Image src={Ask} alt={""} />
            </div>
          <AlertDialog.Title className="text-light-green-17 font-bold mt-4 mb-4 text-[24px] leading-9">
          Do you want to delete account?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-center text-light-black-5 font-medium text-base mb-10">
          We hate to see you go, are you sure you want to delete your account?
          </AlertDialog.Description>
          <div className="flex gap-[25px] pb-4">
            <AlertDialog.Cancel asChild>
            <button
            type="submit"
            className="border-none bg-blue-10 font-medium text-base rounded w-[132px] h-[40px] text-blue-base"
          >
            Cancel
          </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                type="submit"
                className="border-none bg-blue-base font-medium text-base rounded w-[132px] h-[40px] text-white"
              >
                Yes, delete
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertButton;
