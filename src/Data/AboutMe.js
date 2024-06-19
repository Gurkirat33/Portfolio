import EducationImg from "../assets/education.png";
import ProjectImg from "../assets/project.png";
import SkillsImg from "../assets/skills.png";

export const AboutMeCatagoryData = [
  {
    id: 1,
    icon: EducationImg,
    heading: "Education",
    description: "Explore my academic journey and qualifications",
  },
  {
    id: 2,
    icon: SkillsImg,
    heading: "Skills",
    description:
      "See the technologies I'm proficient in and have experience with",
  },
  {
    id: 3,
    icon: ProjectImg,
    heading: "Projects",
    description: "Discover the projects I've built to showcase my skills",
  },
];

export const AboutMeDescriptionData = [
  {
    heading: "My Education Background",
    description1:
      "My educational journey culminated in the successful completion of a Diploma in Computer Science Engineering from Guru Nanak Dev Polytechnical College. This immersive program provided me with a comprehensive understanding of computer science principles and practical applications.",
    description2:
      "Through coursework focusing on subjects such as programming languages, data structures, and database management, I acquired the foundational knowledge necessary for a career in technology. Engaging in hands-on projects and collaborative initiatives honed my problem-solving abilities and fostered a creative approach to challenges. My time at Guru Nanak Dev Polytechnical College not only solidified my technical expertise but also instilled in me a lifelong commitment to continuous learning and innovation in the dynamic field of computer science engineering",
    buttonInfo: {
      name: "Explore more",
      link: "/explore",
    },
  },
  {
    heading: "Technical Skills",
    description1:
      "As a proficient MERN stack developer, I specialize in creating dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. My expertise extends to styling modern interfaces with Tailwind CSS, ensuring both aesthetics and functionality in my projects. I am committed to delivering high-quality, user-friendly applications.",
    description2:
      "In addition to my core development skills, I am well-versed in version control with Git and GitHub, which allows me to manage code effectively and collaborate with teams efficiently. I also have experience with Docker for containerization, enhancing application scalability and deployment. My knowledge of Zod helps maintain robust data validation across projects, ensuring data integrity and reliability.",
    buttonInfo: {
      name: "Explore skills",
      link: "/skills",
    },
  },
  {
    heading: "Project Highlights",
    description1:
      "I have worked on several projects that demonstrate my skills as a MERN stack developer. Through these projects, I have gained practical experience in building responsive and dynamic web applications, implementing user authentication, managing databases, and deploying applications. These projects have also enhanced my proficiency in using tools like Git, GitHub, Docker, and Zod for code management, containerization, and data validation.",
    description2: "Project examples include: ",
    buttonInfo: {
      name: "Explore my projects",
      link: "/projects",
    },
  },
];
