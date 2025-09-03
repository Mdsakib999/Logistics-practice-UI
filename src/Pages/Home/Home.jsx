import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Navbar from "../../Components/Navbar";

const Home = () => {
    //   useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //   }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Banner />
            <p>Home, muntasir vai</p>
            <Contact/>
        </div>
    );
};

export default Home;