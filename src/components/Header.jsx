import { BsBasket3 } from "react-icons/bs";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" shadow">
      <div className="max-w-[1040px] mx-auto p-5  border rounded ">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-2xl font-[900] font-mono text-red-500">
            Lezzet Sepeti
          </Link>
          <div className="flex gap-4 items-center">
            <button className="border border-red-500 py-1 px-3 rounded trasition hover:bg-red-500 hover:text-white text-white">
              Giriş Yap
            </button>
            <button className="text-white bg-red-500  py-1 px-3 rounded trasition  hover:bg-black">
              Kayıt Ol
            </button>
            <Link
              to={"/cart"}
              className="hover:bg-red-100 hover:bg-opacity-15 hover:rounded-full p-3 "
            >
              <BsBasket3 className=" text-yellow-500 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
