import { motion } from 'framer-motion';
import ProfileImage from "../assets/Images/profileImage.jpg"
const AnimatedText = ({ text, className, delay = 0 }) => {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordAnimation = {
    hidden: { 
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={wordAnimation}
        >
          {word}
          <span className="inline-block w-2" /> {/* Adds space between words */}
        </motion.span>
      ))}
    </motion.p>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-[#121212] text-gray-300 py-20 md:py-32 w-full px-6 md:px-12 min-h-screen flex items-center relative z-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-clash font-semibold text-[40px] md:text-[60px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
          >
            About Me
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={ProfileImage}
                alt="Nanda Kumar M" 
                className="w-full h-[350px] md:h-[400px] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content with Animation */}
          <div className="flex flex-col font-satoshi space-y-6 md:pl-4">
            <AnimatedText 
              text="Hi, I'm Nanda Kumar M, a full-stack web developer based in India. I specialize in crafting efficient and engaging web applications that deliver value."
              className="text-lg leading-relaxed text-gray-400"
              delay={0.2}
            />
         
            <AnimatedText 
              text="Passionate about tech, I thrive on creating, developing, and adapting to challenges with a tech-savvy mindset and a drive for innovation."
              className="text-lg leading-relaxed text-gray-400"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;