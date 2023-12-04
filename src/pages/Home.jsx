import Banner from "../components/Banner";
import HomeContact from "../components/HomeContact";
import PopularCourse from "../components/PopularCourse";
import ServiceDeal from "../components/ServiceDeal";
import Testimonial from "../components/testimonial";
import Trusted from "../components/Trusted";
import Whyus from "../components/Whyus";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceDeal/>
            <Trusted/>
            <Whyus/>
            <PopularCourse/>
            <Testimonial/>
            <HomeContact/>
        </div>
    );
};

export default Home;