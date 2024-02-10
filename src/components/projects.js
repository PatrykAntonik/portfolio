import React from "react";
import Project from "./reusable/Project";
import ekranDonacjiLista from "../assets/ekranDonacjiLista.jpg";
import socialMedia from "../assets/socialmedia.jpg";

export default function Projects() {

    const projects = [{
        title: "Transplant App",
        screen: ekranDonacjiLista,
        description: "This project, developed for engineering thesis,\n" + " is designed to streamline the organ transplantation process.\n" + "It allows donors to easily manage their donation profiles (CRUD operations),\n" + "and enables hospitals to review profiles and reach out to suitable donors.",
        technologies: ["React", "MUI", "Django", "SQL"],
        link: "https://github.com/PatrykAntonik/Backend",
    }, {
        title: "Social Media App",
        screen: socialMedia,
        description: "This is a social media app that allows users to create groups and posts. It also has a user authentication system and a profile page.",
        technologies: ["Django", "Bootstrap", "SQL"],
        link: "https://github.com/PatrykAntonik/pazig",
    },]

    return (

        <div className="mt-52 sm:mt-80" id="projects">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                Projects I've worked on
            </h1>

            <div className="mt-16 ml-0 sm:ml-5">
                {projects.map((project, index) => (<Project
                    key={index}
                    title={project.title}
                    screen={project.screen}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    reverseLayout={index % 2 !== 0}
                />))}
            </div>

        </div>)
}
