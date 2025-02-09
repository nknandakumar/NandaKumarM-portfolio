import NavBar from './../components/NavBar';
import Hero from "../sections/Hero";
import About from "../sections/About"
import HeroImgs from '../components/HeroImgs';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Feats from '../sections/Feats';
import Contact from "../sections/Contact"
import { motion ,useScroll } from "motion/react"

const Home = () => {
  const { scrollYProgress } = useScroll()
  return (
  < >
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 15,
                    originX: 0,
                   
                }}
                className='mb-10 z-50 bg-pink-400 border-b-2 progress border-black'
            />
  <div>
      <NavBar/>
        <Hero/>
        <HeroImgs/>
        <About/>
        <Skills/>
        <Projects/>
        <Feats/>
        <Contact/>
    </div>
  </>
  )
}

export default Home