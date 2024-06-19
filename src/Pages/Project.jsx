import { Link } from "react-router-dom";
import ProjectImg from "../assets/project.png";

const Project = () => {
  return (
    <div className="section-container mt-20">
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
      <div>
        <h3 className="my-4 text-center text-2xl font-semibold">
          Explore my journey
        </h3>
        <p className="text-center text-slate-600">
          Embark on a journey through my project portfolio, where I showcase my
          growth from basic to advanced web development projects. Each project
          represents a milestone in my learning and development, highlighting
          the increasing complexity and sophistication of my work.
        </p>
      </div>
      <div className="w-fit border-2">
        <Link to="blog">
          <img src={ProjectImg} alt="" className="m-12 h-60 w-60" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
