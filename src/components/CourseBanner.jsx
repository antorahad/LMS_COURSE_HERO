import banner from '../assets/image-three.png'
import { RiSearchLine } from 'react-icons/ri';

const CourseBanner = ({ handleSearch }) => {
    return (
        <div className='bg-gradient-to-r from-violet-300 to-purple-300 px-[20px]'>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <div className='py-5'>
                        <div className='p-5 space-y-3 text-white'>
                            <h1 className='text-[40px] font-[600]'>Choose from over 30 <br /> courses each guided <br /> by our top mentors.</h1>
                            <p className='text-[16px] font-[400]'>Learn new skills everyday online with our top instructors.</p>
                            <div className='text-slate-950'>
                                <div className="relative">
                                    <input onChange={handleSearch}
                                        type="text"
                                        className="p-3 rounded-md w-full border-none focus:outline-none outline-none pl-10"
                                        placeholder="Search Courses"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <RiSearchLine className="h-5 w-5 text-gray-600" />
                                    </div>
                                </div>
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

export default CourseBanner;