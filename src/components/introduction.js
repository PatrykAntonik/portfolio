import React from "react";
import profile_photo from "../assets/profile_photo.jpg";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";


export default function Introduction() {

    return (

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-15" id="home">
            <div className="text-left w-full mb-10 sm:mb-0">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Fullstack Developer
                </h1>
                <p className="mt-6 text-lg leading-9 text-gray-600">
                    Hi, my name is Patryk Antonik. I am a fullstack developer with a&#160;passion for creating and developing
                    web applications.
                    I have experience with technologies like React, Django and SQL.
                </p>
                <div className="mt-3 flex flex-row gap-5 justify-center sm:justify-start">
                    <a href="https://github.com/PatrykAntonik" target="_blank" rel="noreferrer">
                        <img src={github}
                             alt="linkedin"
                             className="h-10 w-10"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/patryk-antonik-572256266/" target="_blank" rel="noreferrer">
                        <img src={linkedin}
                             alt="linkedin"
                             className="h-10 w-10"
                        />
                    </a>

                </div>
            </div>

            <div className="flex justify-center">
                <img
                    className="rounded-3xl shadow-lg h-80 w-80 sm:h-96 sm:w-96  object-cover"
                    src={profile_photo}
                    alt="Profile"
                />
            </div>
        </div>
    )
}
