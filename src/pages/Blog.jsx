import { useLoaderData } from "react-router-dom";
import Single from "../components/Single";

const Blog = () => {
    const allBlogs = useLoaderData()
    return (
        <div className="px-[20px] py-[60px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allBlogs.map(blog => <Single key={blog.id} blog={blog}></Single>)
                }
            </div>
        </div>
    );
};

export default Blog;