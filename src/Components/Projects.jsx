import { homePageProjectsData } from "../Data/Projects";

const Projects = () => {
  return (
    <div className="section-container mt-12">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Highlighted Projects
      </h2>
      <p className="mx-auto mb-6 mt-2 max-w-2xl text-center text-slate-600 md:mt-4">
        Take a glimpse at some of my standout projects that demonstrate my
        expertise and creativity in web development. Click on any project to
        dive deeper into the details and technologies used.
      </p>
      <div className="grid gap-4 md:grid-cols-2 md:grid-rows-7">
        {homePageProjectsData.map((project) => (
          <>
            {project.projectImg ? (
              <div
                key={project.heading}
                className="border-2 border-black md:row-span-3"
              >
                <img
                  src={project.projectImg}
                  alt="projectImg"
                  className="object-contain"
                />
                <div className="p-2">
                  <h3 className="text-center text-2xl font-semibold">
                    {project.heading}
                  </h3>
                  <p className="my-4 text-slate-600">{project.description}</p>
                  <button className="w-full rounded-lg bg-primary px-4 py-2 text-white">
                    Read More
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 text-2xl font-medium md:row-span-1 md:text-3xl">
                {project.description}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
