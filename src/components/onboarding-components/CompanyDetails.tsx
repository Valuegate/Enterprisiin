import SocialInput from "@/public/components/SocialInput/SocialInput";

const CompanyDetails = () => {
  return (
    <div key={2000}>
      <div className="text-center items-center">
        <h1 className="font-bold text-[36px] leading-[52px] md:text-[20px] md:leading-[30px] md:text-center w-full text-contrast-100">
          Setup company details
        </h1>
        <p className="med-3 md:text-[14px] md:leading-[24px] font-medium text-contrast-base pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
          Establish your company&apos;s identity effortlessly by providing
          essential details that define your brand.
        </p>
      </div>
      <div className="mt-12 md:mt-0 mb-6 px-[30%] md:px-0">
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
    </div>
  );
};

export default CompanyDetails;
