import GetStartedCard from "@/public/components/Card/GetStartedCard";
import Button from "@/public/components/Button";
import WT from "../../../assets/Work time-amico 1.png";
import MM from "../../../assets/Manage money-bro 1.png"

const Register = () => {
  return (
    <>
      <div className="m-auto px-24 pt-28">
        <h1 className="font-bold text-3xl pb-4">Get Started</h1>
        <p className="text-base font-medium text-light-black-4 pb-4">
          Choose your best fit from the options provided below
        </p>
        <div>
          <GetStartedCard
                      heading={"I’m a Business Buyer"}
                      paragraph={"Pool Academy Aquatics is an international aquatics club."} imageSrc={WT.src}          />
        </div>

        <div className="pt-4 pb-8">
          <GetStartedCard
                      heading={"I’m a Business Seller"}
                      paragraph={"Pool Academy Aquatics is an international aquatics club."} imageSrc={MM.src}          />
        </div>

        <Button
          type="button"
          className="border-r-amber-400 rounded-md w-full h-12 text-white"
          // disabled={true}
          colorType="primary"
          // loading={load}
        //   handleClick={() => setLoad(!load)}
        >
          Proceed
        </Button>
      </div>
    </>
  );
};

export default Register;
