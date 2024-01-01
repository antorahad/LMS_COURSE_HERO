import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
const Testimonial = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Success Stories of Our Heros</h1>
                <p className="text-[16px] font-[400]">Here out the success stories of our heros.</p>
            </center>
            <div className="mt-[40px] max-w-7xl mx-auto">
                <Marquee pauseOnClick={true} pauseOnHover={true} direction={"right"} speed={30}>
                    <div className="p-7 mx-5 bg-slate-50 shadow-sm rounded-[5px] w-[550px]">
                        <p className="text-justify">
                            {`"Thanks to Course Hero, I fulfilled my academic aspirations! Their diverse courses empowered me to excel. The platform's resources, guidance, and knowledgeable instructors were instrumental in my success. Enrolling in Course Hero was pivotal in achieving my dreams. Grateful for this transformative learning experience!"`}
                        </p>
                        <div className="mt-[10px] space-y-2">
                            <p className="text-[18px] font-[600]">Mary Rose</p>
                            <p className="text-[14px] font-[400]">Business Owner</p>
                            <div className="flex gap-3 text-yellow-300">
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                            </div>
                        </div>
                    </div>
                    <div className="p-7 mx-5 bg-slate-50 shadow-sm rounded-[5px] w-[550px]">
                        <p className="text-justify">
                            {`"Course Hero has been a game-changer! Their extensive range of courses equipped me with the knowledge and skills needed to realize my ambitions. With their support, I conquered academic challenges and am now living my dream. Thank you, Course Hero, for being my pathway to success!"`}
                        </p>
                        <div className="mt-[10px] space-y-2">
                            <p className="text-[18px] font-[600]">John Doe</p>
                            <p className="text-[14px] font-[400]">Software Developer</p>
                            <div className="flex gap-3 text-yellow-300">
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                            </div>
                        </div>
                    </div>
                    <div className="p-7 mx-5 bg-slate-50 shadow-sm rounded-[5px] w-[550px]">
                        <p className="text-justify">
                            {`"Course Hero became my springboard to success! Their courses were instrumental in my journey towards achieving my dreams. With their incredible resources and support, I've surpassed my goals and transformed my life. Forever grateful to Course Hero for shaping my success story!"`}
                        </p>
                        <div className="mt-[10px] space-y-2">
                            <p className="text-[18px] font-[600]">Marcos Sivastin</p>
                            <p className="text-[14px] font-[400]">Python Developer</p>
                            <div className="flex gap-3 text-yellow-300">
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                                <FaStar size={20}></FaStar>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Testimonial;