import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt, FaPoll, FaBriefcase, FaFile, FaEnvelope } from "react-icons/fa";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { useState } from "react";

const Sidebar = ({ children }) => {
  const [hoveredContact, setHoveredContact] = useState(false);
  const [hoveredHome, setHoveredHome] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(false);
  const [hoveredResume, setHoveredResume] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState(false);
  const [hoveredSupport, setHoveredSupport] = useState(false);

  return (
    <>
      <section className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
          <div className="flex-none lg:hidden absolute top-0 right-2">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu pt-12 lg:pt-0 overflow-y-auto w-72 bg-[#1E293B] text-base-content">
            {/* <!-- Sidebar content here --> */}
            <div className="hidden lg:block">
              <div className="lg:h-48 xl:h-52 ">
                <div className="h-full flex items-center">
                  <div className="avatar w-full justify-center">
                    <div className="xl:w-40 lg:w-28 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://simgbb.com/avatar/pBSS6n9RBX71.jpg" alt="my_image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 border-t mb-14  border-b  border-primary">
                <h1 className="text-center font-bold text-2xl xl:text-3xl text-secondary">
                  Abdur Rahman
                </h1>
              </div>
            </div>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredHome(true)}
                onMouseLeave={() => setHoveredHome(false)}
                to={"/home"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaHome className="text-xl" /> <span>Home</span>
                <span
                  className={`${
                    hoveredHome && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-12 right-9 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredAbout(true)}
                onMouseLeave={() => setHoveredAbout(false)}
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaUserAlt className="text-xl" />
                <span>About</span>
                <span
                  className={`${
                    hoveredAbout && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-[52px] right-8 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredServices(true)}
                onMouseLeave={() => setHoveredServices(false)}
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaPoll className="text-xl" /> <span>Services</span>
                <span
                  className={`${
                    hoveredServices && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-16 right-5 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredPortfolio(true)}
                onMouseLeave={() => setHoveredPortfolio(false)}
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaBriefcase className="text-xl" /> <span>Portfolio</span>
                <span
                  className={`${
                    hoveredPortfolio && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-[68px] right-4 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredResume(true)}
                onMouseLeave={() => setHoveredResume(false)}
                to={"/resume"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaFile className="text-xl" /> <span>Resume</span>
                <span
                  className={`${
                    hoveredResume && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-14 right-6 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredBlog(true)}
                onMouseLeave={() => setHoveredBlog(false)}
                to={"/blog"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaFile className="text-xl" /> <span>Blog</span>
                <span
                  className={`${
                    hoveredBlog && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-9 right-[46px] bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                onMouseEnter={() => setHoveredContact(true)}
                onMouseLeave={() => setHoveredContact(false)}
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg relative w-[130px] font-bold  bg-[#111] text-primary"
                    : "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:btn-animate hover:text-primary"
                }
              >
                <FaEnvelope className="text-xl" /> <span>Contact</span>
                <span
                  className={`${
                    hoveredContact && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-14 right-6 bottom-[10px]`}
                ></span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <a
                onMouseEnter={() => setHoveredSupport(true)}
                onMouseLeave={() => setHoveredSupport(false)}
                href={"https://support-29169.web.app/inbox"}
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded-lg relative w-[130px] font-bold  bg-[#111] text-secondary hover:btn-animate hover:text-primary"
                }
              >
                <BsFillChatRightDotsFill className="text-xl" /> <span>Support</span>
                <span
                  className={`${
                    hoveredSupport && "btn-animate-hover"
                  } block btn-animate hover:btn-animate absolute w-14 right-6 bottom-[10px]`}
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
