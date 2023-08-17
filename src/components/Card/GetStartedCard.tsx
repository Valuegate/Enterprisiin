import Image from "next/image";
import RadioButton from "../RadioButton/RadioButton";
import { ReactNode, FC } from "react";

interface iGetStartedCard {
  heading: ReactNode;
  paragraph: ReactNode;
  imageSrc: string;
}

const GetStartedCard: FC<iGetStartedCard> = ({
  heading,
  paragraph,
  imageSrc,
}) => {
  return (
    <>
    <label>
      <div className="bg-gray-light rounded-md">
        <div className="float-right cursor-pointer pr-6 pt-4">
          <RadioButton />
        </div>
        <div className="flex gap-4 pt-4 pb-4">
          <div className="ml-6 bg-white border border-white rounded-full p-1.5 w-12 h-10">
            <Image
              src={imageSrc}
              alt={"Work time-amico"}
              width={30}
              height={30}
            />
          </div>
          <div className="">
            <h2 className="font-semibold text-lg mb-2">{heading}</h2>
            <p className="font-medium text-light-black-4 text-base leading-8 mb-2">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
      </label>
    </>
  );
};

export default GetStartedCard;
