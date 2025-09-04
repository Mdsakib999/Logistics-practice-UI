import { FaArrowRight } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import CustomeBtn from "../utils/CustomeBtn";
import Preheading from "../utils/Preheading";

const Experience = () => {
  return (
    <div className="mt-24 pt-24 ">
      <Preheading>Our Experience</Preheading>

      <div className="w-full flex justify-between">
        <div className="w-1/3">
          <h1 className="font-bold py-6 text-gray-900 text-3xl mb-2">
            We are a Leading one-stop Logistic Service provider helps to Reach
            Your <span className="text-blue-600">Delay and Damages.</span>
          </h1>
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-4">
              <SlEarphonesAlt size={35} />
              <p>
                <span className="opacity-80">Call Us anytime</span> <br />{" "}
                <span className="text-black font-semibold">+1(212)255-511</span>
              </p>
            </div>
            <div>
              <CustomeBtn>Know More</CustomeBtn>
            </div>
          </div>
        </div>

        <div className="w-3/5 grid grid-cols-3 gap-4 ">
          <div className="bg-[url('https://i.ibb.co.com/B2wrCrzF/pexels-nikita-grishin-128711293-10406140.jpg')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Domestic Shipping
              </h3>
              <FaArrowRight
                className="text-white bg-blue-950 p-2 rounded-full"
                size={28}
              />
            </div>
          </div>
          <div className="bg-[url('https://i.ibb.co.com/XfTb7MXB/Truck.png')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Domestic Shipping
              </h3>
              <FaArrowRight
                className="text-white bg-blue-950 p-2 rounded-full"
                size={28}
              />
            </div>
          </div>
          <div className="bg-[url('https://i.ibb.co.com/jk5gMRCp/pexels-pramodtiwari-13970797.jpg')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Domestic Shipping
              </h3>
              <FaArrowRight
                className="text-white bg-blue-950 p-2 rounded-full"
                size={28}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
