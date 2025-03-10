import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    id: 1,
    child: <FaGithub size={30} />,
    href: "https://github.com/a-adityamagar",
  },
  {
    id: 2,
    child: <FaLinkedin size={30} />,
    href: "https://np.linkedin.com/in/aditya-thapa-magar-6a2912288",
  },
  {
    id: 3,
    child: <HiOutlineMail size={30} />,
    href: "mailto:adityamagar677@gmail.com",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "certificates" },
    { id: 6, link: "contact" },
  ];
  return (
    <div
      className="flex fixed justify-between items-center w-full h-20 text-white
     bg-black px-4 "
    >
      <div>
        <h1 className="text-5xl ml-2  ">Hello</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
           <div className="flex gap-4 pt-6 ">
            {socialLinks.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:scale-110 duration-200"
              >
                {child}
              </a>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
