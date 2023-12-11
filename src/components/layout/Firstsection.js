import Button from "../common/Button";

const Firstsection = () => {
  const myStyle = {
    customDiv: {
      width: "364px",
      height: "20px",
      top: "-1877px",
      left: "2704px",
    },
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-between relative">
          <img src="/images/image.png" className=" w-full h-auto" />
        <div className="w-full h-full flex flex-col justify-between absolute top-0 left-0">
          <div className="pt-5 h-full w-full">
            <header className="bg-gray-0 text-white p-4">
              <div className="container mx-auto flex justify-between items-center">
                <div style={myStyle.customDiv}>
                  <p className=" sm:text-[20px] md:text-[32px] lg:text-[40px] xl:text-[50px] font-medium text-white tracking-normal text-left">
                    Baller Beasts
                  </p>
                </div>
                <nav>
                  <ul className="flex space-x-4">
                    <li className="sm:text-[18px] md:text-[30px] lg:text-[35px] xl:text-[45px] font-inknut font-medium tracking-normal text-left">
                      Shop
                    </li>
                    <li className="sm:text-[18px] md:text-[30px] lg:text-[35px] xl:text-[45px] font-inknut font-medium tracking-normal text-left">
                      About
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <div className="flex justify-center gap-[32px] p-[40px]">
            <div className="p-3">
              <p className="sm:text-[18px] md:text-[25px] lg:text-[35px] xl:text-[43px] font-inknut text-white font-medium tracking-normal text-left">
                “To be the best, you have to work the best”
              </p>
              <p className="sm:text-[18px] md:text-[20px] lg:text-[35px] xl:text-[45px] font-inknut text-white font-medium tracking-normal text-center">
                “Luka Doncic”
              </p>
            </div>

            <div className="pl-5 pt-3">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
