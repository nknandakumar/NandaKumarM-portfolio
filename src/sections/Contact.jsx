import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_LINKS } from "../data";
const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="center flex flex-col items-center bg-black pb-20 relative text-white z-20 px-6 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-clash font-semibold text-[40px] md:text-[60px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 pt-20 mb-2"
      >
        Contact
      </motion.h2>

      <motion.blockquote
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xl italic font-semibold text-gray-900 dark:text-white text-center"
      >
        <p> <FontAwesomeIcon icon={faQuoteLeft} className="w-10 h-10 sm:w-10 sm:h-10 text-gray-400" /> I'm excited to connect with other developers and collaborate on projects or learn from experienced professionals. <FontAwesomeIcon icon={faQuoteRight} className="w-6 h-6 text-gray-400 sm:w-10 sm:h-10" /></p>
      </motion.blockquote>

      {/* Social Media Links with Staggered Animation */}
      <motion.div
        className="flex  space-x-4 sm:space-x-6 mt-8"
      >
        {SOCIAL_LINKS.map((link, index) => (
          <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400  hover:text-white transition duration-300"

        >
          <FontAwesomeIcon icon={link.icon} className="w-6 h-6 border rounded-full px-1 py-2 " />
        </a>
        ))}
      </motion.div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8 w-full max-w-2xl" />

      {/* Footer */}
      <span className="block text-sm font-satoshi text-gray-50 sm:text-center dark:text-gray-400">
        © {currentYear} Nanda Kumar M. All Rights Reserved.
      </span>
    </div>
  );
};

export default Contact;
