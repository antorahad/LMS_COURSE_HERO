import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner2 from '../assets/banner-two.png'
const Whyus = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Become A Hero</h1>
                <p className="text-[16px] font-[400]">Start your journey with course hero and be the hero of your learning.</p>
            </center>
            <div className="max-w-7xl mx-auto mt-[40px] flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className='rounded-[10px] bg-gradient-to-r from-violet-300 to-purple-300'>
                    <img src={banner2} className="w-[100%] h-auto" />
                </div>
                <div className='space-y-6'>
                    <h1 className='text-[40px] font-[600]'>Why Enroll Course Hero ?</h1>
                    <ul className='flex flex-col justify-center gap-5'>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Access a vast collection of course materials.
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Connect with top instructors ready to assist you.
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Enjoy round-the-clock customer Support.
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Learn at your own pace, with the freedom to choose.
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Join a thriving community of learners and educators.
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                            Benefit from real-life success stories.
                        </li>
                    </ul>
                    <div>
                        <Link to={'/about'}>
                            <button className='flex items-center justify-center gap-3 bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]'>Explore Now <FaArrowRightLong /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyus;