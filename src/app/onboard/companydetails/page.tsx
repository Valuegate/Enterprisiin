import NextButton from "@/public/components/NextButton/NextButton";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";
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

        <div className="mt-[8.5rem]">
        <ProgressBar progress={20} />
      </div>

      <div className="pl-6 top-auto fixed bottom-0 pb-4">
        <div className="flex justify-between">
          <Link href="../../onboard/companydetails">
            <IBackButton />
          </Link>
          <Link href="../../onboard/socialmedia">
            <NextButton />
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default CompanyDetails;
