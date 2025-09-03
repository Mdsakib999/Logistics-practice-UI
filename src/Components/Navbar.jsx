import logo from "../assets/Logo.png";
import { GoClock } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Navbar = () => {
  return (
    //header section
    <div className="bg-[#172a5b] flex justify-between items-center">
      <div className="header-logo">
        <img src={logo} className="w-36" alt="logo image" />
      </div>
      <div className="header-info">
        <ul className="flex gap-8">
          <li className="flex gap-2">
            <div className="bg-[#213e89] flex items-center p-5 rounded-full">
              <GoClock style={{color:'yellow',fontSize:'28px'}} />
            </div>
            <div className="flex flex-col justify-center text-white">
              <p>Mon - Sat 9:00 - 12:00</p>
              <p>Sunday Closed</p>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="bg-[#213e89] flex items-center p-5 rounded-full">
              <MdEmail style={{color:'yellow',fontSize:'28px'}} />
            </div>
            <div className="flex flex-col justify-center text-white">
              <p>Email</p>
              <p>contact@transit.com</p>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="bg-[#213e89] flex items-center p-5 rounded-full">
              <IoCall style={{color:'yellow',fontSize:'28px'}} />
            </div>
            <div className="flex flex-col justify-center text-white">
              <p>Call Us</p>
              <p>(00) 123 456 789</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
