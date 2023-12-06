import Banner from "../components/Banner";
import HomeContact from "../components/HomeContact";
import PopularCourse from "../components/PopularCourse";
import ServiceDeal from "../components/ServiceDeal";
import Testimonial from "../components/testimonial";
import Trusted from "../components/Trusted";
import Whyus from "../components/Whyus";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home Page</title>
             </Helmet>
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