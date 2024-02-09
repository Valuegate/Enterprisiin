import Input from "@/public/components/Input/input";

const BankSettings = () => {
    return ( 
        <>
        <div className="pl-4">
        <h2 className="text-xl font-semibold text-black pb-4">
          Bank Settings
        </h2>
        <p className="text-base font-medium text-light-black-5 pb-6">
        Input your bank information.
        </p>
        <div className="w-[400px]">
        <Input
          label={"Bank Name"}
          placeholder={""}
          htmlFor={"bank-name"}
          id={"bank-name"}
          name={""}
          type={"text"}
        />
        <Input
          label={"Account Number"}
          placeholder={""}
          htmlFor={"account-number"}
          id={"account-numer"}
          name={""}
          type={"number"}
        />
        <Input
          label={"Account Name"}
          placeholder={""}
          htmlFor={"account-name"}
          id={"account-name"}
          name={""}
          type={"text"}
        />
        
        <div className="pt-6 pb-20">
          <button
            type="submit"
            className="border-r-amber-400 bg-green rounded w-[138px] h-[40px] text-white"
          >
            Save Changes
          </button>
        </div>
        </div>
      </div>
        </>
     );
}
 
export default BankSettings;