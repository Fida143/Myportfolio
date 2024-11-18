import React, { useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { LuPuzzle, LuExternalLink } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import BottomToUp from "./BottomToUp";
import Layout from "./Layout/Layout";
import { projects } from "../projectsDB";

const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0k0yxf",
        "template_ywmh8yp",
        form.current,
        "lGLlpsrJKTRVGk9bC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email sent successfully ");

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error while sending email");
        }
      );
  };

  return (
    <Layout>
      <main>
        {/* *************************    Section 1   ****************************************** */}
        <section
          className="  flex flex-col justify-center h-[70vh]  "
          id="home"
        >
          <div className="w-full  mx-auto flex flex-col-reverse  justify-around items-center sm:w-2/3 sm:flex-row md:w-1/2  ">
            <div className=" w-3/4 mt-6 sm:w-1/2   ">
              <h1 className={`text-4xl font-bold `}>
                Front-End React Developer ✋
              </h1>
              <p className="mt-3">
                Hi,I'am Fida Hussain . A passionate Front-end React Developer
                based in Jharkhand,India 🌹
              </p>
              <div className="flex mt-3 ">
                <AiFillGithub className="text-2xl cursor-pointer" />
                <AiFillLinkedin className="text-2xl ml-4 cursor-pointer" />
              </div>
            </div>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img src="./images/Fida img.jpg" alt="" />
            </div>
          </div>
          <div className=" flex  mt-11 w-3/4 mx-auto  items-center justify-between  sm:w-2/3 md:w-1/2 md:justify-around  ">
            <h2 className="text-3xl    font-semibold">Skills</h2>{" "}
            <div className=" ">
              <AiFillHtml5 fill="#E44D26" className="text-4xl" />
            </div>
            <div className=" ">
              <IoLogoCss3 fill="#0E6DB7" className="text-4xl" />{" "}
            </div>
            <div className=" ">
              <IoLogoJavascript fill="yellow" className="text-4xl " />{" "}
            </div>
            <div className=" ">
              <IoLogoReact fill="#59BFD9" className="text-4xl" />{" "}
            </div>
            <div className=" ">
              <SiTailwindcss fill="#59BFD9" className="text-4xl" />
            </div>
          </div>
        </section>
        {/* *************************    Section 2   ****************************************** */}
        <section
          className="  flex flex-col justify-center mt-[10vh]  "
          id="about"
        >
          <div className="w-full mx-auto flex flex-col-reverse  justify-around items-center sm:flex-row lg:w-1/2   ">
            <div className="w-full   mx-auto flex flex-col-reverse  justify-around items-center lg:flex-row    ">
              <div className=" rounded-2xl overflow-hidden relative mt-6 lg:w-2/3 lg:p-8  ">
                <img src="./images/laptop.jpeg" alt="Laptop Image" />

              </div>
              <div className=" w-3/4 mt-6    ">
                <h2 className="text-xl text-blue-400">About Me</h2>
                <h3 className="text-2xl font-bold mt-3">
                  A dedicated Front-end Developer based in jharkhand , India 🌹
                </h3>
                <p className="mt-3">
                  As a Junior Front-End Developer ,I possess an impressive
                  arsenal of skills in HTML , CSS, JavaScript , React and
                  Tailwind . I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic , engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  development tools and techniques. I am also a team player who
                  thrives in collaborating with cross -functional teams to
                  produce outstanding web applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* *************************    Section 3   ****************************************** */}
        <section className="flex flex-col justify-center mt-[10vh]" id="about">
          <div className="w-full mx-auto flex flex-col-reverse justify-around items-center sm:flex-row lg:w-1/2">
            <div className="w-full mx-auto flex flex-col-reverse  items-center lg:flex-row">

              <div className="w-3/4 mt-6">
                <h2 className="text-xl text-blue-400">Internship</h2>
                <h3 className="text-2xl font-bold mt-3">
                  Intern at Sales Queen Software Solutions 🌟
                </h3>
                <p className="mt-3">
                  I have had the privilege of working with Sales Queen Software
                  Solutions in two roles:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    <strong>Front-end Developer Intern</strong>: From October 31,
                    2023, to April 31, 2024, where I honed my skills in HTML, CSS,
                    JavaScript, React, and Tailwind CSS, creating responsive and
                    dynamic user interfaces.
                  </li>
                  <li>
                    <strong>Back-end Developer Intern</strong>: From September 6,
                    2024, to present, focusing on server-side logic, database
                    management, and ensuring smooth integration with front-end
                    systems.
                  </li>
                </ul>
                <p className="mt-3">
                  These experiences have enriched my technical expertise and
                  strengthened my collaboration and problem-solving skills,
                  enabling me to contribute effectively to the development of
                  high-quality web applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* *************************    Section 4   ****************************************** */}
        <section
          className="  flex flex-col justify-center mt-[10vh]   "
          id="projects"
        >
          <div className="w-3/4 mx-auto lg:w-1/2">
            <h2 className="text-xl text-blue-400">Projects</h2>
            <h3 className="text-2xl font-bold mt-3">
              Each project is a unique piece of Development{" "}
              <LuPuzzle fill="green" className="ml-2 inline-block" />
            </h3>
          </div>
          {projects.map((project) => (<div className="w-full mx-auto flex flex-col-reverse  justify-around items-center sm:flex-row lg:w-1/2   ">
            <div className="w-full   mx-auto flex flex-col-reverse  justify-around items-center lg:flex-row    ">
              <div className=" rounded border-2 border-black   overflow-hidden mt-6 lg:w-3/4 lg:h-3/4 lg:m-8 hover:scale-150 transition ">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[200px] "
                />
              </div>
              <div className=" w-3/4 mt-6 text-center   ">
                <h3 className=" text-base font-bold">{project.title}</h3>
                <p className="mt-3">
                  {project.desc}
                </p>
                <div className="font-bold  mt-3">
                  <IoLogoReact fill="#59BFD9" className="inline-block" /> React{" "}
                  <SiTailwindcss fill="#59BFD9" className="inline-block" />
                  TailwindCss
                </div>
                <div className="font-bold  mt-8">
                  <NavLink to={project.gitLink} className="cursor-pointer">
                    Code
                    <AiFillGithub className="inline-block text-2xl" />
                  </NavLink>
                  <NavLink to={project.link} className="ml-6 cursor-pointer">
                    Live Demo{" "}
                    <LuExternalLink className="inline-block text-2xl " />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>))}
          {/* <div className="w-full mx-auto flex flex-col-reverse  justify-around items-center sm:flex-row lg:w-1/2   ">
            <div className="w-full   mx-auto flex flex-col-reverse  justify-around items-center lg:flex-row    ">
              <div className=" rounded border-2 border-black   overflow-hidden mt-6 lg:w-3/4 lg:h-3/4 lg:m-8 hover:scale-150 transition ">
                <img
                  src="./images/weatherApp.png"
                  alt="Laptop Image"
                  className="h-[200px] "
                />
              </div>
              <div className=" w-3/4 mt-6 text-center   ">
                <h3 className=" text-base font-bold">Weather Web App</h3>
                <p className="mt-3">
                  As a Junior Front-End Developer ,I possess an impressive
                  arsenal of skills in HTML , CSS, JavaScript , React and
                  Tailwind . I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic , engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  dsf    development tools and techniques. I am also a team player who
                  thrives in collaborating with cross -functional teams to
                  produce outstanding web applications.
                </p>
                <div className="font-bold  mt-3">
                  <IoLogoReact fill="#59BFD9" className="inline-block" /> React{" "}
                  <SiTailwindcss fill="#59BFD9" className="inline-block" />
                  TailwindCss
                </div>
                <div className="font-bold  mt-8">
                  <span className="cursor-pointer">
                    Code
                    <AiFillGithub className="inline-block text-2xl" />
                  </span>
                  <span className="ml-6 cursor-pointer">
                    Live Demo{" "}
                    <LuExternalLink className="inline-block text-2xl " />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col-reverse  justify-around items-center sm:flex-row lg:w-1/2   ">
            <div className="w-full   mx-auto flex flex-col-reverse  justify-around items-center lg:flex-row    ">
              <div className=" rounded border-2 border-black   overflow-hidden mt-6 lg:w-3/4 lg:h-3/4 lg:m-8 hover:scale-150 transition  ">
                <img
                  src="./images/E-commerce img.png"
                  alt="Laptop Image"
                  className="h-[200px] "
                />
              </div>
              <div className=" w-3/4 mt-6 text-center   ">
                <h3 className=" text-base font-bold">Car Rental</h3>
                <p className="mt-3">
                  As a Junior Front-End Developer ,I possess an impressive
                  arsenal of skills in HTML , CSS, JavaScript , React and
                  Tailwind . I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic , engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  development tools and techniques. I am also a team player who
                  thrives in collaborating with cross -functional teams to
                  produce outstanding web applications.
                </p>
                <div className="font-bold  mt-3">
                  <IoLogoReact fill="#59BFD9" className="inline-block" /> React{" "}
                  <SiTailwindcss fill="#59BFD9" className="inline-block" />
                  TailwindCss
                </div>
                <div className="font-bold  mt-8">
                  <span className="cursor-pointer">
                    Code
                    <AiFillGithub className="inline-block text-2xl" />
                  </span>
                  <span className="ml-6 cursor-pointer">
                    Live Demo{" "}
                    <LuExternalLink className="inline-block text-2xl " />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto flex flex-col-reverse  justify-around items-center sm:flex-row lg:w-1/2   ">
            <div className="w-full   mx-auto flex flex-col-reverse  justify-around items-center lg:flex-row    ">
              <div className=" rounded border-2 border-black   overflow-hidden mt-6 lg:w-3/4 lg:h-3/4 lg:m-8 hover:scale-150 transition ">
                <img
                  src="./images/E-commerce img.png"
                  alt="Laptop Image"
                  className="h-[200px] "
                />
              </div>
              <div className=" w-3/4 mt-6 text-center   ">
                <h3 className=" text-base font-bold">Car Rental</h3>
                <p className="mt-3">
                  As a Junior Front-End Developer ,I possess an impressive
                  arsenal of skills in HTML , CSS, JavaScript , React and
                  Tailwind . I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic , engaging interfaces through writing
                  clean and optimized code and utilizing cutting-edge
                  development tools and techniques. I am also a team player who
                  thrives in collaborating with cross -functional teams to
                  produce outstanding web applications.
                </p>
                <div className="font-bold  mt-3">
                  <IoLogoReact fill="#59BFD9" className="inline-block" /> React{" "}
                  <SiTailwindcss fill="#59BFD9" className="inline-block" />
                  TailwindCss
                </div>
                <div className="font-bold  mt-8">
                  <span className="cursor-pointer">
                    Code
                    <AiFillGithub className="inline-block text-2xl" />
                  </span>
                  <span className="ml-6 cursor-pointer">
                    Live Demo{" "}
                    <LuExternalLink className="inline-block text-2xl " />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          <NavLink
            to="/projects"
            className="mx-auto font-bold border border-black w-fit my-7 p-2"
          >
            More Projects <LuExternalLink className="inline-block text-2xl " />
          </NavLink>
        </section>
        {/* *************************    Section 4   ****************************************** */}
        <section
          className="  flex flex-col justify-center mt-[10vh]  "
          id="contactUs"
        >
          <div className="w-3/4 mx-auto lg:w-1/2">
            <h2 className="text-xl text-blue-400">Contact Us </h2>
            <h3 className="font-bold text-2xl my-4">
              Don't be shy! Hit me up 👇
            </h3>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-3/4 mx-auto lg:w-1/2 ">
              <div>
                <label htmlFor="name" className="font-bold">
                  Enter your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Enter Your name"
                  className="border border-black my-3 block w-full text-xl p-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-bold">
                  Enter your E-mail
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Enter Your email"
                  className="border border-black my-3 block w-full text-xl p-1"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your concern ..."
                  className="border border-black my-3 block w-full text-xl p-1"
                ></textarea>
              </div>
              <div className="text-center my-3">
                <input
                  type="submit"
                  value="send"
                  id="btn"
                  className="border-2 border-black  w-[200px]  text-xl cursor-pointer font-bold"
                />
              </div>
            </div>
          </form>
        </section>
        <BottomToUp />
      </main>
    </Layout>
  );
};

export default Main;
