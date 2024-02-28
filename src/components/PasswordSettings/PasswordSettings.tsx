import Input from "@/public/components/Input/input";

const PasswordSettings = () => {
  return (
    <>
      <div className="px-4">
        <h2 className="text-[20px] md:text-[16px] leading-[36px] md:leading-[24px] font-bold text-contrast-100">
          Password Settings
        </h2>
        <p className="med-3 md:text-[14px] md:leading-[24px] text-contrast-base mb-5 mt-2">
          Update your password settings
        </p>

        <div className="w-[400px] flex flex-col md:w-full">
          <Input
            label={"Current Password"}
            placeholder={""}
            htmlFor={"password"}
            id={"password"}
            name={""}
            type={"text"}
          />
          <Input
            label={"New Password"}
            placeholder={""}
            htmlFor={"password"}
            id={"password"}
            name={""}
            type={"text"}
          />
          <Input
            label={"Confirm Password"}
            placeholder={""}
            htmlFor={"password"}
            id={"password"}
            name={""}
            type={"text"}
          />

          <div className="pt-6 pb-20">
            <button
              type="submit"
              className="border-r-amber-400 bg-blue-base rounded w-[138px] h-[40px] text-white"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordSettings;
