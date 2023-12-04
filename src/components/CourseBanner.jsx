import banner from '../assets/image-three.png'

const CourseBanner = () => {
    return (
        <div className='bg-gradient-to-r from-violet-300 to-purple-300 px-[20px]'>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <div className='py-5'>
                        <div className='p-5 space-y-3 text-white'>
                            <h1 className='text-[40px] font-[600]'>Choose from over 30 <br /> courses each guided <br /> by our top mentors.</h1>
                            <p className='text-[16px] font-[400]'>Learn new skills everyday online with our top instructors.</p>
                            <div className='flex items-center gap-2'>
                                <input type="text" placeholder='Search Here...' className='px-[10px] py-[12px] rounded-[5px] border-none outline-none text-black w-[100%] lg:w-[350px]'/>
                                <button className='bg-green-400 px-[20px] py-[12px] rounded-[5px] text-white font-[400]border-none outline-none'>Search</button>
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