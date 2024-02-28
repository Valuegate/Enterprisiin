import Image from "next/image";
import Button from "../Button";
import { UploadIcon } from "@/public/icons";
import Upload from "@/public/assets/Ellipse.png";
import Input from "@/public/components/Input/input";
import SocialInput from "@/public/components/SocialInput/SocialInput";
import AlertButtton from "@/public/components/AlertButton/AlertButton";

const AccountSettings = () => {
  return (
    <>
      <div className="px-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          Profile Settings
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          Update your information and manage your account settings.
        </p>
        <div className="mb-4 flex flex-col items-center md:justify-center w-[150px] md:w-full">
          <Image
            className="cursor-pointer"
            src={Upload}
            alt={""}
            width={120}
            height={120}
          />
          <Button
            type="button"
            className="rounded mt-2 px-3 py-2 flex justify-center items-center gap-2 font-medium text-white"
            height="h-10"
            colorType="primary"
          >
            <span>
              <UploadIcon />
            </span>
            Upload Photo
          </Button>
        </div>

        <div className="mt-7 w-[400px] gap-4 md:w-full">
          <Input
            label={"Full Name"}
            placeholder={"Enter your full name"}
            htmlFor={"full-name"}
            id={"full-name"}
            name={"full-name"}
            type={"text"}
          />
          <SocialInput
            label={"Company Name"}
            placeholderValue={"Enter your company name"}
            id={"name"}
          />
          <div className="h-4" />
          <Input
            label={"Official Email"}
            placeholder={"Enter your official email"}
            htmlFor={"email"}
            id={"email"}
            name={"email"}
            type={"email"}
          />
          <SocialInput
            label={"Website (Optional)"}
            placeholderValue={"https://"}
            id={"website"}
          />
          <div className="h-4" />
          <Input
            label={"Phone Number"}
            placeholder={"+234"}
            htmlFor={"phone"}
            id={"phone"}
            name={"phone"}
            type={"tel"}
          />

          <Input
            label={"BVN"}
            placeholder={"0000 0000 0000"}
            htmlFor={"number"}
            id={"number"}
            name={"number"}
            type={"number"}
          />
        </div>
        <button
          type="submit"
          className="mt-8 bg-blue-base rounded w-[138px] h-[40px] text-white"
        >
          Save Changes
        </button>
      </div>

      <div className="my-8 w-full h-[1px] bg-contrast-10" />

      <div className="px-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          Social Media
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          Upload your social media links.
        </p>

        <div className="w-[400px] flex flex-col md:w-full ">
          <SocialInput
            label={"Linkedin"}
            placeholderValue={"Https://"}
            id={"linkedin"}
          />
          <div className="h-4" />
          <SocialInput
            label={"Twitter"}
            placeholderValue={"Https://"}
            id={"twitter"}
          />
          <div className="h-4" />
          <SocialInput
            label={"Facebook"}
            placeholderValue={"Https://"}
            id={"facebook"}
          />
        </div>
        <div className="pt-6 pb-4">
          <button
            type="submit"
            className="border-r-amber-400 bg-blue-base rounded w-[138px] h-[40px] text-white"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="my-8 w-full h-[1px] bg-contrast-10" />

      <div className="px-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          Delete Account
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          Deactivate and delete your account.
        </p>

        <div className="pt-2 pb-4">
          <AlertButtton />
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
