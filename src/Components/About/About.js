import React from "react";
import { FaUserTie } from "react-icons/fa";
const About = () => {
  return (
    <section className="container mx-auto mt-20 h-screen">
      <div className="max-w-[1300px] bg-accent rounded-3xl mx-auto">
        <div className="hero min-h-screen px-10 mx-auto">
          <div className="hero-content gap-10 flex-col   lg:flex-row-reverse lg:mt-0 mt-12">
            <img
              src="https://i.ibb.co/n1DF5rG/abr.jpg"
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div>
              <h4 className="text text-4xl font-bold text-secondary flex flex-row gap-3">
                <FaUserTie className="text-yellow-500" />
                <span> About Me</span>
              </h4>
              <p className="text-4xl font-bold"> My name is Abdur Rahman</p>
              <p>
                <span>Email:</span> <span>abdurrahamn.offical.63@gmail.com</span>
              </p>
              <p className="py-6">
                {" "}
                <span> Skills: </span>
                <span> React.Js, JavaScript, NodeJs, HTML, CSS, bootstrap, tailwind,etc</span>
              </p>
              <div className="flex justify-end">
                <button className="btn text-secondary btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
