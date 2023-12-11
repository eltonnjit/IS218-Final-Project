import Input from "../common/Input";

const Secondsection = () => {
  return (
    <div className="max-w-screen-2xl pt-5 flex flex-row m-auto justify-between p-5">
        <div className="w-[30%]">
            <img src="/images/image 8.png" />
        </div>
        <div className="text-center w-[65%]">
            <p className="font-medium text-[60px] ">MVP Member</p>
            <p className="font-medium text-[30px] pb-10 ">Check out our MVP membership Here for limited time offers!!</p>
            <Input/>
        </div>
    </div>
  );
};

export default Secondsection;
