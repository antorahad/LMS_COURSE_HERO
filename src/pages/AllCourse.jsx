import { useState, useEffect } from "react";
import CourseBanner from "../components/CourseBanner";
import ShowAllCourses from "../components/ShowAllCourses";
import { Helmet } from 'react-helmet-async';

const AllCourse = () => {
    const [allCourses, setAllCourse] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(8);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);

    const handleSearch = e => {
        setSearch(e.target.value);
        setCurrentPage(1); // Reset to first page when search changes
    }

    const filterCourses = allCourses.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(search.toLowerCase())
    );

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filterCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Helmet>
                <title>Course Page</title>
            </Helmet>
            <CourseBanner handleSearch={handleSearch} />
            <ShowAllCourses filterCourses={currentCourses} />

            {filterCourses.length > coursesPerPage && (
                <center>
                    <ul className="flex justify-center pb-[60px]">
                        {Array(Math.ceil(filterCourses.length / coursesPerPage))
                            .fill()
                            .map((_, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer mx-2 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'text-white font-bold bg-gradient-to-r from-violet-300 to-purple-300' : 'text-white font-bold bg-gradient-to-r from-violet-200 to-purple-200'
                                        }`}
                                    onClick={() => paginate(index + 1)}
                                >
                                    {index + 1}
                                </li>
                            ))}
                    </ul>
                </center>
            )}
        </div>
    );
};

export default AllCourse;
