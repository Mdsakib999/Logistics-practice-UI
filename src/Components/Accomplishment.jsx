import Preheading from "../utils/Preheading";
import CountUp from "../utils/CountUp";

const Accomplishment = () => {
  return (
    <div className="p-10 mt-16">
      <Preheading>Accomplishment</Preheading>
      <h1 className="font-bold text-3xl py-10 pb-16">
        Let the numbers speak for themselves
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-3 flex-col justify-center items-center ">
          <img src="https://i.ibb.co.com/Gf011pgv/car.png" alt="" />
          <p className="font-bold text-3xl text-center">
                <CountUp end={5731} duration={4} />
          </p>
          
          <p className="font-semibold text-xl text-center ">Delivered Packages.</p>
          <p className="opacity-65">
            We strongly support best practice sharing across our operations
            around the world and across various industrial sectors.
          </p>
        </div>
        <div className="space-y-3 flex-col justify-center items-center ">
          <img src="https://i.ibb.co.com/hkvmXbK/map.png" alt="" />
          <p className="font-bold text-3xl text-center">
            <CountUp end={123} duration={4} />
          </p>
          
          <p className="font-semibold text-xl text-center ">Countries covered..</p>
          <p className="opacity-65">
            As one of the world’s leading supply chain management companies, we design and implement industry-leading solutions..
          </p>
        </div>
        <div className="space-y-3 flex-col justify-center items-center ">
          <img src="https://i.ibb.co.com/3gkjRHv/goods.png" alt="" />
          <p className="font-bold text-3xl text-center">
            <CountUp end={476} duration={4} />
          </p>
          <p className="font-semibold text-xl text-center ">Tons of goods.</p>
          <p className="opacity-65">
            Our commitment to sustainability helps us reduce waste and share the benefits with our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accomplishment;
