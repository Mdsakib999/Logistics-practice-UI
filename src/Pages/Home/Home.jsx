import Contact from "../../Components/Contact";
import LatestNews from "../../Components/LatestNews";
import Navbar from "../../Components/Navbar";

const Home = () => {
    //   useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <LatestNews />
            <Contact/>
        </div>
    );
};

export default Home;