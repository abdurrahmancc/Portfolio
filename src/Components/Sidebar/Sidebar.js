import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUserAlt, FaPoll, FaBriefcase, FaFile, FaEnvelope } from "react-icons/fa";

const Sidebar = ({ children }) => {
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
              <div className="lg:h-52 ">
                <div className="h-full flex items-center">
                  <div className="avatar w-full justify-center">
                    <div className="w-40 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://simgbb.com/avatar/pBSS6n9RBX71.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 border-t mb-14  border-b  border-primary">
                <h1 className="text-center font-bold text-4xl text-secondary hover:text-primary">
                  Abdur Rahman
                </h1>
              </div>
            </div>
            <li className="px-20 mb-5  ">
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaHome className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Home</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaUserAlt className="text-xl" />
                <span className="hover:border-b border-secondary">About</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaPoll className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Services</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaBriefcase className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Portfolio</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/resume"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaFile className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Resume</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaFile className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Blog</span>
              </NavLink>
            </li>
            <li className="px-20 mb-5">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg font-bold  bg-[#111] text-primary"
                    : "rounded-lg font-bold  bg-[#111] text-secondary hover:text-primary"
                }
              >
                <FaEnvelope className="text-xl" />{" "}
                <span className="hover:border-b border-secondary">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
