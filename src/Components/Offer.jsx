import Preheading from "../utils/Preheading";
import { TbBrandStackshare } from "react-icons/tb";
import { GiCrossedChains } from "react-icons/gi";
import { MdTrackChanges } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { VscMilestone } from "react-icons/vsc";
export default function Offer() {
  return (
    <div className="space-y-4">
      <Preheading> What We Offer </Preheading>
      <h1 className="text-3xl">Optimize your Supply chain with expert<br />
solutions designed to deliver efficiency <br />
and flexibility  </h1>
    <div className="grid grid-cols-3 mt-10 gap-16">
        <div className="space-y-2">
            <TbBrandStackshare style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6 className="text-xl font-semibold">
                Multi-modal Operations
            </h6>
            <p>
                Stay informed with real-time tracking, providing complete visibility of your shipments every step of the way for peace of mind and precise planning.
            </p>
            </div>  
        <div className="space-y-2">
            <GiCrossedChains style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6 className="text-xl font-semibold">
                Supply Chain Management
            </h6>
            <p>
Streamline your supply chain with our multimodal logistics, combining land, air, and sea transport to ensure efficient, reliable delivery across every mile.
            </p>
            </div>  
        <div className="space-y-2">
            <MdTrackChanges style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6 className="text-xl font-semibold">
                Real-Time Tracking
            </h6>
            <p>
Adapt to your needs with our flexible scheduling solutions, offering tailored timelines and seamless to keep your operations running smoothly.
            </p>
            </div>  
        <div className="space-y-2">
            <RiCalendarScheduleLine style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6 className="text-xl font-semibold">
                Flexible Scheduling
            </h6>
            <p>
Ut quam metus, egestas nec interdum sed, aliquam mattis justo. In aliquam purus in ex posuere sapien egestas. Donec sed sollicitudin, id blandit erat.
            </p>
            </div>  
        <div className="space-y-2">
            <VscMilestone style={{fontSize:"48px",color:"black",transform:"rotate(270deg"}} />
            <h6 className="text-xl font-semibold">
                Last-Mile Delivery
            </h6>
            <p>
Donec imperdiet elit nec erat semper, ut sodales elit rutrum. Ut congue in justo vitae blandit. Etiam faucibus magna. Aenean consectetur fringilla.
            </p>
            </div>  
    </div>
    </div>
  );
}
