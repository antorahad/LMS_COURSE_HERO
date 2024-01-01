import { useState } from 'react';
import Course from './Course';
import NoDataImage from '../assets/no-data.jpg'; // Import your no data image component

const ShowAllCourses = ({ filterCourses }) => {
  const [displayedCourses, setDisplayedCourses] = useState(8);
  const [showAll, setShowAll] = useState(false);

  const loadMoreOrLess = () => {
    if (showAll) {
      setDisplayedCourses(8);
      setShowAll(false);
    } else {
      setDisplayedCourses(filterCourses.length);
      setShowAll(true);
    }
  };

  return (
    <div className="py-[60px] px-[20px]">
      <center>
        <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">All Courses</h1>
        <p className="text-[16px] font-[400]">Learn at your own pace, with the freedom to choose.</p>
      </center>
      {filterCourses.length > 0 ? (
        <div className="container mx-auto mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterCourses.slice(0, displayedCourses).map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-8">
            <img src={NoDataImage} className="w-[300px] object-cover" />
        </div>
      )}
      <center>
        {filterCourses.length > 1 && (
          <button
            className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] mt-[40px] border-none outline-none'
            onClick={loadMoreOrLess}
          >
            {showAll ? 'Show Less' : 'Load More'}
          </button>
        )}
      </center>
    </div>
  );
};

export default ShowAllCourses;
