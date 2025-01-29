import { IoHome } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SideBar = () => {
  const [arrow, setArrow] = useState(false);

  return (
    <div className="flex">
      <div className="w-[25%] p-2 bg-red-500">
        <Link
          to="/dashboard"
          className="flex p-4 w-full bg-red-600 text-xl item-center text-white cursor-pointer"
        >
          <div className="text-white flex">
            <IoHome size={25} className="mr-2" /> Dashboard
          </div>
        </Link>
        <div
          className="flex p-4 w-full bg-red-600 text-xl item-center justify-between text-white cursor-pointer"
          onClick={() => {
            setArrow(!arrow);
          }}
        >
          <div className="flex">
            <FaBox size={25} className="mr-2" /> Product Management
          </div>
          {arrow ? (
            <MdKeyboardArrowDown size={25} />
          ) : (
            <MdKeyboardArrowUp size={25} />
          )}
        </div>
        {arrow && (
          <div className="w-full bg-red-300 p-2">
            <Link
              to="/products"
              className="flex p-3 m-1 w-[95%] rounded-sm text-xl item-center text-white cursor-pointer hover:bg-red-600 focus:bg-red-600"
            >
              <p className="text-white">Products</p>
            </Link>
            <div className="flex p-3 m-1 w-[95%] rounded-sm text-xl item-center text-white cursor-pointer hover:bg-red-600">
              Create Product
            </div>
            <div className="flex p-3 m-1 w-[95%] rounded-sm text-xl item-center text-white cursor-pointer hover:bg-red-600">
              Categories
            </div>
          </div>
        )}
        <div className="flex p-4 w-full bg-red-600 text-xl item-center justify-between text-white cursor-pointer">
          <div className="flex">
            <FaClipboardList size={25} className="mr-2" /> Merchant Management
          </div>
          <MdKeyboardArrowDown size={25} />
        </div>
        <div className="flex p-4 w-full bg-red-600 text-xl item-center justify-between text-white cursor-pointer">
          <div className="flex">
            <FaUsers size={25} className="mr-2" /> Lead Management
          </div>{" "}
          <MdKeyboardArrowDown size={25} />
        </div>
        <div className="flex p-4 w-full bg-red-600 text-xl item-center justify-between text-white cursor-pointer">
          <div className="flex">
            <FaUser size={25} className="mr-2" /> User Management
          </div>{" "}
          <MdKeyboardArrowDown size={25} />
        </div>
        <div className="flex p-4 w-full bg-red-600 text-xl item-center text-white cursor-pointer">
          <AiOutlineBars size={25} className="mr-2" /> Banners
        </div>
        <div className="flex p-4 w-full bg-red-600 text-xl item-center justify-between text-white cursor-pointer">
          <div className="flex">
            <FaYoutube size={25} className="mr-2" /> Training Management
          </div>{" "}
          <MdKeyboardArrowDown size={25} />
        </div>
        <div className="flex p-4 w-full bg-red-600 text-xl item-center text-white cursor-pointer">
          <IoCloudUploadSharp size={25} className="mr-2" /> Code Upload
          Management
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
