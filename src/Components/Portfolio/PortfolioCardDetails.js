import React from "react";
import { useParams } from "react-router-dom";
import { FaVideo, FaGithub } from "react-icons/fa";
import "./PortfolioCardDetails.css";
import portfolios from "../../fakeData/portfolios";

const PortfolioCardDetails = () => {
  const { id } = useParams();

  const project = portfolios.find((data) => data.id === id);
  const info = project?.technology.split(",");
  console.log(portfolios);
  return (
    <section className="container mx-auto mt-20  h-screen">
      <div className="max-w-[1300px] bg-accent rounded-3xl mx-auto">
        <div className="hero min-h-screen py-20 px-10 mx-auto">
          <div className="hero-content  lg:mt-0 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className={`p-12 bg-[#3b4b66] rounded-lg`}>
                <div
                  style={{ backgroundImage: `url(${project.img})` }}
                  className="w-full max-w-[450px] mx-auto bg-no-repeat h-screen object-cover bg-top hover:bg-bottom bg-black ease-linear duration-[20s]"
                ></div>
              </div>
              <div>
                <h4 className="text text-3xl font-bold text-secondary flex flex-row gap-3">
                  <span> {project?.name}</span>
                </h4>
                <p className="text-4xl font-bold"> </p>

                <p className="py-6 text-lg">{project?.description}</p>
                <div className="pb-8 my-6 ">
                  <h4 className="text-2xl font-bold capitalize text-secondary pb-2 border-b mb-6 border-gray-200">
                    Exists within the project
                  </h4>
                  <div>
                    {project?.exists?.map((data) => (
                      <li>{data}</li>
                    ))}
                  </div>
                </div>
                <div className="pb-8  mb-6 ">
                  <h4 className="text-2xl font-bold text-secondary pb-2 border-b mb-6 border-gray-200">
                    Technology Used
                  </h4>
                  <div className="grid justify-items-start  grid-cols-3 sm:grid-cols-4  gap-2">
                    {info &&
                      info.map((data) => (
                        <div className="px-2 text-center py-2 text-secondary bg-[rgb(30,41,59)] gap-2">
                          <span>{data}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="pb-8 mb-6">
                  <h4 className="text-2xl font-bold text-secondary pb-2 border-b mb-6 border-gray-200">
                    Links
                  </h4>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project?.liveSite}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-10 text-center py-2 text-secondary bg-[rgb(30,41,59)] ${project?.liveSite ? '' : 'hidden'} `}
                    >
                      <span className="flex justify-center items-center">
                        <FaVideo />
                        <span className="ml-2"> Live</span>
                      </span>
                    </a>
                    <a
                      href={project?.client}
                      className={`px-8 text-center py-2 text-secondary bg-[rgb(30,41,59)] ${project?.client ? '' : 'hidden'}`}
                    >
                      <span className="flex justify-center items-center">
                        <FaGithub />
                        <span className="ml-2"> Client</span>
                      </span>
                    </a>
                    <a
                      href={project?.server}
                      className={`px-8 text-center py-2 text-secondary bg-[rgb(30,41,59)] ${project?.server ? '' : 'hidden'}`}
                    >
                      <span className="flex justify-center items-center">
                        <FaGithub />
                        <span className="ml-2"> Server</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCardDetails;
