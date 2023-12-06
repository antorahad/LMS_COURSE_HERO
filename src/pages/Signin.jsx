import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
const Signin = () => {
    return (
        <div className="py-[60px] px-[20px] min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Sign In Page</title>
             </Helmet>
            <form className="bg-slate-50 p-5 rounded-[5px] max-w-2xl mx-auto">
                <center>
                    <h1 className="text-[40px] font-[600] mb-3 text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign In</h1>
                    <p className="max-w-md text-[14px] font-[400]">If you are already have an account you can sign in with your email and password.</p>
                </center>
                <div className="flex flex-col items-center justify-center gap-5 mt-[40px]">
                    <input type="email" placeholder="Enter Your Email" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto"/>
                    <input type="password" placeholder="Enter Your Password" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto"/>
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Sign In</button>
                    <p className="text-[14px] font-[400]">Do not have an account? <Link to={'/signup'} className="underline text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign Up</Link> here.</p>
                    <p className="text-[12px] font-[400]">Or sign in with</p>
                    <button><FcGoogle size={30}></FcGoogle></button>
                </div>  
            </form>
        </div>
    );
};

export default Signin;