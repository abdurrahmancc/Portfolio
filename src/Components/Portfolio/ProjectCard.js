import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className={`${project.id != 1 && "hidden"}`}>
          <div
            className={`w-[400px] h-[300px]  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/cvBLk7K/aws.jpg')] bg-black ease-in-out  duration-[1s]`}
          ></div>
        </div>
        <div className={`${project.id != 2 && "hidden"}`}>
          <div
            className={`w-[400px] h-[300px]  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/vBQT6hP/tcollection.jpg')] bg-black ease-in-out  duration-[1s]`}
          ></div>
        </div>
        <div className={`${project.id != 3 && "hidden"}`}>
          <div
            className={`w-[400px] h-[300px]  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/YTYXqz2/Untitled-2.jpg')] bg-black ease-in-out  duration-[1s]`}
          ></div>
        </div>
        <div className={`${project.id != 4 && "hidden"}`}>
          <div
            className={`w-[400px] h-[300px]  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/6N1PVR2/portfolio3.jpg')] bg-black ease-in-out  duration-[1s]`}
          ></div>
        </div>

        <div className="card-body bg-[rgb(17,24,39)]">
          <h4 className="text-lg font-bold text-secondary"> {project?.name}</h4>
          <p className="mb-10">
            {project.description.length >= 100
              ? project.description.slice(0, 170)
              : project.description}
            ...
          </p>
          <div className="card-actions justify-between">
            <div className="hover:bg-[rgba(0,0,0,.7)]  h-full flex justify-center items-center ">
              <a
                target="_blank"
                href={project.liveSite}
                className="text-secondary  btn-primary rounded-full px-4 py-1 "
              >
                Live Site
              </a>
            </div>
            <div className="hover:bg-[rgba(0,0,0,.7)]  h-full flex justify-center items-center ">
              <Link
                to={"/project-details/" + project.id}
                className="text-secondary  btn-primary rounded-full px-4 py-1 "
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
