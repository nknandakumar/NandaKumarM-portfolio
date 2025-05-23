// Importing project images
import jsProjectsImg from "../assets/Images/projects/jsProjects.avif";
import bcaNotesAppImg from "../assets/Images/projects/bcaResource.avif";
import agencyImg from "../assets/Images/projects/spark-studio.avif";

// Importing feats images
import hackathonImg from "../assets/Images/feats/Hackathon1.avif";
import webDevCertImg from "../assets/Images/feats/WebDevCertificate.avif";

// Navigation Items
export const NAV_ITEMS = [
	"Home",
	"About",
	"Skills",
	"Projects",
	"Feats",
	"Contact",
];

//Skills Section
//-- Font end
export const FRONTEND_SKILLS = [
	{ name: "HTML", className: "html" },
	{ name: "CSS", className: "css" },
	{ name: "JavaScript", className: "js" },
	{ name: "React", className: "react" },
	{ name: "Tailwind CSS", className: "tcss" },
	{ name: "Redux", className: "redux" },
];
//-- Back end
export const BACKEND_SKILLS = [
	{ name: "Node Js", className: "node" },
	{ name: "Express Js", className: "express" },
];
//-- Data Base
export const DB = [
	{ name: "SQL", className: "sql" },
	{ name: "Postgres SQL", className: "psql" },
];

// Projects Section
export const PROJECTS = [
	{
		id: 1,
		image: `https://ik.imagekit.io/6b0su29zd/Screenshot%202025-04-25%20125931.png?updatedAt=1745566224153`,
		title: "LabSet - Programming Lab Assistant",
		description:
			"A comprehensive web application that consolidates programming lab resources for students. LabSet provides CMA and Python programs with live previews, AI explanations, and code editing capabilities in one accessible platform, eliminating the need for scattered PDFs and files.",
		techStack: ["React","Tailwind", "Gemini AI API" ,"Node" ],
		links: {
			github: "https://github.com/nknandakumar/labprogramsapp",
			live: "https://labset.netlify.app/",
		},
	},
	{
		id: 2,
		image: agencyImg,
		title: "Agency Landing Page",
		description:
			"A creative and responsive landing page for an imaginary agency.",
		techStack: ["React", "Tailwind CSS"],
		links: {
			github: "https://github.com/nknandakumar/SparkStudio",
			live: "https://spark-studio-nu.vercel.app/",
		},
	},
	{
		id: 3,
		image: jsProjectsImg,
		title: "30 Days, 30 JavaScript Projects",
		description:
			"A collection of real-world JavaScript projects to strengthen JS concepts.",
		techStack: ["JavaScript", "HTML", "CSS"],
		links: {
			github: "https://github.com/nknandakumar/30-Days-30-JS-Projects",
			live: "https://30-days-30-js-projects-ruby.vercel.app/",
		},
	},
	{
		id: 4,
		image: bcaNotesAppImg,
		title: "Full-Stack Notes App",
		description:
			"A resource hub containing question papers, notes, programs, and an AI chatbot.",
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
		description:
			"Built quizzes, clones, and projects within a limited timeframe.",
		details: {
			label: "College",
			value: "MS Ramaiah College, Bengaluru",
		},
	},
	{
		id: 2,
		image: webDevCertImg,
		title: "💻 Completed Full Stack Web Development Bootcamp",
		description:
			"This bootcamp laid the foundation for my web development journey.",
		details: {
			label: "Skills Gained",
			value: "React, Node.js, Express, PostgreSQL",
		},
	},
];

// Social Links Data

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faXTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const SOCIAL_LINKS = [
	{
		href: "mailto:nandakumar.m.dev@gmail.com",
		icon: faEnvelope,
		label: "Email",
	},
	{
		href: "https://www.linkedin.com/in/nanda-kumar-m-852411339/",
		icon: faLinkedin,
		label: "LinkedIn",
	},
	{ href: "https://github.com/nknandakumar", icon: faGithub, label: "GitHub" },
	{
		href: "https://www.instagram.com/nandakumar__05/",
		icon: faInstagram,
		label: "Instagram",
	},
	{
		href: "https://x.com/NandaKumarM_dev",
		icon: faXTwitter,
		label: "Twitter (X)",
	},
];
