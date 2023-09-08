import Image from "next/image";
import Data from "@/public/assets/Rectangle 102.png"
import PDF from "@/public/assets/image 1.png"

const Attachments = () => {
    return ( 
        <>
        <div className="pl-4 pr-4 pb-10">
            <h2 className="text-base font-bold">Documents</h2>

            <div className="pt-4">
                <div className="bg-white-1 w-full border-none rounded" >
                    <div className="flex gap-6 py-6">
                        <div className="pl-6">
                            <Image src={Data} alt={""} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-light-green-9 text-[20px] leading-[32px] pb-1">Company Financial Status</h2>
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-1 items-center">
                                <Image src={PDF} alt={""} />
                                <p className="font-medium text-base text-light-black-5">PDF</p>
                                </div>
                                <p className="font-medium text-base text-light-black-5">60 pages <span className="font-normal text-light-black-4 text-[12px] leading-[24px]">(289KB)</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="pt-4">
                <div className="bg-white-1 w-full border-none rounded" >
                    <div className="flex gap-6 py-6">
                        <div className="pl-6">
                            <Image src={Data} alt={""} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-light-green-9 text-[20px] leading-[32px] pb-1">Company Financial Status</h2>
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-1 items-center">
                                <Image src={PDF} alt={""} />
                                <p className="font-medium text-base text-light-black-5">PDF</p>
                                </div>
                                <p className="font-medium text-base text-light-black-5">60 pages <span className="font-normal text-light-black-4 text-[12px] leading-[24px]">(289KB)</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="pt-4">
                <div className="bg-white-1 w-full border-none rounded" >
                    <div className="flex gap-6 py-6">
                        <div className="pl-6">
                            <Image src={Data} alt={""} />
                        </div>
                        <div>
                            <h2 className="font-semibold text-light-green-9 text-[20px] leading-[32px] pb-1">Company Financial Status</h2>
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-1 items-center">
                                <Image src={PDF} alt={""} />
                                <p className="font-medium text-base text-light-black-5">PDF</p>
                                </div>
                                <p className="font-medium text-base text-light-black-5">60 pages <span className="font-normal text-light-black-4 text-[12px] leading-[24px]">(289KB)</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </>
     );
}
 
export default Attachments;