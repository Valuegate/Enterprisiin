import { ArrowRightIcon } from "@/public/icons/arrowright-icon";
import Button from "../Button";

const NextButton = () => {
    return ( 
        <>
        <div className="flex fixed right-6">
          <Button
            type="button"
            className="border-r-amber-400 rounded w-24 h-12 flex justify-center items-center gap-2 font-semibold text-white"
            // disabled={true}
            colorType="primary"
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            Next
            <span>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
        </>
     );
}
 
export default NextButton;