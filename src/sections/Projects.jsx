import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../data";

const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center bg-black pb-28 relative z-20 px-6 lg:px-36   "
		>
			{/* Section Title Animation */}
			<motion.h2

        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
				className="section-name pt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300"
			>
				Projects
			</motion.h2>

			{/* Staggered Grid Animation */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					visible: {
						transition: { staggerChildren: 0.3 }, // Delay between each card
					},
				}}
				className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:gap-6 mt-6">
			
				{PROJECTS.map((project) => (
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
						}}
            
						key={project.id}
						className="w-full sticky border-4 border-white top-0 max-w-xs sm:mb-7 sm:max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-2xl group hover:shadow-2xl transition-shadow duration-300 bg-[radial-gradient(circle,#80808040_1px,transparent_1px)] bg-[size:14px_14px] "
					>
						{/* Image Section */}
						<div className="">
							<div className="w-full rounded-tl-2xl  rounded-tr-2xl overflow-hidden  ">
								<img
									src={project.image}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Project Thumbnail"
								/>
							</div>
						</div>
            <hr />
          	{/* Content */}
						<div className=" p-5 ">
						
							<h3 className="text-xl font-clash md:text-2xl font-semibold text-gray-800 mt-4">
								{project.title}
							</h3>

							{/* Project Description */}
							<p className="mt-2 text-gray-600 font-satoshi text-md">
								{project.description}
							</p>

							{/* Tags */}
							<div className="flex gap-2 mt-3 font-satoshi text-sm overflow-hidden flex-wrap">
								{project.techStack.map((stack, index) => (
									<span
										key={index}
										className="px-3 py-1 rounded-md bg-gray-200 text-gray-700"
									>
										{stack}
									</span>
								))}
							</div>

							{/* Buttons */}
							<div className="flex font-clash gap-3 mt-4">
								<a href={project.links.github} target="_blank" rel="noopener noreferrer">
									<button className="flex items-center px-4 py-2 text-sm md:text-base rounded-xl bg-orange font-bold hover:bg-blue transition duration-300">
										GitHub
										<FontAwesomeIcon
											className="ml-2 font-thin transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
											icon={faArrowRight}
										/>
									</button>
								</a>
								<a href={project.links.live} target="_blank" rel="noopener noreferrer">
									<button className="flex items-center px-4 py-2 text-sm md:text-base text-white font-medium rounded-xl bg-gray-900 hover:bg-gray-800 transition">
										View
										<FontAwesomeIcon
											className="ml-2 font-thin transform -rotate-45 transition-transform duration-300 group-hover:rotate-0"
											icon={faArrowRight}
										/>
									</button>
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Projects;
