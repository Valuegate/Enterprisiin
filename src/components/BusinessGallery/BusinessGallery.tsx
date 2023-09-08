import Image from "next/image";
import Image1 from "@/public/assets/Rectangle 103.png"
import Image2 from "@/public/assets/Rectangle 104.png"
import Image3 from "@/public/assets/Rectangle 103 (1).png"
import Image4 from "@/public/assets/Rectangle 104 (1).png"
import Image5 from "@/public/assets/Rectangle 103 (2).png"
import Image6 from "@/public/assets/Rectangle 104 (2).png"

const BusinessGallery = () => {
    return ( 
        <>
        <div className="pl-4 pr-4 pb-10">
            <h2 className="text-base font-bold">Company Pictures</h2>
            <div className="flex justify-between gap-4 pt-4">
                <Image src={Image1} alt={""} />
                <Image src={Image2} alt={""} />
            </div>

            <div className="flex justify-between gap-4 pt-4">
                <Image src={Image3} alt={""} />
                <Image src={Image4} alt={""} />
            </div>

            <div className="flex justify-between gap-4 pt-4">
                <Image src={Image5} alt={""} />
                <Image src={Image6} alt={""} />
            </div>
        </div>
        </>
     );
}
 
export default BusinessGallery;