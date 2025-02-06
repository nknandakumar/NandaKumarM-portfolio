import SplitText from "../components/SplitText";
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  return (
      <section id="home"  className="Hero-sec center px-2 flex-col bg-white py-52px space-y-6 md:px-20 md:pt-24px h-[100vh] sticky top-0 bg-[radial-gradient(circle,#80808070_1px,transparent_1px)] bg-[size:14px_14px]

  ">
      {/* Animated Presence for h2 */}
      <motion.h2
        className="font-clash text-[20px] md:text-[34px] lg:text-[52px] mb-2 font-semibold text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m Nanda Kumar M
      </motion.h2>

      {/* Infinite SplitText Animation for h1 */}
      <h1 className="font-clash font-bold text-center text-[42px] mt-4 md:text-[54px] lg:text-[72px] text-black  leading-[1.1] md:leading-[1]">
      <SplitText
          text="Full-stack  Web   Developer"
          className="inline-block"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0, 40px, 0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          easing="easeOutCubic"
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          infinite={false} // Enable infinite animation
        />
      </h1>



      {/* Animated Presence for p */}
      <motion.p
        className="font-satoshi font-semibold text-gray-600 text-center text-[18px] tracking-wider text-xl  leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Building websites that connect,
        <br className="sm:block md:hidden" /> engage,{" "}
        <br className="hidden md:block" />
        and deliver value
      </motion.p>

      {/* Animated Presence for button */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center pt-8 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
    <motion.a 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    href="#contact">
    <button className="font-clash flex items-center  font-stretch-75%   text-white  text-base leading-none px-6 py-2 rounded-3xl bg-orange text-[18px] hover:bg-blue transition-colors duration-300 group">
   
   {"Let's Connect"}
 
   <FontAwesomeIcon className='ml-6  font-thin transform  -rotate-45 transition-transform duration-300 group-hover:rotate-0' icon={faArrowRight} /> 
 </button>
    </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;