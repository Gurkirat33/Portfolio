import React from "react";
import ArrowDownStImg from "../assets/arrow-down-st.png";
import Step1 from "../assets/step1.png";

const Methodology = () => {
  return (
    <div className="section-container">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        My Methodology for Success
      </h2>
      <p className="mx-auto mb-6 mt-2 max-w-2xl text-center text-slate-600 md:mt-4">
        Explore our structured approach to web development, meticulously crafted
        to tackle complexity with clarity and precision.
      </p>
      <div>
        <img src={Step1} alt="" />
        <p className="text-center">Discovery and Analysis:</p>
        <p className="text-center">
          Understanding project goals and requirements is essential. I delve
          deep into client discussions, analyzing every detail to gain a
          comprehensive understanding of the project's scope and challenges.
        </p>
        <img
          src={ArrowDownStImg}
          alt=""
          className="mx-auto h-24 w-24 object-cover"
        />
      </div>
    </div>
  );
};

export default Methodology;
