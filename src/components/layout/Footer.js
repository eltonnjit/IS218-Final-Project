const Footer = () => {
  return (
    <footer className="bg-[#196EEE] text-white p-4 flex flex-col">
      <div className="max-w-screen-2xl m-auto">
        <nav className="pb-5">
          <ul className="flex space-x-4">
            <li className="text-[20px] font-inknut font-medium leading-5 tracking-normal text-center">
              Contact Us-1-800-ballerb
            </li>
            <li className="text-[20px] font-inknut font-medium leading-5 tracking-normal text-center">
              Basketballs
            </li>
            <li className="text-[20px] font-inknut font-medium leading-5 tracking-normal text-center">
              Buy one get one 50%
            </li>
            <li className="text-[20px] font-inknut font-medium leading-5 tracking-normal text-center">
              About Us
            </li>
            <li className="text-[20px] font-inknut font-medium leading-5 tracking-normal text-center">
              MVP Member
            </li>
          </ul>
        </nav>
        <div className="container mx-auto text-center">
          <p>Copyright &copy; {new Date().getFullYear()} Baller Beasts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
