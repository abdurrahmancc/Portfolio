import React from "react";
import { FaUserTie } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import img from "../../assets/abdurrahman.jpg";
import "react-circular-progressbar/dist/styles.css";
import Skills from "./Skills";
import Introduction from "./Introduction";
import { Link } from "react-router-dom";

const skills = [
  { value: 100, name: "HTML" },
  { value: 100, name: "CSS" },
  { value: 80, name: ".NET Core" },
  { value: 100, name: ".Razor Pages" },
  { value: 70, name: "C#" },
  { value: 70, name: "MYSQL" },
  { value: 70, name: "MSSQL" },
  { value: 70, name: "PostgreSQL" },
  { value: 90, name: "JAVASCRIPT" },
  { value: 80, name: "TYPESCRIPT" },
  { value: 98, name: "REACT" },
  { value: 100, name: "REDUX" },
  { value: 80, name: "NODE" },
  { value: 95, name: "EXPRESS" },
  { value: 95, name: "MONGOOSE" },
  { value: 80, name: "NEXT" },
  { value: 100, name: "TAILWIND CSS" },
  { value: 90, name: "BOOTSTRAP" },
  { value: 90, name: "Material UI" },
  { value: 60, name: "Vue Js" },
  { value: 60, name: "Angular Js" },
  { value: 55, name: "React Native" },
  { value: 80, name: "Socket.io" },
  { value: 90, name: "Firebase" },
  { value: 90, name: "SEO" },
  { value: 90, name: "Google Ads" },
];

const About = () => {
  return (
    <div id="home-container" className="w-full max-h-full overflow-auto mx-auto p-10">
      <div className="w-full bg-accent rounded-3xl mx-auto">
        <div className="hero pt-20 rounded-3xl">
          <div>
            <section className="px-10">
              <h2 className="text-[2.57rem] justify-center leading-[3.28rem] mb-20 font-bold text-secondary items-center flex flex-row gap-3">
                <FaUserTie className="text-yellow-500" />
                <span> About Me</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-10 w-full">
                <div className="w-full">
                  <figure className="w-full">
                    <img src={img} className="w-full h-auto rounded-lg shadow-2xl" alt="my_image" />
                  </figure>
                </div>
                <div>
                  <h3 className="text-[2rem] pb-4 leading-[2.7rem] font-bold">
                    I am <span className="text-primary">Abdur Rahman</span>
                  </h3>
                  <p className=" pb-4 text-lg">
                    Full Stack Developer with 3+ years of professional experience specializing in .NET Core, React, Next.js,
                    Node.js, Vue, and Angular. Committed to delivering high-quality, cost-effective web solutions with a strong
                    focus on Quality, Clear Communication, and Integrity.
                  </p>
                  <Introduction />
                  <div className="flex justify-start mt-5">
                    <Link
                      to={"/resume"}
                      className="py-3 uppercase tracking-widest bg-primary rounded-sm px-14 text-secondary"
                    >
                      Resume
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-20 flex justify-center">
              <span className="w-[300px] block border-t border-[#6b6b6b34]"></span>
            </div>
            <section className="px-10 my-20">
              <h2 className="text-[2.57rem] justify-center leading-[3.28rem] mb-20 font-bold text-secondary items-center flex flex-row gap-3">
                <GiSkills className="text-yellow-500" />
                <span> MY SKILLS</span>
              </h2>
              <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12">
                {skills.map((skill, i) => (
                  <Skills key={i} skill={skill} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
