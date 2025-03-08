import React from "react";
import chat from "../assets/portfolio/chat.png";
import food from "../assets/portfolio/food.png";
import weather from "../assets/portfolio/weather.png";
import cars from "../assets/portfolio/cars.png";
import pokemon from "../assets/portfolio/pokemon.png";
import cloth from "../assets/portfolio/cloth.png";
import movie from "../assets/portfolio/movie.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cars,
      demoLink: "https://carhub-omega-six.vercel.app/",
      githubLink: "https://github.com/a-adityamagar/carhub",
    },
    {
      id: 2,
      src: pokemon,
      demoLink: "https://www.linkedin.com/posts/aditya-thapa-magar-6a2912288_pokemon-programming-project-activity-7265746176119832578-7Ojq?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/a-adityamagar/pokemon",
    },
    {
      id: 3,
      src: weather,
      demoLink: "https://www.linkedin.com/posts/aditya-thapa-magar-6a2912288_software-app-react-activity-7266368193542139904-X3UI?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/a-adityamagar/weatherApp",
    },
    {
      id: 4,
      src: chat,
      demoLink: "https://www.linkedin.com/posts/aditya-thapa-magar-6a2912288_tech-communication-website-activity-7262390469190397952-aY2a?utm_source=share&utm_medium=member_desktop",
      githubLink: "https://github.com/a-adityamagar/chatapp",
    },
    {
      id: 5,
      src: food,
      demoLink: "https://foodhub-beige-nu.vercel.app/",
      githubLink: "https://github.com/a-adityamagar/foodhub",
    },
    {
      id: 6,
      src: cloth,
      demoLink: "https://trendswear.vercel.app/",
      githubLink: "https://github.com/a-adityamagar/Trendswear",
    },
    {
      id: 7,
      src: movie,
      demoLink: "https://movie-quest-five.vercel.app/",
      githubLink: "https://github.com/a-adityamagar/movieQuest",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout Some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
