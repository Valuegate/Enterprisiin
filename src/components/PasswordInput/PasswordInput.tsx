"use client";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { ReactNode, FC } from "react";

interface iPasswordInput {
  label: ReactNode;
}

const PasswordInput: FC<iPasswordInput> = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        className="block text-gray-700 pb-1 font-medium text-md"
        htmlFor="password"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="placeholder-italic placeholder:pl-0 p-3 border-none bg-white-1 rounded w-full"
        />
        <button
          className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <IoMdEyeOff size={"20px"} />
          ) : (
            <IoMdEye size={"20px"} />
          )}
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
