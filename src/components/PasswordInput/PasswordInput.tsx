"use client"
import { EyeSlashIcon } from "@/public/icons";
import { useState } from "react";
import { ReactNode, FC } from "react";

interface iPasswordInput {
    label: ReactNode;
  }

const PasswordInput: FC<iPasswordInput> = ({ label }) => {

    const [showPassword, setShowPassword] = useState(false);

    return ( 
        <>
        <label className="block text-gray-700 font-medium text-lg" htmlFor="password">
          {label}
        </label>
        <div className="relative">
        <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter password"
            className="placeholder-italic mt-1 p-2 border-none bg-gray-light rounded-md w-full"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <span className="w-6 h-6">&#128065;</span> // Unicode for open eye
            ) : (
              <span><EyeSlashIcon/></span> // Unicode for closed eye
            )}
          </button>

        </div>
        </>
     );
}
 
export default PasswordInput;