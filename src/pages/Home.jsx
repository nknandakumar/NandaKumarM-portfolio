import NavBar from './../components/NavBar';
import Hero from "../sections/Hero";
import About from "../sections/About"
import HeroImgs from '../components/HeroImgs';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Feats from '../sections/Feats';

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
    </div>
  )
}

export default Home