import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pt-12 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a passionate Front-End Developer with a strong foundation in
          building dynamic and responsive user interfaces. Proficient in modern
          technologies like React, HTML, CSS, and JavaScript, I strive to create
          seamless and visually appealing web applications. I have experience
          using GitHub for version control and collaboration, ensuring efficient
          and organized project development. My focus is on writing clean,
          maintainable code while continuously learning and implementing the
          latest trends in web development. With a keen eye for detail and a
          drive for excellence, I aim to deliver user-centric solutions that
          enhance functionality and user experience.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
