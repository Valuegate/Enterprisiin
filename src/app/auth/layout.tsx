import { ReactNode, FC } from "react";

interface iAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<iAuthLayout> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%] h-full bg-green hidden md:flex">
        <header>
          <h1 className="text-2xl text-white font-semibold pt-4 pl-4">VALUE GATE</h1>
        </header>
      </div>
      <div className="w-full md:w-[50%] h-full bg-white overflow-y-scroll">{children}</div>
    </div>
  );
};

export default AuthLayout;
