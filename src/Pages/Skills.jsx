import { SkillsData } from "../Data/Skills";

const Skills = () => {
  return (
    <div className="section-container pt-6 md:pt-12">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Discover My Skillset
      </h2>
      <p className="mx-auto my-4 max-w-2xl text-center text-slate-600">
        Explore the range of skills and expertise I bring to the table. From
        front-end design to back-end development and essential tools, see how I
        turn ideas into reality with clean, efficient code and innovative
        solutions.
      </p>
      <div>
        {/* <h4 className="text-center text-2xl font-medium">Skills</h4> */}
        <div className="mx-auto max-w-3xl space-y-4">
          {SkillsData.map((skill) => (
            <div
              key={skill.heading}
              className="rounded-lg bg-gradient-to-br from-dim to-lite p-4"
            >
              <h3 className="mt-3 text-center text-2xl font-semibold">
                {skill.heading}
              </h3>
              <p className="mb-6 mt-4 text-center">{skill.description}</p>
              <div className="flex flex-wrap justify-center gap-6">
                {skill.skill.map((item) => (
                  <div
                    key={item.name}
                    className="text-center duration-300 hover:scale-105"
                  >
                    <img
                      src={item.image}
                      alt="skillImg"
                      className="mx-auto h-16 w-16 rounded-lg object-cover"
                    />
                    <p className="mt-1 font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
