"use client";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ChangeEventHandler, useState } from "react";
import { ReactNode, FC } from "react";

interface iPasswordInput {
  label: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const PasswordInput: FC<iPasswordInput> = ({
  label,
  onChange = (val) => {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        className="semi-3 md:text-[14px] md:leading-[22.4px]"
        htmlFor="password"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          onChange={onChange}
          className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-input placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px]  rounded w-full"
        />
        <button
          className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <IoMdEyeOff size={"20px"} fill="#2266AA" />
          ) : (
            <IoMdEye size={"20px"} fill="#2266AA" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
