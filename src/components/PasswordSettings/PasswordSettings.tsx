import Input from "../Input/Input"

const PasswordSettings = () => {
  return (
    <>
      <div className="pl-4">
        <h2 className="text-xl font-semibold text-black pb-4">
          Password Settings
        </h2>
        <p className="text-base font-medium text-light-black-5 pb-6">
        Update your password settings
        </p>
        <div className="w-[400px]">
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
            className="border-r-amber-400 bg-green rounded w-[138px] h-[40px] text-white"
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
