import Preheading from "../utils/Preheading";
import Navmenu from "./Navmenu";

export default function Banner() {
  return (
    <div className="bg-[url('https://i.ibb.co.com/XrFFjsFx/transit.jpg')] bg-cover bg-op bg-opacity h-dvh border-t-2 border-t-blue-950 px-64">
      <Navmenu />
      <div className="banner-content px-4 mt-[100px]">
        <Preheading>Logistic & Supply Chain Solutions</Preheading>
        <h1 className="text-white text-6xl leading-16 mt-4">
          Safest Logistics Solutions
          <br /> Provider With Integrity
        </h1>
        <p className="text-white py-4">
          We’re leading provider of less-than-truckload freight transportation
          with the world-class <br /> network, technology and service our
          customers need at all the time.
        </p>
      </div>
    </div>
  );
}
