import BlogImg1 from "../assets/Project-Images/Blog/pic1.png";
import BloodDonationImg1 from "../assets/Project-Images/BloodDonation/pic1.png";
import QuizAppImg2 from "../assets/Project-Images/QuizApp/pic2.png";
import BlogImg2 from "../assets/Project-Images/Blog/pic2.png";
import BlogImg3 from "../assets/Project-Images/Blog/pic3.png";
import BlogImg4 from "../assets/Project-Images/Blog/pic4.png";
import BlogImg5 from "../assets/Project-Images/Blog/pic5.png";
import BloodDonationImg2 from "../assets/Project-Images/BloodDonation/pic2.png";
import BloodDonationImg3 from "../assets/Project-Images/BloodDonation/pic3.png";
import BloodDonationImg4 from "../assets/Project-Images/BloodDonation/pic4.png";
import QuizAppImg1 from "../assets/Project-Images/QuizApp/pic1.png";
import QuizAppImg3 from "../assets/Project-Images/QuizApp/pic3.png";
import QuizAppImg4 from "../assets/Project-Images/QuizApp/pic4.png";
import QuizAppImg5 from "../assets/Project-Images/QuizApp/pic5.png";
import PasswordImg1 from "../assets/Project-Images/passwordGenerator/pic1.png";
import PasswordImg2 from "../assets/Project-Images/passwordGenerator/pic2.png";
import QuizJs1 from "../assets/Project-Images/quizJs/pic1.png";
import QuizJs2 from "../assets/Project-Images/quizJs/pic2.png";
import QuizJs3 from "../assets/Project-Images/quizJs/pic3.png";
import BudgetApp1 from "../assets/Project-Images/budgetApp/pic1.png";
import BudgetApp2 from "../assets/Project-Images/budgetApp/pic2.png";
import BudgetApp3 from "../assets/Project-Images/budgetApp/pic3.png";
import Ecom1 from "../assets/Project-Images/EcommerceLandingPage/pic1.png";
import Ecom2 from "../assets/Project-Images/EcommerceLandingPage/pic2.png";
import Ecom3 from "../assets/Project-Images/EcommerceLandingPage/pic3.png";
import Ecom4 from "../assets/Project-Images/EcommerceLandingPage/pic4.png";

export const ProjectPreviewData = [
  {
    title: "Blog Website",
    description:
      "A comprehensive blog platform with an admin panel for managing posts, categories, and user comments. It features structured content and intuitive navigation for both readers and administrators.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: BlogImg1,
    link: "/project/blog",
    category: "Full Stack",
  },
  {
    title: "Blood Donation Website",
    description:
      "A platform that facilitates blood donation by allowing users to either request or donate blood. It includes real-time communication features to connect donors and recipients.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: BloodDonationImg1,
    link: "/project/bloodDonation",
    category: "Full Stack",
  },
  {
    title: "AI Quiz Generator",
    description:
      "An innovative quiz application powered by AI, allowing users to generate quizzes on any topic of interest. It features dynamic question fetching, user authentication, and personalized quiz experiences.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    imageUrl: QuizAppImg2,
    link: "/project/aiQuiz",
    category: "Full Stack",
  },
  {
    title: "Password Generator",
    description:
      "A simple yet effective password generator that helps users create secure passwords. It includes options for length, complexity, and character types.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: PasswordImg1,
    link: "/project/passwordGenerator",
    category: "Frontend",
  },
  {
    title: "Budget App",
    description:
      "A user-friendly budget application designed to help users track their income and expenses. It features intuitive input forms and detailed financial summaries.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: BudgetApp1,
    link: "/project/budgetApp",
    category: "Frontend",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application that allows users to take quizzes on various topics. It includes multiple question types and real-time feedback.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: QuizJs1,
    link: "/project/quizApp",
    category: "Frontend",
  },
  {
    title: "E-commerce Landing Page",
    description:
      "A visually appealing e-commerce landing page designed to attract and convert visitors. It features product highlights, promotional banners, and a user-friendly layout.",
    technologies: ["HTML", "CSS"],
    imageUrl: Ecom1,
    link: "/project/ecommerceLanding",
    category: "Frontend",
  },
];

export const ProjectDetailedInfoData = {
  blog: {
    projectImages: [BlogImg1, BlogImg2, BlogImg3, BlogImg4, BlogImg5],
    githubLink: "https://github.com/Gurkirat33/mern-blog",
    heading: "Blog with Admin Dashboard",
    description:
      "A full-stack blog platform built with the MERN stack, featuring a robust admin dashboard for content management. Users can create, edit, and delete blog posts, with secure authentication and authorization controls.",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "Tailwind CSS",
    ],
    highlights: [
      "Admin dashboard for easy content management.",
      "User authentication and authorization with JWT.",
      "Responsive design for optimal viewing on all devices.",
      "Integration of Redux for state management.",
      "RESTful API architecture for efficient data handling.",
    ],
    learnings: [
      "Enhanced understanding of MERN stack technologies.",
      "Improved skills in front-end design and state management.",
      "Experience with implementing complex backend functionalities.",
    ],
  },
  bloodDonation: {
    projectImages: [
      BloodDonationImg1,
      BloodDonationImg2,
      BloodDonationImg3,
      BloodDonationImg4,
    ],
    githubLink: "https://github.com/Gurkirat33/blooddonation",
    heading: "Blood Donation Platform",
    description:
      "A platform that facilitates blood donation by allowing users to either request or donate blood. It includes real-time communication features to connect donors and recipients.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    highlights: [
      "Users can either request or donate blood.",
      "Real-time conversations between donors and recipients.",
      "User authentication and secure data handling.",
      "Location-based matching of donors and recipients.",
      "Notification system to alert users of requests and donations.",
    ],
    learnings: [
      "Gained experience in building real-time applications using Socket.io.",
      "Enhanced skills in building secure authentication systems.",
      "Improved understanding of location-based services.",
    ],
  },
  aiQuiz: {
    projectImages: [
      QuizAppImg2,
      QuizAppImg1,
      QuizAppImg3,
      QuizAppImg4,
      QuizAppImg5,
    ],
    githubLink: "https://github.com/Gurkirat33/Quiz-App",
    heading: "AI Quiz Generator",
    description:
      "An AI-powered quiz generator that allows users to create and take quizzes on any topic. The application uses large language models to generate questions and evaluate answers.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    highlights: [
      "AI-powered question generation and answer evaluation.",
      "Customizable quiz topics and difficulty levels.",
      "User authentication and progress tracking.",
      "Responsive design for an optimal user experience on all devices.",
      "Integration with the Gemini API.",
    ],
    learnings: [
      "Enhanced understanding of AI and natural language processing.",
      "Improved skills in integrating third-party APIs.",
      "Experience with building dynamic and interactive web applications.",
    ],
  },
  passwordGenerator: {
    projectImages: [PasswordImg1, PasswordImg2],
    githubLink: "https://github.com/YourUsername/password-generator",
    heading: "Password Generator",
    description:
      "A simple yet effective password generator that helps users create secure passwords. It includes options for length, complexity, and character types.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Generate secure passwords with customizable length and complexity.",
      "Options for including numbers, symbols, and uppercase letters.",
      "Responsive design for use on both desktop and mobile devices.",
    ],
    learnings: [
      "Deepened understanding of JavaScript string manipulation.",
      "Enhanced skills in responsive design using pure CSS.",
      "Gained experience in creating user-friendly input forms.",
    ],
  },
  budgetApp: {
    projectImages: [BudgetApp1, BudgetApp2, BudgetApp3],
    githubLink: "https://github.com/YourUsername/budget-app",
    heading: "Budget App",
    description:
      "A user-friendly budget application designed to help users track their income and expenses. It features intuitive input forms and detailed financial summaries.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Track income and expenses with ease.",
      "Visual representation of financial data.",
      "Responsive design for optimal use on various devices.",
    ],
    learnings: [
      "Improved understanding of DOM manipulation and event handling in JavaScript.",
      "Developed skills in creating interactive and dynamic web applications.",
      "Gained experience in designing user-friendly interfaces.",
    ],
  },
  quizApp: {
    projectImages: [QuizJs1, QuizJs2, QuizJs3],
    githubLink: "https://github.com/YourUsername/quiz-app",
    heading: "Quiz App",
    description:
      "An interactive quiz application that allows users to take quizzes on various topics. It includes multiple question types and real-time feedback.",
    techStack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Support for multiple question types (e.g., multiple choice, true/false).",
      "Real-time feedback on quiz performance.",
      "Responsive design for optimal user experience on all devices.",
    ],
    learnings: [
      "Enhanced knowledge of JavaScript for dynamic content generation.",
      "Improved skills in designing interactive user interfaces.",
      "Experience in implementing real-time feedback mechanisms.",
    ],
  },
  ecommerceLanding: {
    projectImages: [Ecom1, Ecom2, Ecom3, Ecom4],
    githubLink: "https://github.com/YourUsername/ecommerce-landing-page",
    heading: "E-commerce Landing Page",
    description:
      "A visually appealing e-commerce landing page designed to attract and convert visitors. It features product highlights, promotional banners, and a user-friendly layout.",
    techStack: ["HTML", "CSS"],
    highlights: [
      "Showcases featured products and promotions.",
      "Clean and attractive design to engage visitors.",
      "Fully responsive layout for optimal viewing on any device.",
    ],
    learnings: [
      "Gained experience in creating visually appealing designs using CSS.",
      "Improved skills in responsive web design.",
      "Enhanced understanding of user experience and conversion optimization.",
    ],
  },
};
