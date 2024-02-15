import SocialInput from "@/public/components/SocialInput/SocialInput";

const CompanyDetails = () => {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
          Setup company details
        </h1>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
          Establish your company&apos;s identity effortlessly by providing
          essential details that define your brand.
        </p>
      </div>
      <div className="mt-12 mb-6 px-[30%] md:px-0">
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
    </>
  );
};

export default CompanyDetails;
