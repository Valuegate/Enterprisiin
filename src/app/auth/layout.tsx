// import Link from "next/link";
import Logo from "@/public/components/Logo/Logo";
import Image from "next/image";
import { ReactNode, FC } from "react";

import Banner from "@/public/assets/background-image.png";

interface iAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="w-[50%] block md:hidden">
        <div className="pt-5 relative">
          <Image
            src={Banner}
            alt="banner"
            className="w-[100%] h-[95vh] -z-10 object-contain absolute top-[2.5vh]"
          />

          <div className="z-10 flex flex-col justify-end w-full h-[85vh] text-center px-[8vw]">
            <h2 className="text-4xl text-white font-medium">
              Discovering the Best <br /> Business for Your Future
            </h2>
            <p className="text-md md:text-base text-white mt-10 font-medium">
              Our practice is designing complete environments exceptional
              buildings communities and place in special situations
            </p>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-[65%] mt-10">
                {[0, 1, 2].map((num, i) => {
                  return (
                    <div
                      key={i}
                      className={`${
                        i == 0 ? "bg-white" : "bg-white-5"
                      } w-[30%] h-0.5 rounded-full`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] md:w-full md:px-0 h-full bg-white scrollbar-custom overflow-y-scroll flex flex-col md:justify-start justify-center px-[5%]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
