import React, { useState } from "react";
import fullstack from "../assets/certificates/certificate.jpg";
import responsive from "../assets/certificates/responsive.png";
import javascript from "../assets/certificates/javascript.png";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      src: fullstack,
      link: "https://www.udemy.com/certificate/UC-26181a9f-e9c0-4e5f-b021-d42dff1deb12/"
    },
    {
      id: 2,
      src: responsive,
      link: "https://www.freecodecamp.org/certification/a_adityamagar/javascript-algorithms-and-data-structures-v8"
    },
    {
      id: 3,
      src: javascript,
      link: "https://www.freecodecamp.org/certification/a_adityamagar/responsive-web-design"
    }
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      name="certificates"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
          <p className="py-6">Check out my certifications and achievements</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certificates.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div 
                className="h-[200px] overflow-hidden rounded-md cursor-pointer"
                onClick={() => openModal(src)}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover duration-200 hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-4 text-center">{title}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                    View Certificate
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="max-w-[90%] max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
