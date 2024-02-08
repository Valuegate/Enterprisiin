// import Link from "next/link";
import Logo from "@/public/components/Logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, FC } from "react";
import Banner from "@/public/assets/background-image.png";

interface iAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%]">
        <header>
          {/* <Link href={"/"}>
          <Logo />
          </Link> */}
          <div className="mx-4">
            <Image src={Banner} alt={""} className="h-[100vh] w-full py-4 overflow-hidden" />
            {/* <h2 className="text-4xl text-white font-semibold">Discovering the Best <br /> Business for Your Future</h2>
            <p className="text-base text-white-1">Our practice is designing complete environments exceptional buildings communities and place in special situations</p> */}
          </div>
        </header>
      </div>
      <div className="w-[50%] h-full bg-white overflow-y-scroll">{children}</div>
    </div>
  );
};

export default AuthLayout;
