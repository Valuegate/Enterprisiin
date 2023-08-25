import NextButton from "@/public/components/NextButton/NextButton";
import SocialInput from "@/public/components/SocialInput/SocialInput";
import IBackButton from "@/public/components/iBackButton/IBackButton";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="onboard-heading">Setup your social media</h1>
        <p className="onboard-paragraph">
        Expand your digital footprint by effortlessly connecting your social media profiles.
        </p>
      </div>
      <div className="mt-12 mb-6 px-96">
        <div className="mb-4">
          <SocialInput label={"Linkedin"} placeholderValue={"Https://"} id={"linkedin"} />
        </div>
        <div className="mb-4">
          <SocialInput label={"Twitter"} placeholderValue={"Https://"} id={"twitter"} />
        </div>
        <div className="">
          <SocialInput label={"Facebook"} placeholderValue={"Https://"} id={"facebook"} />
        </div>
      </div>

      <div className="mt-20 px-8">
      <div className="flex justify-between">
            <Link href="../../onboard/passwordsetup">
              <IBackButton />
            </Link>
            <Link href="/">
              <NextButton />
            </Link>
          </div>
      </div>
    </>
  );
};

export default SocialMedia;
