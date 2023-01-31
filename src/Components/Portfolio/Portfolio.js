import React from "react";
import portfolios from "../../fakeData/portfolios";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <>
      <section className="w-full max-h-full overflow-auto mx-auto p-10">
        <div className="w-full bg-accent rounded-3xl mx-auto">
          <div className=" max-w-[1240px] mx-auto py-20">
            <div className="flex justify-center flex-col items-center pb-12">
              <h2 className="uppercase text-5xl font-bold text-center pb-2">my Projects</h2>
              <progress className="progress w-[350px] bg-primary h-[3px]"></progress>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1 xl:gap-y-10 xl:gap-x-5 lg:gap-3  justify-items-center">
              {portfolios.map((project) => (
                <ProjectCard key={project?.id} project={project}></ProjectCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
