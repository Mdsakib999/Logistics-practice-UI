import { FaCheckCircle } from "react-icons/fa";
import Preheading from "../utils/Preheading";
import { IoManSharp } from "react-icons/io5";
export default function Aboutus() {
  return (
    <div className="flex my-4 justify-between gap-10">
      <div className="image-section w-1/2 relative">
        <Preheading>About Us</Preheading>
        <div className="mt-16 w-1/2 ">
          <img src="https://i.ibb.co.com/TDGp0KBX/ship.png" className="w-100% rounded-xl" alt="ship" />

          <img src="https://i.ibb.co.com/x838Q9DT/Truck.png" className="absolute w-60 rounded-xl h-86 top-16 left-36" alt="truck" />
          <div className="flex justify-between w-72 p-4 bg-gradient-to-r from-[#4d5968] via-white to-white absolute -bottom-10 left-60 rounded-xl">
          <div className="bg-[#213f8a] flex items-center justify-center px-2 rounded-full">
                <IoManSharp style={{color:"white",fontSize:"32px"}} />
          </div>   
          <div className="text-center text-black">
            <p>
              1250+  
            </p>
            <p>
                Trained People
            </p>
            </div>         
          </div>

        </div>
      </div>
      <div className="content-section mt-18 w-1/2">
        <h1 className="text-4xl mb-2 text-center">Discover Transit: Your Logistics<br/> Partner</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem laudantium quis, voluptatibus sint deserunt quam
          dolores quibusdam iste, porro, aliquam id autem quaerat quae! Rem,
          nesciunt id corrupti fugiat, cum, sunt consectetur assumenda dolorem
          quia recusandae soluta! Perspiciatis nesciunt ut est hic nostrum porro
          laudantium eaque, quis voluptates, minima ipsum!
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <FaCheckCircle style={{ backgroundColor: "#213f8a" }} />
            <div className="">
            <p>400+</p>
            <p>Merchants Nationwide</p>                
            </div>

          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle style={{ backgroundColor: "#213f8a" }} />
            <div className="">
            <p>400+</p>
            <p>Industries Nationwide</p>                
            </div>

          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle style={{ backgroundColor: "#213f8a" }} />
            <div className="">
            <p>400+</p>
            <p>Retailers Nationwide</p>                
            </div>

          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle style={{ backgroundColor: "#213f8a" }} />
            <div className="">
            <p>400+</p>
            <p>Outlets Nationwide</p>                
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
