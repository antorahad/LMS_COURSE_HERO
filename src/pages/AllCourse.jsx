import CourseBanner from "../components/CourseBanner";
import ShowAllCourses from "../components/ShowAllCourses";
import { Helmet } from 'react-helmet-async';
const AllCourse = () => {
    return (
        <div>
            <Helmet>
                <title>Course Page</title>
             </Helmet>
            <CourseBanner/>
            <ShowAllCourses/>
        </div>
    );
};

export default AllCourse;