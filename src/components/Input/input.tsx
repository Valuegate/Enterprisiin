import { FC, ReactNode } from "react";

interface iInput {
    label: string;
    placeholder: string;
    htmlFor: string;
    id: string;
    name: string;
    type: string;
  }

const Input: FC<iInput> = ({ label, placeholder, htmlFor, id,  name, type }) => {
    return ( 
        <div className="mb-4">
                <label htmlFor={htmlFor} className="block text-base font-semibold text-black">{label}</label>
                <input type={type} id={id} name={name} placeholder={placeholder} className="placeholder-italic mt-1 p-3 border-none bg-input-color rounded w-full" />
            </div>
     );
}
 
export default Input;