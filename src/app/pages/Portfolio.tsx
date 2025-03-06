import { useState } from "react";
import { FaCode, FaAward, FaTools } from "react-icons/fa";
import Image from "next/image";
import Experiences from "../components/Experiences";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    // { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "experience", label: "Experience", icon: <FaAward /> },
    { id: "techStack", label: "Tech Stack", icon: <FaTools /> },
  ];

  return (
    <section id="portfolio" className="min-h-screen bg-wedgewood-100 text-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-wedgewood-950">Portfolio Showcase</h2>
        <p className="text-gray-400 mt-2">Explore my journey through projects, experience, and technical expertise.</p>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center gap-2 text-sm md:text-lg font-semibold transition ${
                activeTab === tab.id ? "bg-wedgewood-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-wedgewood-500 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <div className="mt-8">
          {activeTab === "projects" && <Projects />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "techStack" && <TechStack />}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const Projects = () => {
  const projects = [
    { title: "TO-DO List", description: "Automated arithmetic problem solver.", demo: "#", image: "/project1.png" },
    { title: "Login App", description: "Automated Discord message sender.", demo: "#", image: "/project2.png" },
    { title: "Fitness App", description: "A simple note-taking web app.", demo: "#", image: "/project3.png" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-wedgewood-950 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-lg md:text-xl font-bold mt-4">{project.title}</h3>
          <p className="text-gray-400 text-sm md:text-base">{project.description}</p>
          <a href={project.demo} className="text-purple-400 mt-2 flex items-center gap-2">
          </a>
        </div>
      ))}
    </div>
  );
};

const Experience = () => {
  return <Experiences />;
};

const TechStack = () => {
  const techStack = [
    { name: "HTML", image: "/tech_stack/html.svg" },
    { name: "CSS", image: "/tech_stack/css.svg" },
    { name: "JavaScript", image: "/tech_stack/javascript.svg" },
    { name: "Typescript", image: "/tech_stack/typescript.svg" },
    { name: "Angular", image: "/tech_stack/angular.svg" },
    { name: "NextJs", image: "/tech_stack/nextjs.svg" },
    { name: "ReactJS", image: "/tech_stack/reactjs.svg" },
    { name: "Tailwind CSS", image: "/tech_stack/tailwind.svg" },
    { name: "Bootstrap", image: "/tech_stack/bootstrap.svg" },
    { name: "Material UI", image: "/tech_stack/material.svg" },
    { name: "SQL", image: "/tech_stack/sql.svg" },
    { name: "MongoDB", image: "/tech_stack/mongo.svg" },
    { name: "Node JS", image: "/tech_stack/nodejs.svg" },
    { name: "Firebase", image: "/tech_stack/firebase.svg" },
    { name: "Figma", image: "/tech_stack/figma.svg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8">
      {techStack.map((tech, index) => (
        <div key={index} className="bg-wedgewood-950 p-3 md:p-4 rounded-lg flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
          <Image src={tech.image} alt={tech.name} width={60} height={60} className="md:w-20 md:h-20" />
          <p className="text-white font-semibold text-sm md:text-base mt-2">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};