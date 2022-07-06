import axios from "axios";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      id: "1",
      name: "T-COLLECTION",
      img: "https://i.ibb.co/vBQT6hP/tcollection.jpg",
      brand: "A Independent Service Provider Website",
      liveSite: "https://t-collection-eaf74.firebaseapp.com/",
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT Token,Express.js ",
      description:
        "This is a full-stack responsive react project where dealers can buy car tyres. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.",
    },
    {
      id: "2",
      name: "CARLE HOUSE",
      img: "https://i.ibb.co/6N1PVR2/portfolio3.jpg",
      brand: "A Inventory Manager Website",
      liveSite: "https://carle-warehouse.firebaseapp.com/",
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT Token,Express.js ",
      description:
        "This is a car warehouse-related website. Here traders or general users can buy cars. They can order each car individually. Admins can also add cars. Admins can see all the car products page. Admin can delete the product at will.",
    },
    {
      id: "3",
      name: "Doctors Portal",
      img: "https://i.ibb.co/6N1PVR2/portfolio3.jpg",
      brand: "A Inventory Manager Website",
      liveSite: "https://doctors-portal-eedf2.firebaseapp.com/",
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT Token,Express.js ",
      description:
        "This is a clinic-related website. Patients can book an appointment slot once a day. The website is responsive for mobile, tab, and PC. An admin can add any user as an admin. An administrator can also add a doctor. Stripe.js have been used to place payments. Implemented JWT (JSON web token) token to secure the website.Implemented Login and SignUp forms to count users.",
    },
  ];

  return (
    <>
      <section className="container mx-auto mt-20 h-screen">
        <div className="max-w-[1300px] bg-accent rounded-3xl mx-auto">
          <div className="max-w-[840px] mx-auto py-20">
            <div className="flex justify-center flex-col items-center pb-12">
              <h2 className="uppercase text-5xl font-bold text-center pb-2">my Projects</h2>
              <progress className="progress w-[350px] bg-primary h-[3px]"></progress>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 justify-items-center">
              {projects.map((project) => (
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
