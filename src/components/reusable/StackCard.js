import React from "react";

export default function StackCard({title, icon, technologies}) {
    return (
        <div className="text-center sm:text-left w-full mb-10 sm:mb-0 w-full rounded shadow-2xl bg-gray-50 border-2">
            <div className="bg-gray-400">
                <div className="mb-3 pt-4 flex justify-center">
                    <img src={icon} alt="icon" className="h-12 w-auto"/>
                </div>
                <h1 className="text-4xl pb-3 mb-3 font-semibold text-center tracking-tight text-gray-900 sm:text-3xl">
                    {title}
                </h1>
            </div>
            <ul className="mb-4 list-none flex flex-col items-center justify-center">
                {technologies.map((tech, index) => (
                    <li key={index} className="text-lg leading-10 text-gray-600">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    );
}
