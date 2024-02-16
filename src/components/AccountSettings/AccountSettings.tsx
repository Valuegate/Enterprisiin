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
    <div className="pl-4">
      <h2 className="text-xl font-semibold text-black pb-4">
        Profile Settings
      </h2>
      <p className="text-base font-medium text-light-black-5 pb-6">
        Update your information and manage your account settings.
      </p>
      <div className="mb-4 ml-4">
        <Image
          className="cursor-pointer"
          src={Upload}
          alt={""}
          width={120}
          height={120}
        />
      </div>
      <div className="">
        <Button
          type="button"
          className="border-r-amber-400 rounded w-[153px] h-[40px] flex justify-center items-center gap-2 font-semibold text-white"
          // disabled={true}
          colorType="primary"
          // loading={load}
          //   handleClick={() => setLoad(!load)}
        >
          <span>
            <UploadIcon />
          </span>
          Upload Photo
        </Button>
      </div>

      <div className="pt-4 w-[400px]">
        <Input
          label={"Full Name"}
          placeholder={"Enter your full name"}
          htmlFor={"full-name"}
          id={"full-name"}
          name={"full-name"}
          type={"text"}
        />
        {/* <Input label={"Company Name"} placeholder={"Enter your company name"} htmlFor={"company-name"} id={"company-name"} name={"company-name"} type={"text"} /> */}
        <div className="mb-4">
          <SocialInput
            label={"Company Name"}
            placeholderValue={"Enter your company name"}
            id={"name"}
          />
        </div>
        <Input
          label={"Official Email"}
          placeholder={"Enter your official email"}
          htmlFor={"email"}
          id={"email"}
          name={"email"}
          type={"email"}
        />
        <div className="mb-4">
          <SocialInput
            label={"Website (Optional)"}
            placeholderValue={"https://"}
            id={"website"}
          />
        </div>
        <Input
          label={"Phone Number"}
          placeholder={"+234"}
          htmlFor={"phone"}
          id={"phone"}
          name={"phone"}
          type={"tel"}
        />

        <div className="pt-2 pb-4">
          <button
            type="submit"
            className="border-r-amber-400 bg-light-blue rounded w-[138px] h-[40px] text-white"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <div className="py-6">
    <hr className="border-none bg-light-black-1 h-[1px] w-full" />
    </div>

    <div className="pl-4">
      <h2 className="text-xl font-semibold text-black pb-4">
      Social Media
      </h2>
      <p className="text-base font-medium text-light-black-5 pb-6">
      Upload your social media links.
      </p>
      <div className="w-[400px]">
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
      <div className="pt-6 pb-4">
          <button
            type="submit"
            className="border-r-amber-400 bg-light-blue rounded w-[138px] h-[40px] text-white"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="py-6">
    <hr className="border-none bg-light-black-1 h-[1px] w-full" />
    </div>

    <div className="pl-4">
      <h2 className="text-xl font-semibold text-black pb-4">
      Delete Account
      </h2>
      <p className="text-base font-medium text-light-black-5 pb-6">
      Deactivate and delete your account.
      </p>
      <div className="pt-2 pb-10">
          <AlertButtton />
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
