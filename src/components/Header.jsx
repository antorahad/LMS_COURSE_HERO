import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="bg-white shadow-sm">
            <nav className="py-[30px] px-[25px] flex items-center justify-between">
                <div>
                    <Link to={'/'}>
                        <a className="text-[25px] font-[600]"><span className='text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text'>Course</span> Hero</a>
                    </Link>
                </div>
                <div className="hidden lg:flex">
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
                                <a>Course</a>
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
                            <Link to={'/cart'}>
                                <a><AiOutlineShoppingCart size={25} /></a>
                            </Link>
                        </li>
                        <li className="px-3">
                            <Link to={'/signin'}>
                                <a className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Sign In</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex lg:hidden items-center justify-center gap-5">
                    <div>
                        <Link to={'/signin'}>
                            <a className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Sign In</a>
                        </Link>
                    </div>
                    <button onClick={() => { setToggle(!toggle) }} className="bg-gray-100 p-2 rounded-[5px] z-20 border-none outline-none">
                        {
                            toggle ?
                                <AiOutlineClose size={25} />
                                :
                                <AiOutlineMenu size={25} />
                        }
                    </button>
                    {
                        toggle &&
                        <ul className='flex flex-col items-center justify-center text-[16px] font-[400] bg-white p-5 shadow-sm absolute z-10 top-0 left-0 w-full'>
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
                                    <a>Course</a>
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
                                <Link to={'/cart'}>
                                    <a>Cart</a>
                                </Link>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;