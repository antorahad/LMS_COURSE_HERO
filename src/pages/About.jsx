import AboutBanner from "../components/AboutBanner";
import Introduction from "../components/Introduction";
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
             </Helmet>
            <AboutBanner/>
            <Introduction/>
        </div>
    );
};

export default About;