import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
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
            toast.error('Please enter a valid email address.');
            return;
        }

        // Password length validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters long.');
            return;
        }

        try {
            const result = await createUser(email, password);
            console.log(result.user);
            // Additional actions after successful sign-up (redirect, etc.)
            toast.success('Signed up successfully!');
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
            toast.error('Error occurred during sign-up. Please try again.');
        }
    };

    return (
        <div className="py-[60px] px-[20px] min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Sign Up Page</title>
            </Helmet>
            <div className="bg-slate-50 p-5 rounded-[5px] max-w-2xl mx-auto">
                <center>
                    <h1 className="text-[40px] font-[600] mb-3 text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign Up</h1>
                    <p className="max-w-md text-[14px] font-[400]">Create an account to become a member & start your journey with course hero.</p>
                </center>
                <form onSubmit={handleSignup} className="flex flex-col items-center justify-center gap-5 mt-[40px]">
                    <input type="email" name="email" placeholder="Enter Your Email" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto" />
                    <input type="password" name="password" placeholder="Enter Your Password" className="p-3 rounded-[5px] border-none outline-none w-[80%] mx-auto" />
                    <button className="bg-gradient-to-r from-violet-300 to-purple-300 px-[35px] py-[12px] rounded-[5px] text-white text-[14px] font-[600]">Sign Up</button>
                    <ToastContainer /> {/* React Toastify container */}
                    <p className="text-[14px] font-[400]">Have an account? <Link to={'/signin'} className="underline text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">Sign In</Link> here.</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
