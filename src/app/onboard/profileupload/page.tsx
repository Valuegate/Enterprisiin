import Image from "next/image";
import Upload from "../../../assets/Ellipse.png";
import Button from "@/public/components/Button";
import { UploadIcon } from "@/public/icons";
import { ArrowRightIcon } from "@/public/icons/arrowright-icon";
import Link from "next/link";
import ProgressBar from "@/public/components/ProgressBar/ProgressBar";

const ProfileUpload = () => {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="onboard-heading">Upload a picture</h1>
        <p className="onboard-paragraph">
        Enhance your profile&apos;s identity with a photo upload – let your picture speak volumes.
        </p>
        <div className="mt-12 mb-6 flex justify-center">
          <Image className="cursor-pointer" src={Upload} alt={""} width={150} height={150} />
        </div>
        <div className="flex justify-center">
          <Button
            type="button"
            className="border-r-amber-400 rounded w-60 h-12 flex justify-center items-center gap-2 font-semibold text-white"
            // disabled={true}
            colorType="primary"
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            <span><UploadIcon /></span>
            Upload Photo
          </Button>
        </div>
      </div>

      <div className="mt-[5rem]">
        <ProgressBar progress={10} />
      </div>
    
      
      <Link href="../../onboard/companydetails" className="">
      <div className="flex top-auto fixed bottom-0 right-6 pb-4">
          <Button
            type="button"
            className="border-r-amber-400 rounded w-24 h-12 flex justify-center items-center gap-2 font-semibold text-white"
            // disabled={true}
            colorType="primary"
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            Next
            <span><ArrowRightIcon /></span>
          </Button>
        </div>
      </Link>
    </>
  );
};

export default ProfileUpload;
