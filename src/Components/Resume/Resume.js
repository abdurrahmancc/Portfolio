import React from "react";
import file from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <section id="home-container" className="w-full mx-auto p-10 h-screen">
      <div className="w-full h-full bg-accent rounded-3xl mx-auto">
        <div className="hero h-full bg-accent rounded-3xl">
          <div className="hero-content flex-col lg:flex-col ">
            <object
              width="100%"
              height="100%"
              className="lg:w-[500px] xl:w-[920px] h-full"
              data={file}
              type="application/pdf"
            >
              {" "}
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
