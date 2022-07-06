import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaVideo, FaGithub } from "react-icons/fa";
import "./PortfolioCardDetails.css";

const PortfolioCardDetails = () => {
  const { id } = useParams();
  const projects = [
    {
      id: "1",
      name: "T-COLLECTION",
      img: "https://i.ibb.co/vBQT6hP/tcollection.jpg",
      brand: "A Independent Service Provider Website",
      liveSite: "https://t-collection-eaf74.firebaseapp.com/",
      client: "https://github.com/abdurrahmancc/t-collection",
      server: "https://github.com/abdurrahmancc/t-collection",
      exists: [
        "Dealer can order the product with order quantity.",
        "The website is responsive for mobile, tab, and PC.",
        "Implemented add form to add a new TYRES.",
        "Stripe.js have been used to place payments.",
        "Implemented Login and SignUp forms to count users.",
      ],
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT,Express.js ",
      description:
        "This is a full-stack responsive react project where dealers can buy car tyres. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products.",
    },
    {
      id: "2",
      name: "CARLE HOUSE",
      img: "https://i.ibb.co/YTYXqz2/Untitled-2.jpg",
      brand: "A Inventory Manager Website",
      liveSite: "https://carle-warehouse.firebaseapp.com/",
      client: "https://github.com/abdurrahmancc/carle-house",
      server: "",
      exists: [
        "Dealer can order the product with order quantity.",
        "The website is responsive for mobile, tab, and PC.",
        "Implemented add form to add a new car.",
        "Implemented JWT token to secure the website.",
        "Implemented Login and SignUp forms to count users.",
      ],
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT,Express.js ",
      description:
        "This is a car warehouse-related website. Here traders or general users can buy cars. They can order each car individually. Admins can also add cars. Admins can see all the car products page. Admin can delete the product at will.",
    },
    {
      id: "3",
      name: "Doctors Portal",
      img: "https://i.ibb.co/6N1PVR2/portfolio3.jpg",
      brand: "A Inventory Manager Website",
      liveSite: "https://doctors-portal-eedf2.firebaseapp.com/",
      client: "https://github.com/abdurrahmancc/doctors-portal",
      server: "https://github.com/abdurrahmancc/doctors-portals-server",
      exists: [
        "Patients can book appointment slots.",
        "The website is responsive for mobile, tab, and PC.",
        "Stripe.js have been used to place payments.",
        "Implemented JWT token to secure the website.",
        "Implemented Login and SignUp forms to count users.",
      ],
      technology:
        "html, css, JS, React, Node.js, Stripe, MongoDB, Firebase, Tailwind, JWT,Express.js ",
      description:
        "This is a clinic-related website. Patients can book an appointment slot once a day. The website is responsive for mobile, tab, and PC. An admin can add any user as an admin. An administrator can also add a doctor. Stripe.js have been used to place payments. Implemented JWT (JSON web token) token to secure the website.Implemented Login and SignUp forms to count users.",
    },
  ];

  const project = projects.find((data) => data.id === id);
  const info = project.technology.split(",");
  console.log(project?.exists?.length);

  return (
    <section className="container mx-auto mt-20  h-screen">
      <div className="max-w-[1300px] bg-accent rounded-3xl mx-auto">
        <div className="hero min-h-screen py-20 px-10 mx-auto">
          <div className="hero-content  lg:mt-0 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className={`p-12  bg-[#3b4b66] rounded-lg`}>
                <div className={`${id != 1 && "hidden"}`}>
                  <div className="">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">home page</h5>
                    <div className="mx-w-[400px] h-[200px] object-cover bg-no-repeat  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/vBQT6hP/tcollection.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="my-10">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">login page</h5>
                    <div className="mx-w-[400px] h-[200px] bg-no-repeat   object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/SwFRbsK/loginpage.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">dashboard</h5>
                    <div className="mx-w-[400px] h-[200px] bg-no-repeat   object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/27pLmTV/dashboard.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                </div>

                <div className={`${id != 2 && "hidden"}`}>
                  <div>
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">home page</h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/YTYXqz2/Untitled-2.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="my-10">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">dashboard page</h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/Nmps6Bg/Untitled-2fsf.jpg')] bg-no-repeat bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">login page</h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/375fxDy/Untitled-2das.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                </div>
                <div className={`${id != 3 && "hidden"}`}>
                  <div>
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">home page</h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/6N1PVR2/portfolio3.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="my-10">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">
                      Appointment page
                    </h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/F0sr1YN/appointmentpage.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold uppercase pb-2 text-center">
                      Appointment page
                    </h5>
                    <div className="mx-w-[400px] h-[200px] object-cover  bg-top hover:bg-bottom bg-[url('https://i.ibb.co/d2HY4gw/doctordashboard.jpg')] bg-black ease-in-out  duration-[2s]"></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text text-3xl font-bold text-secondary flex flex-row gap-3">
                  <span> {project.name}</span>
                </h4>
                <p className="text-4xl font-bold"> </p>

                <p className="py-6 text-lg">{project.description}</p>
                <div className="pb-8 my-6 ">
                  <h4 className="text-2xl font-bold capitalize text-secondary pb-2 border-b mb-6 border-gray-200">
                    Exists within the project
                  </h4>
                  <div className="">
                    {project?.exists?.map((data) => (
                      <li>{data}</li>
                    ))}
                  </div>
                </div>
                <div className="pb-8  mb-6 ">
                  <h4 className="text-2xl font-bold text-secondary pb-2 border-b mb-6 border-gray-200">
                    Technology Used
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4  gap-2">
                    {info.map((data) => (
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
                      className="px-10 text-center py-2 text-secondary bg-[rgb(30,41,59)] "
                    >
                      <span className="flex justify-center items-center">
                        <FaVideo />
                        <span className="ml-2"> Live</span>
                      </span>
                    </a>
                    <a
                      href={project?.client}
                      className="px-8 text-center py-2 text-secondary bg-[rgb(30,41,59)] "
                    >
                      <span className="flex justify-center items-center">
                        <FaGithub />
                        <span className="ml-2"> Client</span>
                      </span>
                    </a>
                    <a
                      href={project?.server}
                      className="px-8 text-center py-2 text-secondary bg-[rgb(30,41,59)] "
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
