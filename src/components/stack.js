import React from "react";
import StackCard from "./reusable/StackCard";
import docker from "../assets/icons/docker.png";
import frontend from "../assets/icons/frontend.png";
import backend from "../assets/icons/backend.png";

export default function TechStack() {

    return (

        <div className="mt-52 sm:mt-80" id="technology">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-grey-900">
                My Tech Stack
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-15 mt-10">
                <StackCard
                    title="Frontend"
                    icon={frontend}
                    technologies={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Redux",
                        "Tailwind CSS",
                        "Bootstrap",
                        "Material-UI",
                        "Axios",
                    ]}
                />
                <StackCard
                    title="Backend"
                    icon={backend}
                    technologies={[
                        "Python",
                        "Django",
                        "REST API",
                        "SQL",
                        "MySQL",
                        "SQLite",
                    ]}
                />
                <StackCard
                    title="Other"
                    icon={docker}
                    technologies={[
                        "Docker",
                        "Git",
                        "GitHub",
                        "GitLab",
                        "Postman",
                        "Figma",
                    ]}
                />

            </div>
        </div>
    )
}
