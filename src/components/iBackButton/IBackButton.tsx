import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import Button from "../Button";

const IBackButton = () => {
    return ( 
        <>
        <div className="flex">
          <Button
            type="button"
            className="border-r-amber-400 text-blue-base rounded w-24 h-12 flex justify-center items-center gap-2 font-semibold text-green"
            // disabled={true}
            colorType="secondary"
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            <span>
              <ArrowLeftIcon color="#3399FF" />
            </span>
            Back
          </Button>
        </div>
        </>
     );
}
 
export default IBackButton;