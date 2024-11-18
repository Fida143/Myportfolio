import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";
import BottomToUp from "../components/BottomToUp";
import { projects } from "../projectsDB";
const Projects = () => {

  return (
    <>
      <h1 className="text-3xl font-bold  my-4 border-b-4 border-black w-fit mx-auto ">
        Projects
      </h1>
      <NavLink to="/" className="right-52 text-blue-400 underline absolute">
        &#8592; Go Back
      </NavLink>
      <div className="flex flex-wrap justify-center ">
        {projects.map((p) => {
          return (
            <div className="w-1/5 min-w-[350px] p-2 m-2  bg-gray-200 rounded-md font-bold">
              <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {p.id}
              </span>

              <h1 className="font-bold text-2xl text-center border-b-2">
                {p.title}
              </h1>
              <p className="text-sm m-4">{p.desc}</p>
              <div className="font-bold  mt-8 text-center">
                <NavLink to={p.gitLink} className="cursor-pointer">
                  Code
                  <AiFillGithub className="inline-block text-2xl" />
                </NavLink>
                <NavLink to={p.link} className="ml-6 cursor-pointer">
                  Live Demo{" "}
                  <LuExternalLink className="inline-block text-2xl " />
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      <BottomToUp />
    </>
  );
};

export default Projects;
