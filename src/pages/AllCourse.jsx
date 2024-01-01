import { useState } from "react";
import CourseBanner from "../components/CourseBanner";
import ShowAllCourses from "../components/ShowAllCourses";
import { Helmet } from 'react-helmet-async';
const AllCourse = () => {
    const [allCourses, setAllCourse] = useState([])
    useState(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    const [search, setSearch] = useState('');

    const handleSearch = e => {
        setSearch(e.target.value);
    }

    const filterCourses = allCourses.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.price.toString().toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <Helmet>
                <title>Course Page</title>
            </Helmet>
            <CourseBanner handleSearch={handleSearch} />
            <ShowAllCourses filterCourses={filterCourses}/>
        </div>
    );
};

export default AllCourse;