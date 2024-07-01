import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-gray-700">{project.description}</p>
        <p className="mb-4 text-sm font-medium text-gray-800">
          <span className="font-semibold">Technologies:</span>
          {project.technologies.join(", ")}
        </p>
      </div>
      <div className="-mt-2 mb-6 flex justify-center">
        <Link
          to={project.link}
          className="rounded-lg bg-primary px-4 py-2 text-white"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
