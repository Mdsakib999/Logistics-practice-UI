import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function Navmenu() {
  return (
    <div className="flex justify-between items-center">
        <div className="menu-items text-white">
            <ul className="flex">
                <li className="">Home <span className="text-white mx-4">|</span></li>
                <li>About Us <span className="text-white mx-4">|</span></li>
                <li>Service <span className="text-white mx-4">|</span></li>
                <li>Pricing <span className="text-white mx-4">|</span></li>
                <li> Contact <span className="text-white mx-4">|</span></li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className="social-items flex gap-4">
            <ul className="flex items-center gap-4">
                <li><SlSocialInstagram /></li>
                <li><BsFacebook /></li>
                <li><FaXTwitter /></li>
                <li><FaLinkedinIn /></li>
            </ul>
            <button className="px-4 py-2 bg-yellow-300 rounded-md">
                Request Quote
            </button>
        </div>
    </div>
  )
}
