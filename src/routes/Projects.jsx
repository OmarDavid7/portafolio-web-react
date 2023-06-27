import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";


const Projects = ()=>{
    return(
        <>
        <Navbar/>
        <HeroImg2 heading="PROJECTS." text="Some of my recent work"/>    
        <Work/>
        <PricingCard/>
        <Footer/>
        </>
    )
}

export default Projects;