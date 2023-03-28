import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home-container" className="w-full mx-auto p-10 h-screen">
        <div className="w-full h-full bg-accent rounded-3xl mx-auto">
          <div className="hero h-full bg-accent rounded-3xl">
            <div className="hero-content flex-col lg:flex-col ">
              <div className="">
                <h1 className="text-5xl font-semibold mt-12 text-center ">
                  Hi, I'm <span className="text-primary">Abdur Rahman</span>
                </h1>
                <p className="py-6 text-center text-lg">
                  I am full stack developer. I can provide clean code and pixel perfect design. I
                  also make websites more & <br /> more interactive with web animations.
                </p>

                <div className="flex justify-center gap-5  ">
                  <a
                    href={"https://github.com/abdurrahmancc?tab=repositories"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-11 h-11 flex justify-center items-center bg-[#14181f] border-[#7f8083b7] rounded-full border hover:border-primary text-[#a4acc4] hover:text-primary transition ease-linear"
                  >
                    <FaGithub className="text-lg" />
                  </a>

                  <a
                    href={"https://www.linkedin.com/in/abdur-rahman-2307101a3/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-11 h-11 flex justify-center items-center bg-[#14181f] border-[#7f8083b7] rounded-full border hover:border-primary text-[#a4acc4] hover:text-primary transition ease-linear"
                  >
                    <FiLinkedin className="text-lg" />
                  </a>
                  <a
                    href={"https://www.facebook.com/mdabdurrahmancc1/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-11 h-11 flex justify-center items-center bg-[#14181f] border-[#7f8083b7] rounded-full border hover:border-primary text-[#a4acc4] hover:text-primary transition ease-linear"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
