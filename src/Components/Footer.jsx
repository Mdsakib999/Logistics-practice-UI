import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <div className="bg-[#172a5b]">
      <div className="max-w-7xl py-4 mx-auto grid grid-cols-12 top-footer">
        <div className="flex flex-col justify-center pb-10 col-span-3">
          <div className="footer-logo">
            <img src={logo} className="w-36" alt="logo image" />
          </div>
          <div className="social-items ml-4 flex gap-4">
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
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex justify-between pt-4">
            <h6 className="text-white text-xl">
              Subscribe to <br /> Our Newsletter
            </h6>
            <div className="join">
              <div>
                <label className="input validator join-item rounded-l-xl">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">
                  Enter your email address
                </div>
              </div>
              <button className="btn btn-neutral bg-[#2b7fff] join-item rounded-l-xl">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="">
            <hr
              style={{
                width: "full",
                marginTop: "20px",
                color: "white",
                opacity: ".5",
              }}
            />
          </div>
          <div className="list-items flex text-white justify-between pt-4 pr-2">
            <ul className="space-y-1">
              <li className="text-xl font-semibold text-blue-500">
                Useful Links
              </li>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <ul className="space-y-1">
              <li className="text-lg font-semibold">Working Hours</li>
              <li>Mon to Fri: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday Closed</li>
            </ul>
            <ul className="space-y-1">
              <li className="text-lg font-semibold">Say Hello</li>
              <li>contact@transit.com</li>
              <li>contact@transit.com</li>
              <li>+1 212 425 8617</li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "full",
          marginTop: "20px",
          color: "white",
          opacity: ".5",
        }}
      />
      <div className="bottom-footer max-w-7xl mx-auto p-4">
        <ul className="flex justify-between text-gray-400">
          <li>Terms and Condition</li>
          <li>
            {" "}
            <span>&copy;</span>2025 SM IT || All rights reserved{" "}
          </li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
