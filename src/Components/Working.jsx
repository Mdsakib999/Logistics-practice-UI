import Preheading from "../utils/Preheading";
import { TbAddressBook } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";
import { GiPikeman } from "react-icons/gi";
export default function Working() {
  return (
    <div className="space-y-4 my-12">
      <Preheading> Working Process </Preheading>
      <h1 className="text-3xl">Our Working Proceess </h1>
      <p>
        From inquiry to delivery, our streamlined process ensures efficient
        handling of shipments, supported by our dedicated team every step.
      </p>
          <div className="grid grid-cols-3 mt-10 gap-16">
              <div className="space-y-2">
                          <div className="bg-[#213f8a] flex items-center justify-center rounded-full w-18 h-18 m-auto mb-4">
                                <TbAddressBook style={{color:"#ffcd29",backgroundColor:"#172a5b",fontSize:"36px"}} />
                          </div> 
                  <h6 className="text-xl font-semibold">
                      Order Placement / Booking
                  </h6>
                  <p>
                      Customers place shipment orders through our platform or with our team. We collect all necessary information including cargo type, pickup location, and delivery timeline.
                  </p>
                  </div>  
              <div className="space-y-2">
                          <div className="bg-[#213f8a] flex items-center justify-center rounded-full w-18 h-18 m-auto mb-4">
                                <FaQuestion style={{color:"#ffcd29",backgroundColor:"#172a5b",fontSize:"36px"}} />
                          </div> 
                  <h6 className="text-xl font-semibold">
                      Pickup & Documentation
                  </h6>
                  <p>
We arrange pickup from the sender’s location and ensure all documentation (invoices, customs forms, etc.) is prepared accurately and legally.
                  </p>
                  </div>  
              <div className="space-y-2">
                          <div className="bg-[#213f8a] flex items-center justify-center rounded-full w-18 h-18 m-auto mb-4">
                                <MdOutlineEmojiTransportation style={{color:"#ffcd29",backgroundColor:"#172a5b",fontSize:"36px"}} />
                          </div> 
                  <h6 className="text-xl font-semibold">
                      Transportation & Tracking
                  </h6>
                  <p>
Goods are transported via the chosen mode (truck, air, sea). Clients receive real-time tracking updates throughout the journey.
                  </p>
                  </div>  
              <div className="space-y-2">
                          <div className="bg-[#213f8a] flex items-center justify-center rounded-full w-18 h-18 m-auto mb-4">
                                <GiBanknote style={{color:"#ffcd29",backgroundColor:"#172a5b",fontSize:"36px"}} />
                          </div> 
                  <h6 className="text-xl font-semibold">
                      Customs Clearance (if international)
                  </h6>
                  <p>
We handle all customs clearance procedures efficiently to prevent delays, ensuring compliance with destination regulations.
                  </p>
                  </div>  
              <div className="space-y-2">
                          <div className="bg-[#213f8a] flex items-center justify-center rounded-full w-18 h-18 m-auto mb-4">
                                <GiPikeman style={{color:"#ffcd29",backgroundColor:"#172a5b",fontSize:"36px"}} />
                          </div> 
                  <h6 className="text-xl font-semibold">
                      Final Delivery & POD
                  </h6>
                  <p>
The shipment is delivered to the final destination, and proof of delivery is provided to confirm successful handoff.
                  </p>
                  </div>  
          </div>
    </div>
  );
}
