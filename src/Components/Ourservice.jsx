import Preheading from "../utils/Preheading";

const Ourservice = () => {
  return (
    <div>
      <Preheading>Our Services</Preheading>
      <h1></h1>
      <div className="grid grid-cols-4">
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
          <img
            src="https://i.ibb.co.com/FLkyL5H2/service1.jpg"
            alt="Sea Freight"
            className="h-full w-full object-fill"
          />

          <button className="absolute top-3 left-4 bg-gray-700 px-2 py-1 rounded-lg text-white text-sm">
            Sea Freight
          </button>

          <h3 className="absolute text-center text-white bottom-12 p-4 text-xl font-medium">
            Global Reach, Reliable Sea Freight Solution
          </h3>

          <button className="text-white absolute bottom-4 text-center px-6 py-1 border rounded-4xl">
            Explore Solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
