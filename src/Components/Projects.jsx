import React from "react";
import { ProjectPreviewData } from "../Data/Projects";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsToRender = ProjectPreviewData.slice(0, 3);
  return (
    <section className="bg-gray-100">
      <div className="section-container py-12">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsToRender.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            className="group flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white transition-all duration-300 hover:scale-105"
            to="/project"
          >
            View all projects
            <FaArrowRight className="transition-all duration-300 group-hover:ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
