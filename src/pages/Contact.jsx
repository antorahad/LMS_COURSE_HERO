import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Get In Touch</h1>
                <p className="text-[16px] font-[400]">We provide our official address, email address and hotline number below.</p>
            </center>
            <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <FaLocationDot size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Office Address</h1>
                    <p>1234 Elm street, Cityville, State 12345, Countryland.</p>
                </div>
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <MdMarkEmailUnread size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Email Address</h1>
                    <p>hero.course612@gmail.com</p>
                </div>
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col justify-center gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <FaPhoneAlt size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Support & Service</h1>
                    <p>(555) 555-5555</p>
                </div>
            </div>
            <div className="mt-[60px]">
                <center>
                    <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Leave A Message</h1>
                    <p className="text-[16px] font-[400]">We provide our official address, email address and hotline number below.</p>
                </center>
                <form className="flex flex-col gap-5 max-w-3xl mx-auto bg-slate-50 shadow-sm p-10 rounded-[5px] mt-[40px]">
                    <input type="text" placeholder="Enter Your Name" className="p-3 rounded-[5px] border-none outline-none"/>
                    <input type="email" placeholder="Enter Your Email Address" className="p-3 rounded-[5px] border-none outline-none"/>
                    <textarea placeholder="Write Your Message" className="p-3 rounded-[5px] h-[200px] border-none outline-none overflow-auto"></textarea>
                    <div>
                        <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;