import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from '../assets/image-three.png'
const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-violet-300 to-purple-300 px-[20px]'>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <div className='py-5'>
                        <div className='bg-white rounded-[5px] shadow-sm p-5 space-y-3'>
                            <h1 className='text-[40px] font-[600]'>Learn New Skills Online <br /> With Top Instructors.</h1>
                            <p className='text-[16px] font-[400]'>Learn new skills everyday online with our top instructors.</p>
                            <div>
                                <Link to={'/course'}>
                                    <button className='flex items-center justify-center gap-3 bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none'>Explore Now <FaArrowRightLong /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner} className="w-[100%] h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;