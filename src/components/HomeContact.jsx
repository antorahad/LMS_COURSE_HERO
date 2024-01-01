import { Link } from 'react-router-dom';
import banner from '../assets/banner-one.png'
const HomeContact = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 rounded-[5px] shadow-sm bg-slate-50 p-10">
                <div className='flex flex-col justify-center gap-5'>
                    <h1 className='text-[40px] font-[600]'>Get More Info About Us</h1>
                    <p className='max-w-[500px]'>Discover comprehensive details about our offerings, mission, and values. Explore further to understand who we are and what we stand for.</p>
                    <div className='flex items-center gap-5'>
                    <Link to={'/contact'}>
                        <button className='bg-green-400 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]'>Contact Us</button>
                    </Link>
                    <Link to={'/course'}>
                        <button className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]'>Enroll Now</button>
                    </Link>
                    </div>
                </div>
                <div className='rounded-[10px] bg-gradient-to-r from-purple-300 to-violet-300'>
                    <img src={banner} className="w-[100%] h-auto" />
                </div>
            </div>
        </div>
    );
};

export default HomeContact;