import google from '../assets/google-2015.svg'
import microsoft from '../assets/microsoft.svg'
import airbnb from '../assets/airbnb.svg'
import fedex from '../assets/fedex-express-6.svg'
import hubspot from '../assets/hubspot.svg'
import Marquee from "react-fast-marquee";
const Trusted = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">We Are Trusted</h1>
                <p className="text-[16px] font-[400]">Course hero is recognized by a wide range of both large and small companies.</p>
            </center>
            <div className="mt-[40px] max-w-7xl mx-auto">
                <Marquee direction={"right"}>
                    <img src={google} className="w-[300px] px-5" />
                    <img src={microsoft} className="w-[300px] px-5" />
                    <img src={airbnb} className="w-[300px] px-5" />
                    <img src={fedex} className="w-[300px] px-5" />
                    <img src={hubspot} className="w-[300px] px-5" />
                </Marquee>
            </div>
        </div>
    );
};

export default Trusted;