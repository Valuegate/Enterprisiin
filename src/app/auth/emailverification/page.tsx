import Verification from "@/public/components/Verification/page";
import Image from "next/image";
import Verify from "../../../assets/Screenshot 2023-07-28 at 12.31 1.png"

const EmailVerification = () => {
  return (
    <>
      <div className="m-auto px-24 pt-24">
        <h1 className="font-bold text-3xl pb-2">Account Verification</h1>
        <p className="text-base font-medium text-light-black-4 pb-2">
        We&apos;ve just sent you an email with a link to activate your email account <span className="font-bold">ajeigbetaiwomatthew@gmail.com</span> provided
        </p>

        <div className="flex justify-center">
            <Image src={Verify} alt={""} />
        </div>
            <p className="text-center pt-2 text-light-black-4 text-base">Didn’t get email?</p>
            <div className="mt-8">
                <button type="submit" className="border-r-amber-400 bg-green rounded-md w-full h-12 text-white">Resend</button>
            </div>
      </div>
    </>
  );
};

export default EmailVerification;
