const getStoredCourse = () => {
    const storedCourse = localStorage.getItem('courses');
    if (storedCourse) {
        return JSON.parse(storedCourse);
    }
    return [];
}
const saveCourse = id => {
    const storedCourses = getStoredCourse();
    const exists = storedCourses.find(courseId => courseId === id);
    if (!exists) {
        storedCourses.push(id);
        localStorage.setItem('courses', JSON.stringify(storedCourses))
    }
}
const removeCourses = () => {
    const removeAll = localStorage.clear();
    return removeAll;
}

export { getStoredCourse, saveCourse, removeCourses }