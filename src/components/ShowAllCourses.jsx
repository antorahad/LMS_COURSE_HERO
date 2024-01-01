import Course from './Course';
import NoDataImage from '../assets/no-data.jpg'; // Import your no data image component

const ShowAllCourses = ({ filterCourses }) => {
  return (
    <div className="py-[60px] px-[20px]">
      <center>
        <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-3">All Courses</h1>
        <p className="text-[16px] font-[400]">Learn at your own pace, with the freedom to choose.</p>
      </center>
      {filterCourses.length > 0 ? (
        <div className="max-w-7xl mx-auto mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterCourses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <img src={NoDataImage} className="w-[300px] object-cover" alt="No Data" />
        </div>
      )}
    </div>
  );
};

export default ShowAllCourses;
