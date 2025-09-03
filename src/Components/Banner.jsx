import Preheading from "../utils/Preheading";
import Navmenu from "./Navmenu";

export default function Banner() {
  return (
    <div className="bg-[url('https://i.ibb.co.com/XrFFjsFx/transit.jpg')] h-dvh border-t-2 border-t-blue-950">
        <Navmenu />
    <div className="banner-content mt-[500px]">
        <Preheading>Logistic & Supply Chain Solutions</Preheading>
    <h1 className="text-white text-6xl leading-16">
        Safest Logistics Solutions<br/> Provider With Integrity
    </h1>
    <p className="text-white py-4">
        We’re leading provider of less-than-truckload freight transportation with the world-class <br/> network, technology and service our customers need at all the time.
    </p>
    </div>
    </div>
  )
}
