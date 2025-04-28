import { FaQuoteLeft , FaCheck} from "react-icons/fa";

import React from 'react'

const Team = () => {
    return (
        <section id='team'>
            <div className="flex flex-col justify-center items-center p-5 lg:p-[96px] gap-5 bg-gray-50">
                <FaQuoteLeft className="text-4xl text-gray-400"/>
                <p className="leading-relaxed text-gray-900 font-semibold md:text-2xl md:w-7/12">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                <div className="flex gap-2">
                    <img className="rounded-full" src="../../public/Avatar.png" alt="avatar" />
                    <p className="text-gray-900">Micheal Gough /</p>
                    <p className="text-gray-500">CEO at Google</p>
                </div>
            </div>
            <div className="xl:px-[80px] md:px-[30px] px-[10px] py-[24px]">
                <div className="flex  flex-col justify-center items-center">
                    <p className="text-gray-900 text-4xl font-extrabold leading-tight">Pay as you grow</p>
                    <p className="text-gray-500 text-xl text-center w-9/12">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className="lg:flex grid mt-10 gap-5">
                    <div className="flex lg:w-4/12 xl:p-10 lg:p-0 py-10 lg:py-10 flex-col gap-5 justify-center items-center border-1 border-gray-200 rounded-xl">
                        <p className="text-gray-900 font-semibold text-2xl">Starter</p>
                        <p className="text-gray-500 w-8/12 text-center">Great for personal use and for your side projects.</p>
                        <div className="flex items-center gap-2 my-5">
                            <p className="font-extrabold text-4xl text-gray-900">$49</p>
                            <p className="text-gray-500">/month</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Individual configuration</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> No setup, monthly, or hidden fees</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Team size: <p className="font-medium">1 developer</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Premium support: <p className="font-medium">6 months</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Free updates: <p className="font-medium">6 months</p></p>
                        </div>
                        <button className="bg-purple-600 w-9/12 h-14 rounded-2xl text-white mt-5">Get Started</button>
                    </div>
                    <div className="flex lg:w-4/12 xl:p-10 lg:p-0 py-10 lg:py-10 flex-col gap-5 justify-center items-center border-1 border-gray-200 rounded-xl">
                        <p className="text-gray-900 font-semibold text-2xl">Company</p>
                        <p className="text-gray-500 w-8/12 text-center">Best for large scale uses and extended redistribution rights.</p>
                        <div className="flex items-center gap-2 my-5">
                            <p className="font-extrabold text-4xl text-gray-900">$99</p>
                            <p className="text-gray-500">/month</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Individual configuration</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> No setup, monthly, or hidden fees</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500 flex flex-wrap"/> Team size: <p className="font-medium">10 developer</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500 flex flex-wrap"/> Premium support: <p className="font-medium">24 months</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500 flex flex-wrap"/> Free updates: <p className="font-medium">24 months</p></p>
                        </div>
                        <button className="bg-purple-600 w-9/12 h-14 rounded-2xl text-white mt-5">Get Started</button>
                    </div>
                    <div className="flex lg:w-4/12 xl:p-10 lg:p-0 py-10 lg:py-10 flex-col gap-5 justify-center items-center border-1 border-gray-200 rounded-xl">
                        <p className="text-gray-900 font-semibold text-2xl">Enterprise</p>
                        <p className="text-gray-500 w-8/12 text-center">Best for large scale uses and extended redistribution rights.</p>
                        <div className="flex items-center gap-2 my-5">
                            <p className="font-extrabold text-4xl text-gray-900">$499</p>
                            <p className="text-gray-500">/month</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Individual configuration</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> No setup, monthly, or hidden fees</p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Team size: <p className="font-medium">100+ developer</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Premium support: <p className="font-medium">36 months</p></p>
                            <p className="flex items-center gap-2"><FaCheck className="text-teal-500"/> Free updates: <p className="font-medium">36 months</p></p>
                        </div>
                        <button className="bg-purple-600 w-9/12 h-14 rounded-2xl text-white mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team