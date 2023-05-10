import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Feature1, Feature2, Feature3, Feature4, Feature5 } from "../../constants/Images";
import { Button, Navbar, SideNavigation, Title } from "../../components";
import { DownArrowIcon } from "../../DevHubIcons";
import styles from "../../App.css";

export default function Features() {
    const [isNavActive, setIsNavActive] = useState(false);
    const navigate = useNavigate();

    const { currentUser } = useSelector((state) => state.user);
    return (
        <div id="features">
            <Title title="Features" />
            <SideNavigation setIsNavActive={setIsNavActive} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                            Reach goals that matter
                        </div>
                        <h1 className="text-4xl font-semibold mb-4">
                            One product, Many uses
                        </h1>
                        <p className="text-xl text-gray-400">
                            Discover the powerful and innovative features that make DevHub the ultimate platform for developers, entrepreneurs, and businesses alike.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rounded-xl md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img src={Feature1} alt="Feature1" />
                            </div>
                            
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        More speed. Less spend
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-3">
                                        Discover the world of blogs
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Discover the world of blogs with our platform, where you can explore a vast collection of articles on various topics that matter to you.
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Discover the latest insights and trends in the blogosphere.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Follow your interests and passions with DevHub's personalized blog recommendations.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Specially curated by the developers, to the developer.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 rounded-md md:mb-0 rtl"
                                data-aos="fade-up"
                            >
                                <img src={Feature2} alt="Feature2" />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-left"
                            >
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        Be productive, stay organized
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-3">
                                        Stay organized & productive with DevHub's Task List
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Stay on top of your to-do list and accomplish your goals efficiently with our intuitive and easy-to-use task list, designed to help you prioritize and manage your tasks effectively.
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Never forget a task again: keep everything organized with our task list.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Stay on track and achieve your goals.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Prioritize like a pro</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up"
                            >
                                <img src={Feature3} alt="Feature3" />
                            </div>
                            {/* Content */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                data-aos="fade-right"
                            >
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                        Explore the latest in tech, with Tech Hunt
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-3">
                                        Tech Hunt: Your guide to the world of technology.
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Fuel your curiosity and stay ahead of the curve with Tech Hunt by DevHub.
                                        Discover the most exciting developments in technology before anyone else.
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Unleash your curiosity and explore the world of technology.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Get ahead of the game by staying up-to-date.</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Tech hunting made easy.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4th item */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Image */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                            data-aos="fade-up"
                        >
                            <img src={Feature4} alt="Feature4" />
                        </div>
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                            data-aos="fade-left"
                        >
                            <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                    Compete, Win, Repeat
                                </div>
                                <h3 className="text-3xl font-semibold mb-3">
                                    Compete to Win: Join the Exciting World of Contests with DevHub
                                </h3>
                                <p className="text-xl text-gray-400 mb-4">
                                    Discover the thrill of the competition with DevHub's Contests. Our platform offers a range of challenges and prizes to motivate and inspire you, no matter what your skill level or area of interest.
                                </p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Stand out from the crowd and show off your talents in our Contests section.</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Compete, create, and conquer in exciting contests.</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>Join the race to win big prizes.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5th item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                    {/* Image */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                        data-aos="fade-up"
                    >
                        <img src={Feature5} alt="Feature5" />
                    </div>
                    {/* Content */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                        data-aos="fade-right"
                    >
                        <div className="md:pr-4 lg:pr-12 xl:pr-16">
                            <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                                Unleashing the power of DevHub's AI
                            </div>
                            <h3 className="text-3xl font-semibold mb-3">
                                The smart way to stay ahead.
                            </h3>
                            <p className="text-xl text-gray-400 mb-4">
                                Revolutionize your productivity with Devhub's AI: The ultimate solution for automating your development workflow and summarize anything in seconds.
                            </p>
                            <ul className="text-lg text-gray-400 -mb-2">
                                <li className="flex items-center mb-2">
                                    <svg
                                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                        viewBox="0 0 12 12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Unlock the power of AI in your learning game.</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <svg
                                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                        viewBox="0 0 12 12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Transform your coding experience with DevHub's AI-powered platform.</span>
                                </li>
                                <li className="flex items-center">
                                    <svg
                                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                        viewBox="0 0 12 12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                    </svg>
                                    <span>Say goodbye to manual learning.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}