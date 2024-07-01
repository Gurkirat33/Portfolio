import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ProfilePic from "../assets/profile (1).png";
import AboutMe from "../Components/AboutMe";
import CtaSection from "../Components/CtaSection";
import Projects from "../Components/Projects";
import ContactForm from "../Components/ContactForm";
import { MethodologyData } from "../Data/Methodology";
import { Link } from "react-router-dom";

const Home = () => {
  const handleScrollDown = () => {
    const aboutPage = document.getElementById("about");
    window.scrollTo({
      top: aboutPage.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-gradient-to-br from-dim to-lite pt-6 md:pt-12">
        <div className="section-container flex flex-col pb-8 md:flex-row md:items-center">
          <div className="text-center md:w-2/3 md:text-left">
            <p className="text-2xl font-medium md:text-3xl">Hello,</p>
            <p className="text-3xl font-semibold md:my-2 md:text-4xl lg:text-5xl">
              I am <span className="text-primary"> Gurkirat singh</span>
            </p>
            <p className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              A full stack <span className="text-primary">web developer </span>
            </p>
            <p className="mt-4 text-slate-600 lg:text-lg">
              I'm passionate about developing dynamic, responsive web
              applications that provide an outstanding user experience. With
              proficiency in both front-end and back-end technologies, I bring
              innovative ideas to life through clean, efficient code. Let's
              collaborate and create something extraordinary together.
            </p>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              <Link
                className="group flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white duration-300 hover:scale-105"
                to="/contact"
              >
                Hire me
                <span className="duration-300 group-hover:ml-1">
                  <FaArrowRight />
                </span>
              </Link>
              <Link
                className="group flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white duration-300 hover:scale-105"
                to="/project"
              >
                Projects
                <span className="duration-300 group-hover:ml-1">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <img
              src={ProfilePic}
              alt="profile-pic"
              className="square mx-auto object-cover md:h-80 lg:h-[26rem]"
            />
            <div className="mt-6 flex justify-center gap-6 text-3xl">
              <a
                href="https://www.facebook.com/profile.php?id=100057386602373"
                target="_blank"
                className="cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/gurkirat-singh-938473244/"
                target="_blank"
                className="cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Gurkirat33"
                target="_blank"
                className="cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/_kirat044_"
                target="_blank"
                className="cursor-pointer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden py-4 md:block">
          <a
            className="mx-auto my-auto flex animate-spread cursor-pointer select-none items-center justify-center rounded-full bg-transparent pb-0.5"
            onClick={handleScrollDown}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              color="teal"
              className="rounded-full drop-shadow-[0px_15px_2px_#A34343] filter"
              height="60"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#A34343" }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <AboutMe />
      {/* Methodology */}
      <div className="section-container mt-12">
        <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          My Methodology for Success
        </h2>
        <p className="mx-auto mb-6 mt-2 max-w-2xl text-center text-slate-600 md:mt-4">
          Explore my structured approach to web development, meticulously
          crafted to tackle complexity with clarity and precision.
        </p>
        <div className="mx-auto max-w-2xl">
          {MethodologyData.map((item) => (
            <div key={item.id} className="flex flex-col p-1 text-center">
              <div className="flex items-center justify-center gap-4">
                <img
                  src={item.stepImg}
                  alt="stepImg"
                  className="pointer-events-none h-20 w-20 select-none object-contain"
                />
                <h3 className="select-none text-xl font-semibold tracking-wider md:text-2xl">
                  {item.heading}
                </h3>
              </div>
              <p>{item.desctiption}</p>
              {item.id != 4 ? (
                <img
                  src={item.arrowDownImg}
                  alt="arrowDownImg"
                  className="pointer-events-none mx-auto mt-2 h-16 w-16 select-none object-cover"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <CtaSection />
      </div>

      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
