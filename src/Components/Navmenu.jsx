import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
export default function Navmenu() {
  return (
    <div className="flex justify-between items-center pt-4 px-4">
        <div className="menu-items text-white">
            <ul className="flex">
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">Home <span className="text-white mx-4">|</span></li>
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">About Us <span className="text-white mx-4">|</span></li>
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">Service <span className="text-white mx-4">|</span></li>
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">Pricing <span className="text-white mx-4">|</span></li>
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2"> Contact <span className="text-white mx-4">|</span></li>
                <li className="cursor-pointer hover:text-yellow-400 hover:underline underline-offset-2">Blogs</li>
            </ul>
        </div>
        <div className="social-items flex gap-4">
            <ul className="flex items-center gap-4">
                <li><SlSocialInstagram /></li>
                <li><BsFacebook /></li>
                <li><FaXTwitter /></li>
                <li><FaLinkedinIn /></li>
            </ul>
            <button className="px-4 py-2 bg-white text-black hover:bg-yellow-300 rounded-md hover:cursor-pointer hover:text-white">
                Request Quote
            </button>
        </div>
    </div>
  )
}
