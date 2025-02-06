import NavBar from './../components/NavBar';
import Hero from "../sections/Hero";
import About from "../sections/About"
import HeroImgs from '../components/HeroImgs';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Feats from '../sections/Feats';
import Contact from "../sections/Contact"
const Home = () => {
  return (
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
  )
}

export default Home