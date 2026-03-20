import React from 'react';
import Chip8Gif from '../assets/chipgif.gif';
import BTLGif from '../assets/btlgif.gif';
import GasGif from '../assets/gasgif.gif';
import HotelGif from '../assets/hotelgif.gif';

const Projects = () => {
  const projects = [
    {
      src: Chip8Gif,
      text: "Chip-8 Interpreter",
      features: [
        "Custom emulator for CHIP-8 virtual machine",
        "Opcode decoding and execution cycle",
        "Keyboard input and graphics rendering",
      ],
      contributions: [
        "Implemented CPU cycle including fetch, decode, execute",
        "Handled memory management and instruction parsing",
        "Built display rendering logic for sprites",
      ],
      reflection:
        "Strengthened my understanding of low-level systems, memory handling, and how interpreters work internally.",
      link: "https://github.com/bpatel2001/Chip-8-Python-Project",
      backgroundColor: "black",
    },
    {
      src: BTLGif,
      text: "Video Game (Back To Life)",
      features: [
        "2D game with character movement and interactions",
        "Game state management and event handling",
        "Custom animations and physics behavior",
      ],
      contributions: [
        "Collaborated on gameplay mechanics and feature design",
        "Implemented player movement and collision logic",
        "Assisted in debugging and optimizing performance",
      ],
      reflection:
        "Gained experience working in a team environment and learned how game loops, physics, and state management function.",
      link: "https://github.com/ChadWeatherly/BackToLife",
      backgroundColor: "black",
    },
    {
      src: GasGif,
      text: "Gas Price Website",
      features: [
        "Displays estimated gas prices based on location",
        "Data visualization for pricing trends",
        "Full-stack web application with API integration",
      ],
      contributions: [
        "Built backend with Node.js and Express",
        "Integrated data processing and visualization logic",
        "Collaborated on frontend UI implementation",
      ],
      reflection:
        "Improved my ability to work on team-based full-stack projects and gained experience in handling real-world data.",
      link: "https://github.com/bpatel2001/Gas-Price-Estimation-Site",
      backgroundColor: "black",
    },
    {
      src: HotelGif,
      text: "Hotel Reservation System",
      features: [
        "User-friendly booking and reservation system",
        "CRUD operations for reservations and users",
        "Secure backend with RESTful APIs",
      ],
      contributions: [
        "Developed frontend using React",
        "Built backend APIs with Express",
        "Designed database schema using MongoDB",
      ],
      reflection:
        "Strengthened my full-stack skills and learned how to design scalable reservation systems.",
      link: "https://github.com/bpatel2001/hotel-reservation-system",
      backgroundColor: "black",
    },
  ];

  return (
    <div className="mb-40 pb-4 flex items-center justify-center" id="projects">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">
          Personal Projects
        </h1>

        <div className="max-w-6xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          <div className="flex flex-wrap justify-center gap-10 mt-4">
            {projects.map((item, index) => (
              <div key={index} className="flex flex-col w-72">
                
                {/* Image Card */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group w-full h-60 rounded-xl border-2 border-blue-900 overflow-hidden"
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <img
                    className="w-full h-full object-contain group-hover:opacity-30 transition-opacity duration-300"
                    src={item.src}
                    alt={`${item.text} gif`}
                  />

                  {/* Hover Title */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xl font-bold text-white">
                      {item.text}
                    </span>
                  </div>
                </a>

                {/* Details Section */}
                <div className="mt-3 bg-blue-900 p-4 rounded-lg shadow-md text-sm text-blue-200 space-y-3">
                  
                  <div>
                    <p className="font-semibold text-blue-100">Features:</p>
                    <ul className="list-disc list-inside">
                      {item.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-100">My Contributions:</p>
                    <ul className="list-disc list-inside">
                      {item.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-100">Reflection:</p>
                    <p>{item.reflection}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;