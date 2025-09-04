import Preheading from "../utils/Preheading";

const Ourservice = () => {
  return (
    <div className="p-10 space-y-5 mt-16">
      <Preheading>Our Services</Preheading>
      <h1 className="font-bold text-4xl ">We define excellence in moving <br /> goods from point A to point B</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[url('https://i.ibb.co.com/d0Y5rfd2/pexels-shndgd-33612693.jpg')] h-[500px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
          <button className="absolute top-3 left-4 bg-gray-700 px-2 py-1 rounded-lg text-white text-sm">
            Sea Freight
          </button>
          <div className="flex items-center justify-center">
            <h3 className="absolute text-center text-white bottom-12 p-4 text-xl font-medium">
              Global Reach, Reliable Sea Freight Solution
            </h3>
            <button className="text-white absolute bottom-4 text-center px-18 py-1 border rounded-4xl">
              Explore Solution
            </button>
          </div>
        </div>

        {/* card 2  */}
        <div className="bg-[url('https://i.ibb.co.com/B2wrCrzF/pexels-nikita-grishin-128711293-10406140.jpg')] h-[500px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
          <button className="absolute top-3 left-4 bg-gray-700 px-2 py-1 rounded-lg text-white text-sm">
            Air Freight
          </button>
          <div className="flex items-center justify-center">
            <h3 className="absolute text-center text-white bottom-12 p-4 text-xl font-medium">
              Move High-Value Items Swiftly with Air Freight
            </h3>
            <button className="text-white absolute bottom-4 text-center px-18 py-1 border rounded-4xl">
              Explore Solution
            </button>
          </div>
        </div>

        {/* card 3  */}
        <div className="bg-[url('https://i.ibb.co.com/XfTb7MXB/Truck.png')] h-[500px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
          <button className="absolute top-3 left-4 bg-gray-700 px-2 py-1 rounded-lg text-white text-sm">
            Road Freight
          </button>
          <div className="flex items-center justify-center">
            <h3 className="absolute text-center text-white bottom-12 p-4 text-xl font-medium">
              Ship Quickly Nationwide with Road Freight
            </h3>
            <button className="text-white absolute bottom-4 text-center px-18 py-1 border rounded-4xl">
              Explore Solution
            </button>
          </div>
        </div>

        {/* card 4  */}
        <div className="bg-[url('https://i.ibb.co.com/jk5gMRCp/pexels-pramodtiwari-13970797.jpg')] h-[500px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden">
          <button className="absolute top-3 left-4 bg-gray-700 px-2 py-1 rounded-lg text-white text-sm">
            Rail Freight
          </button>
          <div className="flex items-center justify-center">
            <h3 className="absolute text-center text-white bottom-12 p-4 text-xl font-medium">
              Seamless Rail Logistics to Power Your Business
            </h3>
            <button className="text-white absolute bottom-4 text-center px-18 py-1 border rounded-4xl">
              Explore Solution
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ourservice;
