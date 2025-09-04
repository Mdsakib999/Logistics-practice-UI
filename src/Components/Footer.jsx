import logo from "../assets/Logo.png";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-[#172a5b]">
      <div className="max-w-7xl mx-auto">
        <div className="">
            <div className="footer-logo">
              <img src={logo} className="w-36" alt="logo image" />
          </div>
          <div className="footer-icons flex gap-4">
            <CiFacebook style={{color:"white",fontSize:"32px"}} />
            <CiFacebook style={{color:"white",fontSize:"32px"}} />
            <CiFacebook style={{color:"white",fontSize:"32px"}} />
            <CiFacebook style={{color:"white",fontSize:"32px"}} />
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Footer;
