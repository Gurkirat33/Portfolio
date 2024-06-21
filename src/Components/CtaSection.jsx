import { FaArrowRight } from "react-icons/fa6";
import ProjectImg from "../assets/project.png";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="text-text mt-12 bg-dim py-8">
      <div className="section-container flex flex-col gap-6 md:flex-row">
        <div className="md:my-auto md:w-[35%]">
          <img
            src={ProjectImg}
            alt="ProjectImg"
            className="mx-auto h-64 rounded-lg object-cover md:max-h-96"
          />
        </div>
        <div className="space-y-4 text-center md:my-auto md:w-[65%] md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Let's Work Together!
          </h2>
          <p className="text-slate-600">
            I'm always excited to collaborate on new projects and opportunities.
            Whether you have a project in mind, need a developer, or just want
            to connect, I'd love to hear from you
          </p>
          <Link
            className="bg-text group mx-auto flex w-fit items-center gap-2 rounded-lg border-2 border-primary px-4 py-2 text-primary transition-all duration-300 hover:scale-105 md:mx-0"
            to="/contact"
          >
            Contact Me
            <FaArrowRight className="transition-all duration-300 group-hover:ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
