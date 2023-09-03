import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import Button from "../Button";
import { ArrowRightIcon } from "@/public/icons/arrowright-icon";

const NavigateButton = () => {
  return (
    <>
      <div className="flex justify-between">
        {/* <div className="flex">
          <Button
            type="button"
            className="border-r-amber-400 rounded w-24 h-12 flex justify-center items-center gap-2 font-semibold text-green"
            // disabled={true}
            colorType="secondary"
            // loading={load}
            //   handleClick={() => setLoad(!load)}
          >
            <span>
              <ArrowLeftIcon />
            </span>
            Back
          </Button>
        </div> */}
        {/* <div className="flex">
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
        </div> */}
      </div>
    </>
  );
};

export default NavigateButton;
