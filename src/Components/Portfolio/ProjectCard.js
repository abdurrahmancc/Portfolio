import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="card xl:max-w-[384px] max-w-xs w-full bg-base-100 shadow-xl">
        <div>
          <div
            style={{ backgroundImage: `url(${project.img})` }}
            className={`w-[400px] h-[300px] bg-top hover:bg-bottom bg-black ease-linear duration-[20s]`}
          ></div>
        </div>
        <div className="card-body bg-[rgb(17,24,39)]">
          <h4 className="text-lg font-bold text-secondary"> {project?.name}</h4>
          <p className="mb-10">
            {project.description.length >= 100
              ? project.description.slice(0, 160)
              : project.description}
            ...
          </p>
          <div className="card-actions justify-between">
            <div className="h-full flex justify-center items-center ">
              <a
                target="_blank"
                href={project.liveSite}
                rel="noopener noreferrer"
                className="text-secondary btn-primary rounded-full px-4 py-1 "
              >
                Live Site
              </a>
            </div>
            <div className="h-full flex justify-center rounded-full items-center ">
              <Link
                to={"/project-details/" + project.id}
                className="text-secondary btn-primary rounded-full px-4 py-1 "
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
