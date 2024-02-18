import Image from "next/image";
import { ReactNode, FC } from "react";

import Banner from "@/public/assets/background-image.png";

interface iAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-between bg-background">
      <div className="w-[50vw] block md:hidden">
        <div className="pt-5 relative ml-[40px]">
          <Image
            src={Banner}
            alt="banner"
            className="w-[50vw] h-[95vh] object-fill absolute top-[2.5vh] bottom-[2.5vh] "
          />

          <div className=" z-10 absolute flex flex-col justify-end w-full h-[86vh] text-center px-[20%]">
            <h2 className="text-[40px] leading-[60px] text-white font-semibold">
              Discovering the Best <br /> Business for Your Future
            </h2>
            <p className=" text-white mt-5 med-3">
              Our practice is designing complete environments exceptional
              buildings communities and place in special situations
            </p>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-[65%] mt-12">
                {[0, 1, 2].map((num, i) => {
                  return (
                    <div
                      key={i}
                      className={`${
                        i == 0 ? "bg-white" : "bg-white-20"
                      } w-[30%] h-0.5 rounded-full`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50vw] md:w-full md:px-0 h-full scrollbar-custom overflow-y-scroll flex flex-col md:justify-start justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
