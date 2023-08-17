    "use client"
    import BackButton from "@/public/components/BackButton/backButton";
    import { BrowserRouter as Router, Route } from "react-router-dom";
    import React from "react";

    const ForgotPassword = () => {
    return (
        <>
        <Router>
        <div className="m-auto px-24 pt-36">
            <h1 className="font-bold text-3xl pb-4">Forgot Password</h1>
            <p className="text-base font-medium text-light-black-4 pb-4">
            Choose your best fit from the options provided below
            </p>

            <div className="">
            <label
                htmlFor="email"
                className="block text-base font-medium text-light-black-6"
            >
                Email Address
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="placeholder-italic mt-1 p-2 border-none bg-gray-light rounded-md w-full"
            />
            </div>
            <div className="mt-12">
            <button
                type="submit"
                className="border-r-amber-400 bg-green rounded-md w-full h-12 text-white"
            >
                Send
            </button>
            </div>

            <BackButton />

        </div>
        </Router>
        </>
    );
    };

    export default ForgotPassword;
