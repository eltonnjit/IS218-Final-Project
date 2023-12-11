const Header = () => {
  const myStyle = {
    customDiv: {
      width: "364px",
      height: "20px",
      top: "-1877px",
      left: "2704px",
    },
  };

  return (
    <header className="bg-gray-0 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div style={myStyle.customDiv}>
          <p className="text-[50px] font-medium text-white leading-5 tracking-normal text-left">
            Baller Beasts
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li className="text-4xl font-inknut font-medium leading-5 tracking-normal text-left">
              Shop
            </li>
            <li className="text-4xl font-inknut font-medium leading-5 tracking-normal text-left">
              About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
