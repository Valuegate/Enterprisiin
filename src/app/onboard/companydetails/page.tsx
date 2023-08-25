import NextButton from "@/public/components/NextButton/NextButton";
import SocialInput from "@/public/components/SocialInput/SocialInput";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";

const CompanyDetails = () => {
  return (
    <>
      <div className="max-h-screen">
        <div className="text-center items-center">
          <h1 className="onboard-heading">Setup company details</h1>
          <p className="onboard-paragraph">
          Establish your company&apos;s identity effortlessly by providing essential details that define your brand.
          </p>
        </div>
        <div className="mt-12 mb-6 px-96">
          <div className="mb-4">
            <SocialInput
              label={"Company Name"}
              placeholderValue={"Enter your company name"}
              id={"name"}
            />
          </div>
          <div className="">
            <SocialInput
              label={"Website (Optional)"}
              placeholderValue={"https://"}
              id={"website"}
            />
          </div>
        </div>

        <div className="mt-40 px-8">
          <div className="flex justify-between">
            <Link href="../../onboard/profileupload">
              <IBackButton />
            </Link>
            <Link href="../../onboard/passwordsetup">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
