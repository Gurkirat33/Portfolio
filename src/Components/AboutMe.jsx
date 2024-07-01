import { useState } from "react";
import { AboutMeCatagoryData, AboutMeDescriptionData } from "../Data/AboutMe";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
  const [activeCatagory, setActiveCatagory] = useState(1);
  const activeDescription = AboutMeDescriptionData[activeCatagory - 1];
  const handleCatagoryClick = (id) => {
    setActiveCatagory(id);
    if (window.innerWidth <= 1024) {
      const rightSideDescription = document.getElementById(
        "right-side-description",
      );
      if (rightSideDescription) {
        window.scrollTo({
          top: rightSideDescription.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="section-container" id="about">
      <h1 className="mb-4 mt-4 text-center text-3xl font-bold uppercase text-primary md:mt-12 md:text-4xl lg:mb-12 lg:text-5xl">
        About me
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="space-y-6 lg:w-2/5">
          {AboutMeCatagoryData.map((catagory) => (
            <div
              key={catagory.id}
              className={`flex items-center gap-4 border-2 p-3 ${
                activeCatagory === catagory.id
                  ? "border-primary bg-slate-100"
                  : "border-white"
              } cursor-pointer`}
              onClick={() => handleCatagoryClick(catagory.id)}
            >
              <img
                src={catagory.icon}
                alt={catagory.heading}
                className="aspect-square w-20 sm:w-24"
              />
              <div>
                <h2
                  className={`text-2xl font-bold ${activeCatagory === catagory.id ? "text-primary" : ""}`}
                >
                  {catagory.heading}
                </h2>
                <p>{catagory.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-16 lg:w-3/5 lg:pt-0" id="right-side-description">
          <h2 className="mb-6 text-center text-3xl font-bold lg:text-left lg:text-4xl">
            {activeDescription.heading}
          </h2>
          <p className="mb-2 text-slate-600">
            {activeDescription.description1}
          </p>
          <p className="mb-4 text-slate-600">
            {activeDescription.description2}
          </p>
          <Link
            to={activeDescription.buttonInfo.link}
            className="group mx-auto flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white duration-300 hover:scale-105 lg:ml-0"
          >
            {activeDescription.buttonInfo.name}
            <span className="duration-300 group-hover:ml-1">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
