import NavBar from './../components/NavBar';
import Hero from "../sections/Hero";
import About from "../sections/About"
import HeroImgs from '../components/HeroImgs';

const Home = () => {
  return (
    <div>
      <NavBar/>
        <Hero/>
        <HeroImgs/>
        <About/>
    </div>
  )
}

export default Home