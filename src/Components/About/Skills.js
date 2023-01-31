import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Skills = ({ skill }) => {
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 125, height: 125 }}>
        <CircularProgressbar
          value={skill?.value}
          text={`${skill?.value}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 1,
            pathColor: `rgba(255, 101, 28)`,
            textColor: "#f1f1f1",
            trailColor: "#111827",
            backgroundColor: "#fff",
          })}
        />
      </div>
      <span className="text-lg font-semibold mt-3">{skill?.name}</span>
    </div>
  );
};

export default Skills;
