import CustomeBtn from "../utils/CustomeBtn";
import Preheading from "../utils/Preheading";


const Faq = () => {
  return (
    <div className="p-20 mt-16">
      <Preheading>FAQ</Preheading>
      <div className="flex justify-center w-full pt-10">
        <div className="w-1/2 space-y-5">
          <h2 className="font-bold text-gray-900 text-4xl py-3">
            Everything You Need to Know About Shipping
          </h2>
          <p>
            Discover valuable information and insights about shipping logistics
            through our comprehensive FAQ section. We address common questions
            and provide expert guidance.
          </p>
          <div className="py-3">
            <CustomeBtn>Contact Us</CustomeBtn>
          </div>
          <img className="w-64" src="https://i.ibb.co.com/20hbK9MC/Truck-1.png" alt="" />
        </div>
        <div className="w-1/2 space-y-3">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            {/* question - 1 */}
            <div className="collapse-title font-semibold bg-gray-100">
              What Shiping Services do you offer?
            </div>
            <div className="collapse-content text-sm">
              We offer a comprehensive range of shipping services including domestic and international freight, express delivery, ground transportation, air cargo, and specialized logistics solutions. Our services are tailored to meet various business needs from small packages to large industrial shipments.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            
            <div className="collapse-title font-semibold bg-gray-100">
              How do I reruest a shipping quote?
            </div>
            <div className="collapse-content text-sm">
              You can request a shipping quote through our online quote system, by calling our customer service team, or by contacting us directly. Simply provide details about your shipment including dimensions, weight, origin, destination, and preferred delivery timeframe for an accurate quote.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            {/* question - 1 */}
            <div className="collapse-title font-semibold bg-gray-100">
              What Shiping Services do you offer?
            </div>
            <div className="collapse-content text-sm">
              We offer a comprehensive range of shipping services including domestic and international freight, express delivery, ground transportation, air cargo, and specialized logistics solutions. Our services are tailored to meet various business needs from small packages to large industrial shipments.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            
            <div className="collapse-title font-semibold bg-gray-100">
              How do I reruest a shipping quote?
            </div>
            <div className="collapse-content text-sm">
              You can request a shipping quote through our online quote system, by calling our customer service team, or by contacting us directly. Simply provide details about your shipment including dimensions, weight, origin, destination, and preferred delivery timeframe for an accurate quote.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            {/* question - 1 */}
            <div className="collapse-title font-semibold bg-gray-100">
              What Shiping Services do you offer?
            </div>
            <div className="collapse-content text-sm">
              We offer a comprehensive range of shipping services including domestic and international freight, express delivery, ground transportation, air cargo, and specialized logistics solutions. Our services are tailored to meet various business needs from small packages to large industrial shipments.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            
            <div className="collapse-title font-semibold bg-gray-100">
              How do I reruest a shipping quote?
            </div>
            <div className="collapse-content text-sm">
              You can request a shipping quote through our online quote system, by calling our customer service team, or by contacting us directly. Simply provide details about your shipment including dimensions, weight, origin, destination, and preferred delivery timeframe for an accurate quote.
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Faq;
