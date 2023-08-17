"use client"
import Button from "@/public/components/Button";
import InputField from "@/public/components/Input/input";
import { GoogleIcon } from "@/public/icons";
// import { Link } from 'next/link';
// import Link from "next/link";

const CreateAccount = () => {
    return (
        <div className="m-auto px-24 pt-24">
            <h1 className="font-bold text-3xl pb-4">Create Account</h1>
            <p className="text-base font-medium text-lightblack pb-4">
            Choose your best fit from the options provided below
            </p>
            <InputField />

        <div className="text-center font-base text-xl pt-4 pb-4">OR</div>

        <Button
          type="button"
          className="border-r-amber-400 rounded-md w-full h-12 flex justify-center items-center gap-4 font-semibold"
          // disabled={true}
          colorType="secondary"
          // loading={load}
        //   handleClick={() => setLoad(!load)}
        >
            <span><GoogleIcon /></span>
          Create with Google
        </Button>

        <div className="flex justify-center gap-1 pt-8 pb-12">
            <h1 className="text-center font-semibold text-l">Already have an account?</h1>
            <a href='../../auth/login'><h1 className="text-center font-semibold text-l text-green">Login</h1></a>
        </div>
        </div>
    )
  };
  
  export default CreateAccount;