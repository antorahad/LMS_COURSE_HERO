import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Course from "./Course";
import { Link } from "react-router-dom";

const PopularCourse = () => {
    const [courses, SetCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => SetCourses(data))
    }, [])
    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">Our Most Popular Courses</h1>
                <p className="text-[16px] font-[400]">Learn at your own pace, with the freedom to choose.</p>
            </center>
            <div className="max-w-7xl mx-auto mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    courses.slice(0, 6).map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <center>
                <Link to={'/course'}>
                    <button className='flex items-center justify-center gap-3 bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] mt-[40px]'>Explore Now <FaArrowRightLong /></button>
                </Link>
            </center>
        </div>
    );
};

export default PopularCourse;