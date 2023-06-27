import "./heroimg.css";
import imageintro from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img  className="into-img" src={imageintro} alt="imagen de fondo" />
        </div>
        <div className="content">
          <p>HI, I'M FREELANCER</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;
