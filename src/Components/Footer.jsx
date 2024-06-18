import { Link } from "react-router-dom";
import { NavbarData } from "../Data/Navbar";
import ProfileImg from "../assets/Untitled design.png";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterData } from "../Data/Footer";

const Footer = () => {
  return (
    <div className="bg-primary pt-4 text-white">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <img
            src={ProfileImg}
            alt=""
            className="h-20 w-20 rounded-full object-cover"
          />
          <p className="mt-2 text-xl font-medium">Gurkirat singh</p>
          <div className="mt-6 flex gap-4">
            {NavbarData.map((item) => (
              <Link
                to={item.link}
                key={item.name}
                className="link-effect-white capitalize decoration-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mb-6 mt-4 flex flex-col gap-4 md:mt-2 md:flex-row">
            {FooterData.map((item) => (
              <Link
                to={item.link}
                key={item.name}
                className="link-effect-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 border-t-2 py-6 text-center md:flex-row md:justify-between">
          <p>
            All rights reserved <span> &copy; 2024</span>
          </p>
          <div className="flex justify-center gap-6 text-3xl">
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
          <p>Developed by Gurkirat Singh</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
