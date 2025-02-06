import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FRONTEND_SKILLS ,BACKEND_SKILLS , DB } from "../data";


AOS.init();

const Skills = () => {


  return (
    <section id="skills" className="bg-[#fbf4f4] flex-col py-20 md:py-32 w-[100%] px-6 md:px-12 min-h-screen flex items-center relative z-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="section-name"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
          {/** Front-End */}
          <div data-aos="fade-up" 
        
           data-aos-easing="ease-in-out"
     
          className="border-2 border-gray-500 font-second rounded-lg p-5">
            <h2 className="text-2xl font-satoshi font-semibold mt-[-38px] border-2 border-black bg-slate-50 mb-4">Frontend</h2>
            <span className="h-5 bg-black w-1"></span>
            <div className="grid grid-cols-2">
              {FRONTEND_SKILLS.map((skill, index) => (
                <span key={index} className={`skill ${skill.className}`}>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
          {/** Backend Section */}
          <div data-aos="fade-up"            data-aos-easing="ease-in-out" className="border-2 border-gray-500 font-second rounded-lg p-5">
            <h2 className="text-2xl font-satoshi font-semibold mt-[-38px] border-2 border-black bg-slate-50">Backend</h2>
            <span className="h-2 bg-black my-[-20px]">|</span>
            <div className="grid grid-cols-2">
            {BACKEND_SKILLS.map((skill, index) => (
                <span key={index} className={`skill ${skill.className}`}>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-satoshi font-semibold border-2 border-black bg-slate-50 my-4">Database</h2>
            <div className="grid grid-cols-2">
            {DB.map((skill, index) => (
                <span key={index} className={`skill ${skill.className}`}>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;