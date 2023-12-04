import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-violet-300 to-purple-300 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[25px] font-[600]">Course Hero</h1>
                    <p className="text-[14px] font-[400]">Learn New Skills Online With Top Instructors.</p>
                    <div className="flex items-center gap-3">
                    <Link>
                        <AiFillLinkedin size={20}></AiFillLinkedin>
                    </Link>
                    <Link>
                        <AiOutlineWhatsApp size={20}></AiOutlineWhatsApp>
                    </Link>
                    <Link>
                        <AiFillFacebook size={20}></AiFillFacebook>
                    </Link>
                    <Link>
                        <AiFillInstagram size={20}></AiFillInstagram>
                    </Link>
                    <Link>
                        <AiFillYoutube size={20}></AiFillYoutube>
                    </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-[600]">Company</h1>
                    <ul className="text-[14px] flex flex-col gap-3">
                        <li><Link>About Us</Link></li>
                        <li><Link>Enroll Course</Link></li>
                        <li><Link>Read BLog</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-[600]">Legal</h1>
                    <ul className="text-[14px] flex flex-col gap-3">
                        <li><Link>Terms of use</Link></li>
                        <li><Link>Privacy policy</Link></li>
                        <li><Link>Cookie policy</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-[600]">Newsletter</h1>
                    <input type="email" placeholder="Enter Your Email" className="px-[10px] py-[12px] rounded-[5px] text-slate-950"/>
                    <button className='bg-green-400 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]'>Suscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;