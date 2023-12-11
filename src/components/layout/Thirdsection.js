import Button from "../common/Button";
import ShopButton from "../common/ShopButton";

const Thirdsection = () => {
  return (
    <div className="pt-5 max-w-screen-2xl m-auto pb-10">
      <div className="max-w-screen-2xl flex flex-row m-auto justify-between p-5 border divide-dotted">
        <div className="w-[30%]">
          <img src="/images/img_20231209.jpg" />
        </div>
        <div className="text-center w-[65%]">
          <p className="font-medium text-[30px]">
            For Every Basketball Purchased, $1 Donated to the Lebron James
            Foundation!
          </p>
          <p className="font-medium text-[30px] pb-10">
            Shop for a good cause!
          </p>
          <ShopButton />
        </div>
      </div>
      <div className="flex flex-row justify-between pt-5">
        <div className="border divide-dotted flex flex-row w-[48%] p-5">
          <div className="w-[43%]">
            <img src="/images/image 5.png" />
          </div>
          <div className="text-center w-[55%]">
            <p className="font-medium text-[25px] pb-5">
              Buy your first basketball get 50% off your purchase!
            </p>
            <Button />
          </div>
        </div>
        <div className="border divide-dotted flex flex-row w-[48%] p-5">
          <div className="w-[43%]">
            <img src="/images/image 7.png" />
          </div>
          <div className="text-center w-[55%]">
            <p className="font-medium text-[25px] pb-5">
              Exclusive NBA In Szn Tournament Basketballs Are Here!
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
