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
import Methodology from "../Components/Methodology";
import Projects from "../Components/Projects";
import ContactForm from "../Components/ContactForm";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-dim to-lite pt-24 md:pt-32">
        <div className="section-container flex flex-col pb-16 md:flex-row md:items-center">
          <div className="text-center md:w-2/3 md:text-left">
            <p className="text-2xl md:text-3xl">Hello,</p>
            <p className="text-3xl font-medium md:my-2 md:text-4xl lg:text-5xl">
              I am <span className="text-primary"> Gurkirat singh</span>
            </p>
            <p className="text-3xl font-medium md:text-4xl lg:text-5xl">
              A full stack <span className="text-primary">web developer </span>
            </p>
            <p className="mt-4 text-slate-600 lg:text-lg">
              I'm passionate about creating dynamic, responsive web applications
              that deliver an exceptional user experience. With expertise in
              both front-end and back-end technologies, I bring ideas to life
              through clean, efficient code. Let's build something amazing
              together.
            </p>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              <button className="group flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white duration-300 hover:scale-105">
                Hire me
                <span className="duration-300 group-hover:ml-1">
                  <FaArrowRight />
                </span>
              </button>
              <button className="group flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white duration-300 hover:scale-105">
                Projects
                <span className="duration-300 group-hover:ml-1">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="mx-auto">
            <img
              src={ProfilePic}
              alt="profile-pic"
              className="square mx-auto object-cover md:h-80 lg:h-96"
            />
            <div className="mt-6 flex justify-center gap-6 text-3xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                className="cursor-pointer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="cursor-pointer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <AboutMe />
      <Methodology />
      <CtaSection />

      <Projects />
      {/* <div className="mt-24"></div> */}
      <ContactForm />
    </>
  );
};

export default Home;
