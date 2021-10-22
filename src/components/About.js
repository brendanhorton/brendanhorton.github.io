import React from "react";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col">
        <img
          className="w-auto h-auto md:h-1/3 md:w-1/3 rounded-full"
          alt="hero"
          src="./headshot.jpeg"
        />
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
          <h1 className="text-5xl text-yellow-500 lg:px-20 lg:py-10 px-10">
            Hi, I'm Brendan!
          </h1>
          <p className="text-gray-800 px-10">
          My passion for programming began when I was young, while playing my first video games. Playing games sparked an interest in me, and pushed me to understand how the games I love were created. Throughout my under graduate degree I began taking my interest in coding to the next level, and mixed Biology courses, with independent learning and online courses in programming and web development. 
          <br></br>
          <br></br>
          After the completion of my degree I fully committed myself to my passion in programming and am excited to make it a full time career.
          </p>
          <div className="flex justify-center px-10 py-10">
            <a href="https://github.com/Colourised">
              <img src="./github_icon.png" alt="github icon"/>
            </a>
            <a href='https://brendanhorton.com'
            className='ml-4 inline-flex text-yellow-500 bg-gray-800 border-0 py-4 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg '>
              View my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
