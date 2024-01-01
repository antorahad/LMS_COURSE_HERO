import { ImBooks } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

const ServiceDeal = () => {
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Deal For You</h1>
                <p className="text-[16px] font-[400]">Unlock premium study resources and expert tutoring with course hero today.</p>
            </center>
            <div className="max-w-7xl mx-auto mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col justify-center gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <ImBooks size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Premium Resource</h1>
                    <p>{
                        `
                    Course Hero's Premium Resources offer exclusive access to expert led courses, in depth study materials, and personalized assistance for optimized learning experiences.
                    `
                    }</p>
                </div>
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col justify-center gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <FaUserGraduate size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Top Instructor</h1>
                    <p>
                        {
                            `Course Hero's Top Instructors provide unparalleled expertise, delivering engaging and comprehensive courses, ensuring unparalleled learning experiences.`
                        }
                    </p>
                </div>
                <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col justify-center gap-3 p-5 rounded-[5px]">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-violet-300 to-purple-300 text-white rounded-[5px]">
                        <FaHandHoldingDollar size={30} />
                    </div>
                    <h1 className="text-[25px] font-[600]">Reasonable Cost</h1>
                    <p>
                        {
                            `Course Hero offers top-notch courses at affordable prices, empowering learners with quality education without breaking the bank, making knowledge accessible for all.`
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDeal;