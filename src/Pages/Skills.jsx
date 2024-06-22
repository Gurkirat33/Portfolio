import { SkillsData } from "../Data/Skills";

const Skills = () => {
  return (
    <div className="section-container pt-24">
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
        <h4 className="text-center text-2xl font-medium">Skills</h4>
        <div className="mx-auto max-w-xl space-y-4">
          {SkillsData.map((skill) => (
            <div key={skill.heading}>
              <h3 className="my-3 border-2 text-center text-2xl font-medium">
                {skill.heading}
              </h3>
              <p>{skill.description}</p>
              <div className="flex gap-2">
                {skill.skill.map((item) => (
                  <div key={item.name}>
                    <p key={item}>{item.name}</p>
                    <img
                      src={item.image}
                      alt="skillImg"
                      className="border-23 w-20 rounded-lg"
                    />
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
