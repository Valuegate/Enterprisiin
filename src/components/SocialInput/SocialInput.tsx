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
        <label className="block text-black font-semibold text-base" htmlFor="text">
          {label}
        </label>
        <input
            type="text"
            id={id as string}
            placeholder={placeholderValue as string}
            className="placeholder-italic mt-1 p-3 border-none bg-white-1 w-full rounded "
          />
        </>
     );
}
 
export default SocialInput;