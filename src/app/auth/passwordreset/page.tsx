import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import Link from "next/link";

const PasswordReset = () => {
  return (
    <>
      <div className="m-auto px-24 pt-36">
        <h1 className="font-bold text-3xl pb-4">Reset Password</h1>
        <p className="text-base font-medium text-light-black-4 pb-4">
        Reset your password and reclaim control
        </p>

        <div className="mb-4">
          <PasswordInput label={"New Password"} />
        </div>
        <div>
          <PasswordInput label={"Confirm Password"} />
        </div>

        <div className="mt-12">
          <Link href="../../onboard/profileupload">
          <button
            type="submit"
            className="border-r-amber-400 bg-green rounded w-full h-12 text-white"
          >
            Login
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
