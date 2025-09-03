import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
export default function Navmenu() {
  return (
    <div className="flex justify-between items-center pt-4 px-4">
      <div className="menu-items text-white">
        <ul className="flex">
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            Home <span className="text-white mx-4">|</span>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            About Us <span className="text-white mx-4">|</span>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            Service <span className="text-white mx-4">|</span>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            Pricing <span className="text-white mx-4">|</span>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            {" "}
            Contact <span className="text-white mx-4">|</span>
          </li>
          <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">
            Blogs
          </li>
        </ul>
      </div>
      <div className="social-items flex gap-4">
        <ul className="flex items-center gap-4">
          <li>
            <SlSocialInstagram style={{ color: "white" }} />
          </li>
          <li>
            <BsFacebook style={{ color: "white" }} />
          </li>
          <li>
            <FaXTwitter style={{ color: "white" }} />
          </li>
          <li>
            <FaLinkedinIn style={{ color: "white" }} />
          </li>
        </ul>
        <button className="px-3 py-1 bg-white text-black hover:bg-yellow-300 rounded-md hover:cursor-pointer hover:text-white">
          Request Quote
        </button>
      </div>
    </div>
  );
}
