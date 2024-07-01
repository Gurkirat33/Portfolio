import { useParams } from "react-router-dom";
import { ProjectDetailedInfoData } from "../Data/Projects";
import ImageSlider from "../Components/ImageSlider";
import CtaSection from "../Components/CtaSection";

const ProjectInfo = () => {
  const { id } = useParams();
  const currentProjectInfo = ProjectDetailedInfoData[id];

  return (
    <>
      <div className="bg-gradient-to-br from-dim to-lite">
        <div className="section-container mt-6 px-4 md:pt-12">
          <h2 className="mb-6 text-center text-4xl font-extrabold text-gray-800">
            {currentProjectInfo.heading}
          </h2>

          <div className="mx-auto mb-8 w-full max-w-5xl">
            <ImageSlider slides={currentProjectInfo.projectImages} />
          </div>

          <div className="mx-auto mb-8 max-w-4xl">
            <p className="text-center text-lg leading-relaxed text-gray-600">
              {currentProjectInfo.description}
              <span className="ml-2">
                View
                <a
                  href={currentProjectInfo.githubLink}
                  className="underline underline-offset-2"
                >
                  {" "}
                  source code
                </a>
              </span>
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <h4 className="mb-4 text-center text-2xl font-bold text-gray-800">
              Tech Stack
            </h4>
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {currentProjectInfo.techStack.map((item, index) => (
                <p
                  key={index}
                  className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 shadow-sm"
                >
                  {item}
                </p>
              ))}
            </div>

            <h4 className="mb-4 text-center text-2xl font-bold text-gray-800">
              Highlights
            </h4>
            <div className="mb-8 space-y-4 text-center">
              {currentProjectInfo.highlights.map((item, index) => (
                <p key={index} className="text-lg text-gray-600">
                  {item}
                </p>
              ))}
            </div>

            <h4 className="mb-4 text-center text-2xl font-bold text-gray-800">
              Learnings
            </h4>
            <div className="mb-8 space-y-4 text-center">
              {currentProjectInfo.learnings.map((item, index) => (
                <p key={index} className="text-lg text-gray-600">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default ProjectInfo;
