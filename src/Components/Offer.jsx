import Preheading from "../utils/Preheading";
import { TbBrandStackshare } from "react-icons/tb";
export default function Offer() {
  return (
    <div className="space-y-4">
      <Preheading> What We Offer </Preheading>
      <h1 className="text-3xl">Optimize your Supply chain with expert<br />
solutions designed to deliver efficiency <br />
and flexibility  </h1>
    <div className="grid grid-cols-3 mt-8">
        <div className="space-y-2">
            <TbBrandStackshare style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6>
                Multi-modal Operations
            </h6>
            <p>
                Stay informed with real-time tracking, providing complete visibility of your shipments every step of the way for peace of mind and precise planning.
            </p>
            </div>  
    </div>
    </div>
  );
}
