import "./wordcard.css";
import { NavLink } from "react-router-dom";

const WordCard = (props) => {

  return (
    <>
      <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            <NavLink to={props.view} target="_blank" className="btn">
              VIEW
            </NavLink>
            <NavLink to="url.com" target="_blank" className="btn">
              SOURCE
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordCard;
