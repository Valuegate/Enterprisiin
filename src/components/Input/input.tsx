import { FC, ReactNode } from "react";

interface iInput {
  label: string;
  placeholder: string;
  htmlFor: string;
  id: string;
  name: string;
  type: string;
}

const Input: FC<iInput> = ({ label, placeholder, htmlFor, id, name, type }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="semi-3 md:text-[14px] md:leading-[22.4px]"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="placeholder-italic mt-1 p-3 placeholder:pl-0 border-none bg-input-color placeholder:text-contrast-30 pl:text-[16px] pl:leading-[24px] md:placeholder:text-[14px] md:placeholder:leading-[22.4px] rounded w-full"
      />
    </div>
  );
};

export default Input;
