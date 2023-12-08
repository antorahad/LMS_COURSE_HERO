import { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { AuthContext } from '../Provider/AuthProvider';
import userImage from '../assets/user.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleSignout = () => {
        logOut();
    };

    return (
        <div className="bg-white shadow-sm">
            <nav className="py-[30px] px-[25px] flex items-center justify-between">
                <div>
                    <Link to={'/'}>
                        <a className="text-[25px] font-[600]">
                            <span className='text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text'>Course</span> Hero
                        </a>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    {/* Desktop Menu */}
                    <ul className="flex items-center justify-center text-[16px] font-[400]">
                        <li className="px-3">
                            <NavLink to={'/'} className=
                                {({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-purple-400" : ""
                                }>
                                <a>Home</a>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to={'/about'} className=
                                {({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-purple-400" : ""
                                }>
                                <a>About</a>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to={'/course'} className=
                                {({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-purple-400" : ""
                                }>
                                <a>Courses</a>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to={'/blog'} className=
                                {({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-purple-400" : ""
                                }>
                                <a>Blog</a>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to={'/contact'} className=
                                {({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-purple-400" : ""
                                }>
                                <a>Contact</a>
                            </NavLink>
                        </li>
                        <li className="px-3">
                            <NavLink to={'/cart'}>
                                <a><AiOutlineShoppingCart size={25} /></a>
                            </NavLink>
                        </li>

                        {/* User Authentication Section */}
                        <li className="px-3">
                            {user ? (
                                <div className='relative'>
                                    <button onClick={() => { setMenuToggle(!menuToggle) }} className='flex items-center justify-center border-none outline-none'>
                                        <img src={userImage} className="w-[30px] h-[30px] object-cover" alt="User" />
                                    </button>
                                    {menuToggle &&
                                        <div className='absolute right-0 w-52 bg-slate-50 p-5 mt-2 rounded-[5px] shadow-sm flex flex-col items-center justify-center'>
                                            <p className='mb-3 text-[12px] font-[600]'>{user.email}</p>
                                            <ul className='flex flex-col items-center justify-center'>
                                                <li className='py-2'><Link to='/dashboard'>Dashboard</Link></li>
                                                <li className='py-2'><Link to='/profile'>Profile</Link></li>
                                                <li className='py-2'><Link to='/settings'>Settings</Link></li>
                                                <li className='py-2'>
                                                    <button onClick={handleSignout} className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none'>Sign Out</button>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            ) : (
                                <Link to={'/signin'}>
                                    <a className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Sign In</a>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="flex lg:hidden items-center justify-center gap-5">
                    <button onClick={() => { setToggle(!toggle) }} className="bg-gray-100 p-2 rounded-[5px] z-20 border-none outline-none">
                        {toggle ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </button>

                    {/* User Authentication Section */}
                    {user ? (
                        <div className='relative'>
                            <button onClick={() => { setMenuToggle(!menuToggle) }} className='flex items-center justify-center border-none outline-none'>
                                <img src={userImage} className="w-[30px] h-[30px] object-cover" alt="User" />
                            </button>
                            {menuToggle &&
                                <div className='fixed top-0 right-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-50'>
                                    <div className='w-4/5 bg-white p-5 rounded-[5px] shadow-lg'>
                                        <div className='flex justify-end'>
                                            <button onClick={() => { setMenuToggle(false) }}>
                                                <AiOutlineClose size={25} />
                                            </button>
                                        </div>
                                        <p className='mb-3 flex items-center justify-center text-[12px] font-[600]'>{user.email}</p>
                                        <ul className='flex flex-col items-center justify-center'>
                                            <li className='py-2'><Link to='/dashboard'>Dashboard</Link></li>
                                            <li className='py-2'><Link to='/profile'>Profile</Link></li>
                                            <li className='py-2'><Link to='/settings'>Settings</Link></li>
                                            <li className='py-2'>
                                                <button onClick={handleSignout} className='bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none'>Sign Out</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>

                    ) : (
                        <Link to={'/signin'}>
                            <a className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Sign In</a>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Content */}
                {toggle &&
                    <div className='lg:hidden absolute top-[90px] left-0 w-full bg-white p-5 shadow-sm'>
                        <ul className='flex flex-col items-center justify-center'>
                            <li className="py-3">
                                <NavLink to={'/'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-purple-400" : ""
                                    }>
                                    <a>Home</a>
                                </NavLink>
                            </li>
                            <li className="py-3">
                                <NavLink to={'/about'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-purple-400" : ""
                                    }>
                                    <a>About</a>
                                </NavLink>
                            </li>
                            <li className="py-3">
                                <NavLink to={'/course'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-purple-400" : ""
                                    }>
                                    <a>Courses</a>
                                </NavLink>
                            </li>
                            <li className="py-3">
                                <NavLink to={'/blog'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-purple-400" : ""
                                    }>
                                    <a>Blog</a>
                                </NavLink>
                            </li>
                            <li className="py-3">
                                <NavLink to={'/contact'} className=
                                    {({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-purple-400" : ""
                                    }>
                                    <a>Contact</a>
                                </NavLink>
                            </li>
                            <li className="py-3">
                                <NavLink to={'/cart'}>
                                    <a><AiOutlineShoppingCart size={25} /></a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Header;
