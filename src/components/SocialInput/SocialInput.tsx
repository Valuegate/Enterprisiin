"use client";
import { ReactNode, FC } from "react";

interface iSocialInput {
  label: ReactNode;
  placeholderValue: ReactNode;
  id: ReactNode;
}

const SocialInput: FC<iSocialInput> = ({ label, placeholderValue, id }) => {
  return (
    <>
      <label
        className="semi-3 md:text-[14px] md:leading-[22.4px]"
        htmlFor="text"
      >
        {label}
      </label>
      <input
        type="text"
        id={id as string}
        placeholder={placeholderValue as string}
        className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-input-color placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px]  rounded w-full"
      />
    </>
  );
};

export default SocialInput;
