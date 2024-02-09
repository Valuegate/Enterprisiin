import Logo from "@/public/components/Logo/Logo";
import Link from "next/link";
import { ReactNode, FC } from "react";

interface iOnBoardLayout {
  children: ReactNode;
}

const OnBoardLayout: FC<iOnBoardLayout> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] bg-white">
      <div className="mb-12">
        <nav>
          <Link href="/">
          {/* <h1 className="text-2xl text-green font-semibold pt-4 pl-4">VALUE GATE</h1> */}
          <Logo/>
          </Link>
        </nav>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default OnBoardLayout;