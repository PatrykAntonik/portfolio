import React from "react";
import github from "../../assets/icons/github.png";

export default function Project({title, screen, description, technologies, link, reverseLayout}) {
    return (
        <div className={`flex flex-col ${reverseLayout ? "sm:flex-row-reverse" : "sm:flex-row"} gap-0 sm:gap-8 mb-20 sm:mb-32`}>
            <div className="w-full sm:w-2/3 h-auto flex justify-center">
                <img src={screen} alt="project img"
                     className="w-full h-auto sm:w-full sm:h-auto rounded-lg object-contain"/>
            </div>
            <div className="w-full sm:w-1/3 h-auto mt-5 sm:mt-0 flex flex-col justify-between">
                <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
                    {title.toUpperCase()}
                </h1>
                <p className="text-gray-600 text-justify mt-0 sm:mt-2">
                    {description}
                </p>
                <div className="flex flex-wrap justify-evenly mt-5 sm:mt-10">
                    {technologies.map((technology, index) => {
                        return (
                            <div key={index}
                                 className="bg-gray-200 rounded-lg px-2 py-2 mx-1 my-1 text-md font-light tracking-wide text-black">
                                {technology}
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-5 sm:mt-2">
                    <a href={link} target="_blank" rel="noreferrer" className="text-grey-800 hover:text-gray-400">
                        Code
                        <img src={github} alt="github" className="w-7 h-7 inline ml-2"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
