import "./wordcard.css";
import WordCard from "./WordCard";
import ProjectData from "./WorkCradData";

const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectData.map((val, index)=>{
                return(
                    <WordCard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Work;
