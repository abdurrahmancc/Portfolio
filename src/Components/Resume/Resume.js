import React from "react";
import file from "../../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className="max-w-[1300px]  rounded-3xl mx-auto">
        <object width="100%" className="h-screen bg-[#1E293B]" data={file} type="application/pdf">
          {" "}
        </object>
      </div>
    </section>
  );
};

export default Resume;
