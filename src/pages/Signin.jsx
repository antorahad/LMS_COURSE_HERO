import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
const Signin = () => {
    const handleSignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'), form.get('password'))

    }
    return (
        <div className="py-[60px] px-[20px] min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Sign In Page</title>
            </Helmet>
            <div className="bg-slate-50 p-5 rounded-[5px] max-w-2xl mx-auto">
                <center>
                    <h1 className="text-[40px] font-[600] mb-3 text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign In</h1>
                    <p className="max-w-md text-[14px] font-[400]">If you are already have an account you can sign in with your email and password.</p>
                </center>
                <form onSubmit={handleSignin} className="flex flex-col items-center justify-center gap-5 mt-[40px]">
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] flex items-center justify-center gap-2 text-white text-[14px] font-[600] w-[80%]">Continue With <FcGoogle size={20}></FcGoogle></button>
                    <p className="text-[16px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Or</p>
                    <input type="email" name="email" placeholder="Enter Your Email" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto" required/>
                    <input type="password" name="password" placeholder="Enter Your Password" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto" required/>
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Sign In</button>
                    <p className="text-[14px] font-[400]">Do not have an account? <Link to={'/signup'} className="underline text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign Up</Link> here.</p>
                </form>
            </div>
        </div>
    );
};

export default Signin;