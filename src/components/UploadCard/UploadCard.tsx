import { UploadIcon } from "@/public/icons";

const UploadCard = () => {
    return ( 
        <>
        <div className="text-center border-dashed rounded-lg border-black-1 border-2 w-[281px] h-[201px] ">
            <span className="pt-[3rem] flex flex-col px-[0.5rem] gap-2 items-center justify-center">
              <UploadIcon width="16" height="16" color="#313734" />
              <p className="text-[12px] leading-[24px] text-center font-medium text-light-black-5">
              Drag and drop files to upload to your media library. For photos, ise JPG or PNG. For videos, use MP4 or MOV.
              </p>
            </span>
            </div>
        </>
     );
}
 
export default UploadCard;