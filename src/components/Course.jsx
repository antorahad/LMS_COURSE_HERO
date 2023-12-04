import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const { id, title, image, price, total_lesson_duration } = course;
    return (
        <div className="w-[100%] bg-slate-50 shadow-sm flex flex-col justify-center gap-4 p-5 rounded-[5px]">
            <figure>
                <img src={image} className="w-[100%] h-[200px] object-cover rounded-[10px]" />
            </figure>
            <p className="text-[25px] font-[600] truncate">{title}</p>
            <p className="text-[16px] font-[600]">Price: ${price} USD</p>
            <p className="text-[16px] font-[600]">Duration: {total_lesson_duration} Hour</p>
            <div className="flex items-center gap-5">
                <Link to={`/course/${id}`}>
                    <button className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Course;