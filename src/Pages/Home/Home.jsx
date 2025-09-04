import Aboutus from "../../Components/Aboutus";
import Accomplishment from "../../Components/Accomplishment";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Experience from "../../Components/Experience";
import Footer from "../../Components/Footer";
import LatestNews from "../../Components/LatestNews";
import Navbar from "../../Components/Navbar";
import Offer from "../../Components/Offer";
import Ourservice from "../../Components/Ourservice";
import Working from "../../Components/Working";

const Home = () => {
  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Aboutus />
        <Offer />
        <Working />
        <Ourservice />
        <Aboutus />
        <Experience />
        <Accomplishment />
        <LatestNews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
