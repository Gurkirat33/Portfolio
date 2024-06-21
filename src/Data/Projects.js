import ProjectImg1 from "../assets/Project-Images/Project1/pic1.png";
import ProjectImg2 from "../assets/Project-Images/Project1/pic2.png";
import ProjectImg3 from "../assets/Project-Images/Project1/pic3.png";
import ProjectImg4 from "../assets/Project-Images/Project1/pic4.png";

export const ProjectPreviewData = [
  {
    projectImg: "",
    stepInfo: "",
    heading: "",
    description: "",
    link: "", //This link should be same as ProjectDetailedInfoData.key
  },
];

export const ProjectDetailedInfoData = {
  blog: {
    // This id should be same as ProjectPreviewData.link
    projectImages: [],
    githubLink: "",
    description: "hello",
    heading: "",
    description: "",
    catagory: "",
    techStack: [],
  },
};

export const homePageProjectsData = [
  {
    description: "See what i have done over the years",
  },
  {
    projectImg: ProjectImg1,
    stepInfo: "Demo content",
    heading: "Demo project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi voluptates voluptatibus qui culpa dolore aliquid repellat esse aliquam, facilis tempore? 1",
    link: "", //This link should be same as ProjectDetailedInfoData.key
  },
  {
    projectImg: ProjectImg2,
    stepInfo: "Demo content",
    heading: "Demo project 2",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi voluptates voluptatibus qui culpa dolore aliquid repellat esse aliquam, facilis tempore? 2 so i  need to write more words to cover up the space so it looks good? still a  lot to go lot to golot to golot to golot to golot to golot to golot to go",
    link: "", //This link should be same as ProjectDetailedInfoData.key
  },
  {
    projectImg: ProjectImg3,
    stepInfo: "Demo content",
    heading: "Demo project 3",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi voluptates voluptatibus qui culpa dolore aliquid repellat esse aliquam, facilis tempore? 3",
    link: "", //This link should be same as ProjectDetailedInfoData.key
  },
  {
    projectImg: ProjectImg4,
    stepInfo: "Demo content",
    heading: "Demo project 4",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi voluptates voluptatibus qui culpa dolore aliquid repellat esse aliquam, facilis tempore? 3",
    link: "", //This link should be same as ProjectDetailedInfoData.key
  },
  {
    description: "See what i have done over the years",
  },
];
