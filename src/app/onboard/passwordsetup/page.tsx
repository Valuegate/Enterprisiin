import NextButton from "@/public/components/NextButton/NextButton";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";

const PasswordSetup = () => {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="onboard-heading">Setup your password</h1>
        <p className="onboard-paragraph">
        Boost your account security in moments by creating a strong and unique password.
        </p>
      </div>
      <div className="mt-12 mb-6 px-96">
        <div className="mb-2">
          <PasswordInput label={"Password"} />
        </div>
        <PasswordInput label={"Confirm Password"} />
      </div>

      <div className="mt-44 px-8">
      <div className="flex justify-between">
        <Link href="../../onboard/companydetails">
            <IBackButton/>
        </Link>
        <Link href="../../onboard/socialmedia">
            <NextButton/>
        </Link>
      </div>
      </div>
    </>
  );
};

export default PasswordSetup;
