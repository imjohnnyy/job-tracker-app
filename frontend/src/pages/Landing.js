import React from "react";
import Logo from "../assets/images/logo.svg";
import Worker from "../assets/images/landing.svg";
import { SponsorList } from "../data/SponsorsList";
import SponsorItem from "../components/SponsorItem";

const Landing = () => {
  return (
    <div className={"bg-lightergray h-screen"} id="home">
      {/* HEADER */}
      <header className="flex items-center justify-between w-4/5 p-6 mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-[175px] h-[60px]" />
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="#home" className="text-lg font-medium text-gray hover:text-sky-500"> Home </a>
            </li>
            <li>
              <a href="#about" className="text-lg font-medium text-gray hover:text-sky-500"> About </a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-medium text-gray hover:text-sky-500"> Contact </a>
            </li>
          </ul>
        </nav>

        {/* TEMPORARY GET STARTED TEXT OR LIGHT/DARK TOGGLE */}
        <div>
            <a href="#login" className="px-4 py-1 text-lg font-medium text-white rounded-full cursor-pointer bg-gray hover:bg-blue-700"> Login</a>
        </div>

      </header>

      {/* BODY */}
      <body className="flex items-center justify-between w-4/5 p-12 mx-auto ">
        <div className="ml-[10%] mt-[-100px]">
          <h1 className={"w-auto item-start text-5xl text-left font-bold text-gray mr-12"}>Job Tracking Made Easy</h1>
          <p className={"w-auto text-gray text-left text-lg font-semibold mt-10 mr-12"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae tempore
            suscipit officia ab omnis soluta obcaecati nobis aliquid ullam
            eos repudiandae quis natus vel, nostrum odio alias! Neque, labore.</p>
          <button class="bg-gray hover:bg-blue-700 text-white font-bold text-lg py-3 px-5 rounded-full mt-5 mr-16"> Get Started </button>
        </div>


        <div className={"flex items-center justify-center mt-[-100px]"}>
          <img className={"mr-[10%] w-[2050px] h-[650px] static"} src={Worker} alt="worker"></img>
        </div>
      </body>

      {/* FOOTER */}
      {/* ADD EDUCATION INSTITUTES LOGOS HERE*/}
      <footer className="bg-lightergray ">
        <h2 className="mb-6 text-3xl font-bold">Our Sponsors</h2>
        <div className="flex items-center justify-between w-3/5 p-2 mx-auto">
          {SponsorList.map((sponsor) => {
              return (
                <SponsorItem image={sponsor.image} />
                );
            })}
        </div>
      </footer>
    </div>
  );
};

export default Landing;
