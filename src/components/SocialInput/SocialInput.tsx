"use client"
import { ReactNode, FC } from "react";

interface iSocialInput {
    label: ReactNode;
    placeholderValue: ReactNode;
    id: ReactNode;
  }

const SocialInput: FC<iSocialInput> = ({ label, placeholderValue, id }) => {

    return ( 
        <>
        <label className="block text-gray-700 font-medium text-lg" htmlFor="text">
          {label}
        </label>
        <input
            type="text"
            id={id as string}
            placeholder={placeholderValue as string}
            className="placeholder-italic mt-1 p-2 border-none bg-gray-light w-full rounded-md "
          />
        </>
     );
}
 
export default SocialInput;