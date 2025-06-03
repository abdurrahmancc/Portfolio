import React from "react";
import file from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <section id="home-container" className="w-full mx-auto p-4 min-h-screen">
      <div className="w-full h-full bg-accent rounded-3xl">
        <div className="hero bg-accent rounded-3xl h-full">
          <div className="hero-content flex-col max-w-[920px] w-full">
            <div className="w-full max-w-[920px] h-[80vh]">
              <object
                className="w-full h-full"
                data={file}
                type="application/pdf"
              >
                <p>Your browser does not support PDFs. <a href={file}>Download PDF</a></p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

