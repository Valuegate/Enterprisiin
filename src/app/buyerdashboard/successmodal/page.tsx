import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import SuccessMark from "@/public/assets/Vector (4).png";
import Link from "next/link";

const SuccessModal = () => {
  return (
    // <AlertDialog.Root>
    //   <AlertDialog.Trigger asChild>
    //     {/* <Link>
    //     <button
    //       type="submit"
    //       className="bg-green w-full h-[40px] rounded flex justify-center items-center font-medium text-base text-white"
    //     >
    //       Send
    //     </button>
    //     </Link> */}
    //   </AlertDialog.Trigger>
    //   <AlertDialog.Portal>
    //     <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
    //     <AlertDialog.Content className="flex flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[45px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
    //       <div className="">
    //         <Image src={SuccessMark} alt={""} />
    //       </div>
    //       <AlertDialog.Title className="text-light-green-17 font-bold mt-4 mb-4 text-[24px] leading-9">
    //         Do you want to delete account?
    //       </AlertDialog.Title>
    //       <AlertDialog.Description className="text-center text-light-black-5 font-medium text-base mb-10">
    //         We hate to see you go, are you sure you want to delete your account?
    //       </AlertDialog.Description>
    //       <div className="flex gap-[25px] pb-4">
    //         <AlertDialog.Cancel asChild>
    //           <button
    //             type="submit"
    //             className="border-none bg-light-green-2 font-medium text-base rounded w-[132px] h-[40px] text-light-green-9"
    //           >
    //             Cancel
    //           </button>
    //         </AlertDialog.Cancel>
    //         <AlertDialog.Action asChild>
    //           <button
    //             type="submit"
    //             className="border-none bg-green font-medium text-base rounded w-[132px] h-[40px] text-white"
    //           >
    //             Yes, delete
    //           </button>
    //         </AlertDialog.Action>
    //       </div>
    //     </AlertDialog.Content>
    //   </AlertDialog.Portal>
    // </AlertDialog.Root>
    <>
      <div className="flex justify-center items-center text-center mt-20">
        <div className="bg-white w-[514px] rounded">
          <div className="pt-10 flex justify-center items-center">
            <Image src={SuccessMark} alt={""} />
          </div>
          <h2 className="font-bold text-[24px] leading-[36px] text-black pb-4">Successfully Sent!</h2>
          <p className="px-20 font-medium text-base text-light-black-5 pb-8">Buy, Invest and Loan businesses as much as you can Buy, Invest and Loan businesses as much as you can</p>
          <div className="pb-10">
          <Link href={"../../buyerdashboard/marketplace"}>
            <button className="bg-green font-medium text-base text-white w-[178px] h-[40px] rounded">
            Okay, thanks
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
