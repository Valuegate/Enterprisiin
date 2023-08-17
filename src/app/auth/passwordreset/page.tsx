import PasswordInput from "@/public/components/PasswordInput/PasswordInput";

const PasswordReset = () => {
  return (
    <>
      <div className="m-auto px-24 pt-36">
        <h1 className="font-bold text-3xl pb-4">Reset Password</h1>
        <p className="text-base font-medium text-light-black-4 pb-4">
          Choose your best fit from the options provided below
        </p>

        <div className="mb-4">
          <PasswordInput label={"New Password"} />
        </div>
        <div>
          <PasswordInput label={"Confirm Password"} />
        </div>

        <div className="mt-12">
          <button
            type="submit"
            className="border-r-amber-400 bg-green rounded-md w-full h-12 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
