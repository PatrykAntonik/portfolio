import React from "react";
import about from "../assets/about.png";

export default function About() {

    return (

        <div className="mt-52 sm:mt-80 flex flex-col sm:flex-row gap-4 sm:gap-15 w-full" id="about">
            <div className="flex flex-1 justify-center">
                <img
                    className="rounded-3xl h-80 w-80 sm:h-96 sm:w-96 object-cover border-2 border-gray-300 hidden sm:flex"
                    src={about}
                    alt="Profile"
                />
            </div>
            <div className="w-full flex-1">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    About Me
                </h1>
                <p className="mt-4 text-justify leading-8 text-gray-600">
                    I am skilled in JavaScript, React, Python, Django and SQL.
                    I have six months of commercial experience, which includes working with React and JavaScript. This
                    experience has also given me a good understanding of Docker and Git for version control, including
                    conflict resolution and rebasing.
                    {/*In my own projects I have developed RESTful APIs for efficient client-server communication.*/}
                    {' '}I&#160;am looking for a full-time position as a software engineer to further develop my
                    skills and contribute to a&#160;team.
                </p>
            </div>
        </div>
    )
}
