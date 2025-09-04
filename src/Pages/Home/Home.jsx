import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import LatestNews from "../../Components/LatestNews";
import Navbar from "../../Components/Navbar";
import Ourservice from "../../Components/Ourservice";

const Home = () => {
  //   useEffect(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="max-w-7xl mx-auto">
        <Ourservice />
        <LatestNews />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
