import Image from "next/image";
import Upload from "@/public/assets/Ellipse.png";
import Button from "@/public/components/Button";

import { FiUpload } from "react-icons/fi";

const UploadProfilePicture = () => {
  return (
    <div className="text-center items-center" key={1000}>
      <h1 className="font-bold md:text-xl text-3xl md:text-center w-full">
        Upload a picture
      </h1>
      <p className="text-base md:text-sm font-medium text-light-black-4 pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
        Enhance your profile&apos;s identity with a photo upload – let your
        picture speak volumes.
      </p>
      <div className="mt-12 mb-6 flex justify-center">
        <Image
          className="cursor-pointer"
          src={Upload}
          alt={""}
          width={150}
          height={150}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          width="w-auto"
          height="h-10"
          className="border-r-amber-400 px-4 rounded flex justify-center items-center gap-2 font-medium text-light-blue text-base md:text-sm"
          colorType="secondary"
        >
          <FiUpload size={"20px"} />
          Upload Photo
        </Button>
      </div>
    </div>
  );
};

export default UploadProfilePicture;
