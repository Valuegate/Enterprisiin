import Image from "next/image";
import Upload from "@/public/assets/Ellipse.png";
import Button from "@/public/components/Button";

import { FiUpload } from "react-icons/fi";

const UploadProfilePicture = () => {
  return (
    <div className="text-center items-center" key={1000}>
      <h1 className="font-bold text-[36px] leading-[52px] md:text-[20px] md:leading-[30px] md:text-center w-full text-contrast-100">
        Upload a picture
      </h1>
      <p className="med-3 md:text-[14px] md:leading-[24px] font-medium text-contrast-base pb-4 md:pb-10 md:text-center mt-2 px-[30%] md:px-0">
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
          className="border-r-amber-400 px-4 rounded flex justify-center items-center gap-2 text-blue-base  "
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
