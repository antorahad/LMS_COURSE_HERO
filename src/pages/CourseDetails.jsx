import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCourse, saveCourse } from '../utility/localStorage';
import { Helmet } from 'react-helmet-async';


const CourseDetails = () => {
    const details = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(singleDetails => singleDetails.id === idInt);
    const { image, title, description, rating, price, lessons, total_lesson_duration, number_of_reviews, number_of_lessons } = detail
    const handleAddCart = () => {
        const coursesInCart = getStoredCourse();
        if (coursesInCart.includes(idInt)) {
            toast.error("Already added to the cart.");
        } else {
            saveCourse(idInt);
            toast.success("Course Added Successfully.");
        }
    }
    return (
        <div>
            <Helmet>
                <title>Course Detail Page</title>
            </Helmet>
            <div className="bg-slate-950 px-[20px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-10">
                        <div className="space-y-6">
                            <h1 className="text-[40px] font-[600] text-white max-w-2xl">{title}</h1>
                            <p className="text-white max-w-xl text-[16px]">{description}</p>
                        </div>
                        <div>
                            <img src={image} className="w-[100%] rounded-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-5 max-w-5xl mx-auto py-[60px] px-[20px]">
                <div>
                    <h1 className="text-[40px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text mb-5">Course Lessons</h1>
                    <ul className="flex flex-col justify-center gap-2">
                        {
                            lessons.map(lesson => <li className="py-2 flex items-center gap-3" key={lesson.lesson_id}>
                                <div className='w-[10px] h-[10px] rounded-full bg-gradient-to-r from-violet-300 to-purple-300'></div>
                                {lesson.lesson_title}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <div className="bg-slate-50 p-5 shadow-sm rounded-[5px] space-y-5">
                        <h1 className="text-[30px] font-[600]">Course Details</h1>
                        <p className="text-[16px] font-[500]">Price: ${price} USD</p>
                        <p className="text-[16px] font-[500]">Duration: {total_lesson_duration} Hour</p>
                        <p className="text-[16px] font-[500]">Enrolled: {
                            number_of_reviews ? number_of_reviews : '1'
                        }k Students</p>
                        <p className="text-[16px] font-[500]">Reviews: {
                            number_of_reviews ? number_of_reviews : '1'
                        }k Reviews</p>
                        <p className="text-[16px] font-[500]">Lessons: {number_of_lessons} Lessons</p>
                        <p className="text-[16px] font-[500]">Rating: {rating}</p>
                        <div className="flex flex-col gap-3">
                            <button onClick={handleAddCart} className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CourseDetails;