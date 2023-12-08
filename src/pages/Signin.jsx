import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (!email || !password) {
            toast.error('Please provide both email and password.');
            return;
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // If validation passes, attempt to sign in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setError(null); // Reset error state
                toast.success('Logged in successfully!'); // Display success message
                // Additional actions after successful sign-in (redirect, etc.)
            })
            .catch(error => {
                setError("Invalid email or password. Please try again.");
                console.log(error);
            });
    };

    return (
        <div className="py-[60px] px-[20px] min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Sign In Page</title>
            </Helmet>
            <div className="bg-slate-50 p-5 rounded-[5px] max-w-2xl mx-auto">
                <center>
                    <h1 className="text-[40px] font-[600] mb-3 text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign In</h1>
                    <p className="max-w-md text-[14px] font-[400]">If you already have an account, sign in with your email and password.</p>
                </center>
                <div className="flex flex-col items-center justify-center gap-5 mt-[40px]">
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] flex items-center justify-center gap-2 text-white text-[14px] font-[600] w-[80%] border-none outline-none">Continue With <FcGoogle size={20}></FcGoogle></button>
                    <p className="text-[16px] font-[600] text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Or</p>
                    <form onSubmit={handleSignin} className="flex flex-col items-center justify-center gap-5 w-[80%]">
                        <input type="email" name="email" placeholder="Enter Your Email" className="p-3 rounded-[5px] border-none outline-none w-[100%] mx-auto" />
                        <input type="password" name="password" placeholder="Enter Your Password" className="p-3 rounded-[5px] border-none outline-none w-[100%] mx-auto" />
                        <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Sign In</button>
                        {error && <p className="text-red-500 text-[14px] font-[400]">{error}</p>}
                        <ToastContainer /> {/* React Toastify container */}
                        <p className="text-[14px] font-[400]">Do not have an account? <Link to={'/signup'} className="underline text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign Up</Link> here.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
