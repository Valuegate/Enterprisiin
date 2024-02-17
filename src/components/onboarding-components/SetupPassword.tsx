import PasswordInput from "@/public/components/PasswordInput/PasswordInput";

const PasswordSetup = () => {
  return (
    <div key={4000}>
      <div className="text-center items-center">
        <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
          Setup your password
        </h1>
        <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
          Boost your account security in moments by creating a strong and unique
          password.
        </p>
      </div>
      <div className="mt-12 md:mt-0 mb-6 px-[30%] md:px-0">
        <div className="mb-2">
          <PasswordInput label={"Password"} onChange={(val) => {}} />
        </div>
        <PasswordInput label={"Confirm Password"} onChange={(val) => {}} />
      </div>
    </div>
  );
};

export default PasswordSetup;
