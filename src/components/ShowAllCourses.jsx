import { useState } from 'react';
import Course from './Course';

const ShowAllCourses = () => {
    const [allCourses, setAllCourse] = useState([])
    useState(() => {
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
    const [displayedCourses, setDisplayedCourses] = useState(8);
    const [showAll, setShowAll] = useState(false);

    const loadMoreOrLess = () => {
        if (showAll) {
            setDisplayedCourses(8);
            setShowAll(false);
        } else {
            setDisplayedCourses(allCourses.length);
            setShowAll(true);
        }
    };

    return (
        <div className="py-[60px] px-[20px]">
            <center>
                <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">All Courses</h1>
                <p className="text-[16px] font-[400]">Learn at your own pace, with the freedom to choose.</p>
            </center>
            <div className="container mx-auto mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {allCourses.slice(0, displayedCourses).map(course => (
                    <Course key={course.id} course={course}></Course>
                ))}
            </div>
            <center>
                <button
                    className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] mt-[40px] border-none outline-none'
                    onClick={loadMoreOrLess}
                >
                    {showAll ? 'Show Less' : 'Load More'}
                </button>
            </center>
        </div>
    );
};

export default ShowAllCourses;
