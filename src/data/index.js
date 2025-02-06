// Importing project images
import jsProjectsImg from "../assets/images/projects/js-projects.avif";
import bcaNotesAppImg from "../assets/images/projects/bca-resource.avif";
import agencyImg from "../assets/images/projects/spark-studio.avif";

// Importing feats images
import hackathonImg from "../assets/images/feats/hackathon.avif";
import webDevCertImg from "../assets/images/feats/web-dev-certificate.avif";

// Navigation Items
export const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Feats", "Contact"];

// Projects Section
export const PROJECTS = [
  {
    id: 1,
    image: agencyImg,
    title: "Agency Landing Page",
    description: "A creative and responsive landing page for an imaginary agency.",
    techStack: ["React", "Tailwind CSS"],
    links: {
      github: "https://github.com/nknandakumar/SparkStudio",
      live: "https://spark-studio-nu.vercel.app/",
    },
  },
  {
    id: 2,
    image: jsProjectsImg,
    title: "30 Days, 30 JavaScript Projects",
    description: "A collection of real-world JavaScript projects to strengthen JS concepts.",
    techStack: ["JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/nknandakumar/30-Days-30-JS-Projects",
      live: "https://30-days-30-js-projects-ruby.vercel.app/",
    },
  },
  {
    id: 3,
    image: bcaNotesAppImg,
    title: "Full-Stack Notes App",
    description: "A resource hub containing question papers, notes, programs, and an AI chatbot.",
    techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/nknandakumar",
      live: "https://bca-resources.netlify.app/",
    },
  },
];

// Feats Section
export const FEATS = [
  {
    id: 1,
    image: hackathonImg,
    title: "🏆 Secured 3rd Place in Hackathon",
    description: "Built quizzes, clones, and projects within a limited timeframe.",
    details: {
      label: "College",
      value: "MS Ramaiah College, Bengaluru",
    },
  },
  {
    id: 2,
    image: webDevCertImg,
    title: "💻 Completed Full Stack Web Development Bootcamp",
    description: "This bootcamp laid the foundation for my web development journey.",
    details: {
      label: "Skills Gained",
      value: "React, Node.js, Express, PostgreSQL",
    },
  },
];
