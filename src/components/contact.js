import React from "react";
import email from "../assets/icons/email.png";
import location from "../assets/icons/location.png";
import resume from "../assets/icons/resume.png";
import cv_Patryk_Antonik from "../assets/cv_Patryk_Antonik_english.pdf";

export default function Contact() {

    return (
        <div id="contact"
             className="mt-52 sm:mt-80">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Contact</h1>
            <div className="flex flex-1 flex-col sm:flex-row items-center justify-between mt-20 gap-10">
                <div className="flex flex-row justify-start sm:justify-center items-center w-56">
                    <img src={location} alt="icon" className="w-10 h-10"/>
                    <div className="flex flex-col ml-4">
                        <p className="text-lg font-semibold">Location</p>
                        <p className="text-gray-600">Katowice, Poland</p>
                    </div>
                </div>
                <div className="flex flex-row justify-start sm:justify-center items-center w-56">
                    <img src={email} alt
                        ="icon" className="w-10 h-10"/>
                    <div className="flex flex-col ml-4">
                        <p className="text-lg font-semibold">Email</p>
                        <p className="text-gray-600">
                            <a href="mailto:xx
                            patryka@gmail.com">
                                patryka@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="">
                    <style>
                        {`
                            .custom-class:hover img {
                                filter: invert(100%);
                                }
                        `}
                    </style>
                    <a href={cv_Patryk_Antonik} download="Patryk_Antonik_CV.pdf"
                       className="flex items-center justify-center px-4 py-2 text-lg font-semibold text-black bg-white border border-black rounded-lg relative overflow-hidden shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-gray-800 before:duration-100 before:ease-linear hover:text-gray-50 hover:shadow-gray-800 hover:before:border-[30px] custom-class">
                        <span className="z-10">Download Resume</span>
                        <img src={resume} alt="icon" className="w-7 h-7 ml-4 relative z-10 image-class"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
