import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CartItem from "../components/CartItem";
import { getStoredCourse, removeCourses } from "../utility/localStorage";
import shoppingCart from '../assets/cart.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
    const allCourses = useLoaderData();
    const [addedCourses, setAddedCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

    useEffect(() => {
        const storedCourseIds = getStoredCourse();

        if (allCourses.length > 0) {
            const courseAdded = [];
            let totalPriceSum = 0;

            for (const id of storedCourseIds) {
                const course = allCourses.find(course => course.id === id);
                if (course) {
                    courseAdded.push(course);
                    totalPriceSum += course.price; // Add each course's price to the total
                }
            }

            setAddedCourses(courseAdded);
            setTotalPrice(totalPriceSum.toFixed(2)); // Set the total price with two decimal places
        }
    }, [allCourses.length]);

    const clearAll = () => {
        removeCourses();
        setAddedCourses([]);
        setTotalPrice(0); // Reset total price to 0
    }

    const checkOut = () => {
        toast.success("Purchase Successful.")
        removeCourses();
        setAddedCourses([]);
        setTotalPrice(0);
    }

    return (
        <div className="max-w-7xl mx-auto p-5">
            <Helmet>
                <title>Cart Page</title>
             </Helmet>
            <h1 className="text-[40px] font-[600] mb-3">Shopping Cart</h1>
            <p className="text-[18px] font-[600]">{addedCourses.length} Course in Cart</p>
            <div>
                {
                    addedCourses.length > 0 ? (
                        <div className="min-h-screen">
                            <div className="flex flex-col lg:flex-row justify-between gap-5">
                                <div className="w-[100%] lg:w-1/2 space-y-4 mt-3">
                                    <div className="flex justify-end">
                                        <button onClick={clearAll} className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Remove All</button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-5">
                                        {addedCourses.map(singleCartItem => <CartItem key={singleCartItem.id} singleCartItem={singleCartItem}></CartItem>)}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col justify-center gap-5 bg-slate-50 p-5 shadow-sm rounded-[5px]">
                                        <h1 className="text-[30px] font-[600]">Billing Details</h1>
                                        <p className="text-[16px] font-[400]">Total Course: {addedCourses.length}</p>
                                        <p className="text-[16px] font-[400]">Total Price: ${totalPrice}</p>
                                        <button onClick={checkOut} className="bg-gradient-to-r from-violet-300 to-purple-300 px-[28px] py-[12px] rounded-[5px] text-white text-[14px] font-[600] border-none outline-none">Check Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center min-h-screen">
                            <img src={shoppingCart} className="w-[420px] h-[420px] mx-auto" alt="Shopping Cart" />
                        </div>
                    )
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cart;
