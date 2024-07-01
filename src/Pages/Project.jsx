import { Link } from "react-router-dom";
import ProjectImg from "../assets/project.png";
import { useState } from "react";
import { ProjectPreviewData } from "../Data/Projects";
import ProjectCard from "../Components/ProjectCard";
import CtaSection from "../Components/CtaSection";

const Project = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? ProjectPreviewData
      : ProjectPreviewData.filter((project) => project.category === filter);

  return (
    <div className="section-container pt-6 md:pt-12">
      <div>
        <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Project section
        </h1>
        <p className="mx-auto max-w-2xl text-center text-slate-600">
          Welcome to my projects page. Discover the projects I've worked on,
          highlighting my web development skills, challenges faced, solutions
          implemented, and technologies used.
        </p>
      </div>
      <div className="mb-8 mt-4 flex flex-wrap justify-center md:mt-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`mx-2 rounded-full px-4 py-2 ${
              filter === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
