import SocialInput from "@/public/components/SocialInput/SocialInput";

const SocialMedia = () => {
  return (
    <div key={3000}>
      <div className="text-center items-center">
        <h1 className="font-bold text-[36px] leading-[52px] md:text-[20px] md:leading-[30px] md:text-center w-full text-contrast-100">
          Setup your social media
        </h1>
        <p className="med-3 md:text-[14px] md:leading-[24px] font-medium text-contrast-base pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
          Expand your digital footprint by effortlessly connecting your social
          media profiles.
        </p>
      </div>
      <div className="mt-12 mb-6 px-[30%] md:px-0">
        <div className="mb-4">
          <SocialInput
            label={"LinkedIn"}
            placeholderValue={"https://"}
            id={"linkedin"}
          />
        </div>
        <div className="mb-4">
          <SocialInput
            label={"Twitter"}
            placeholderValue={"https://"}
            id={"twitter"}
          />
        </div>
        <div className="">
          <SocialInput
            label={"Facebook"}
            placeholderValue={"https://"}
            id={"facebook"}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
