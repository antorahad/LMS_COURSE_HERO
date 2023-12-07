import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="py-[60px] px-[20px] min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Sign Up Page</title>
             </Helmet>
            <div className="bg-slate-50 p-5 rounded-[5px] max-w-2xl mx-auto">
                <center>
                    <h1 className="text-[40px] font-[600] mb-3 text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign Up</h1>
                    <p className="max-w-md text-[14px] font-[400]">Create an account to become a member & start your journet with course hero.</p>
                </center>
                <form onSubmit={handleSignup} className="flex flex-col items-center justify-center gap-5 mt-[40px]">
                    <input type="email" name="email" placeholder="Enter Your Email" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto"/>
                    <input type="password" name="password" placeholder="Enter Your Password" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto"/>
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Sign Up</button>
                    <p className="text-[14px] font-[400]">Have an account? <Link to={'/signin'} className="underline text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign In</Link> here.</p>
                </form>  
            </div>
        </div>
    );
};

export default SignUp;