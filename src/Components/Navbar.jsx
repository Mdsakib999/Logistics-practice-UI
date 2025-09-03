import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    //header section
    <div className="bg-[#172a5b]">
      <div className="header-logo">
        <img src={logo} className="w-36" alt="logo image" />
      </div>
      <div className="header-info">
        <ul>
          <li>
            <div></div>
            <div>
              <p></p>
              <p></p>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
