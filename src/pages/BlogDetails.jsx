import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillFacebook } from "react-icons/ai";
const BlogDetails = () => {
    const details = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(singleDetails => singleDetails.id === idInt);
    const { image, title, short_description, long_description, publish_date, author } = detail
    return (
        <div>
            <div className="bg-slate-950 px-[20px]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-10">
                        <div className="space-y-6">
                            <h1 className="text-[40px] font-[600] text-white max-w-2xl">{title}</h1>
                            <p className="text-white max-w-xl text-[16px]">{short_description}</p>
                        </div>
                        <div>
                            <img src={image} className="w-[100%] rounded-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-[20px] py-[60px]">
                <div className="space-y-4">
                    <p className="text-justify leading-relaxed">{long_description}</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] font-[500]">Author Name: {author}</p>
                        <p className="text-[14px] font-[500]">Published On: {publish_date}</p>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex items-center justify-center gap-3 text-slate-950">
                    <p className="text-[14px] font-[600]">Share By:</p>
                    <Link>
                        <AiFillLinkedin size={20}></AiFillLinkedin>
                    </Link>
                    <Link>
                        <AiOutlineWhatsApp size={20}></AiOutlineWhatsApp>
                    </Link>
                    <Link>
                        <AiFillFacebook size={20}></AiFillFacebook>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;