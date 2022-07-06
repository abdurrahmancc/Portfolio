import React from "react";
import { FaAngleDown } from "react-icons/fa";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home-container" className="container mx-auto mt-20 h-screen">
        <div className="max-w-[1300px] bg-accent rounded-3xl mx-auto">
          <div className="hero min-h-screen bg-accent rounded-3xl">
            <div className="hero-content flex-col lg:flex-col ">
              <div className="mt-12 ">
                <img
                  src="https://codingindian.com/wp-content/uploads/2022/02/5-Must-have-project-management-skills-for-software-developers.jpg"
                  className="min-h-[600px]   image-full object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="">
                <h1 className="text-5xl  font-bold mt-12 text-center text-secondary">
                  Abdur Rahman
                </h1>
                <p className="py-6 uppercase text-lg text-center font-bold">
                  I am full <span className="text-primary">stack developer</span>
                </p>

                <div className="flex justify-center ">
                  <FaAngleDown className="text-5xl downArrow" title="Scroll Down" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio></Portfolio>
      </section>
    </>
  );
};

export default Home;
