import React from 'react';
import Chip8Gif from '../assets/chipgif.gif'
import BTLGif from '../assets/btlgif.gif'
import GasGif from '../assets/gasgif.gif'
import HotelGif from '../assets/hotelgif.gif'
const Projects = () => {
  return (
    <div className="mb-40 pb-4 flex items-center justify-center" id="projects">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">Projects</h1>
        <div className="max-w-2xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          <div className="flex flex-wrap justify-center gap-10 mt-4">
            {[
              {
                src: Chip8Gif,
                text: "Chip-8 Interpreter",
                link: "https://github.com/bpatel2001/Chip-8-Python-Project", 
                backgroundColor: "black",
              },
              {
                src: BTLGif,
                text: "Video Game",
                link: "https://github.com/ChadWeatherly/BackToLife",
                backgroundColor: "black", 
              },
              {
                src: GasGif,
                text: "Gas Price Website",
                link: "https://github.com/bpatel2001/Gas-Price-Estimation-Site", 
              },
              {
                src: HotelGif,
                text: "Hotel Reservation System",
                link: "https://github.com/your-username/hotel-reservation-system", 
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-60 h-60 m-2 rounded-xl border-2 border-blue-900 overflow-hidden"
                style={{
                  backgroundColor: item.backgroundColor,
                }}
              >
                <img
                  className="w-full h-full object-contain group-hover:opacity-30 transition-opacity duration-300"
                  src={item.src}
                  alt={`${item.text} Icon`}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl font-bold text-blue-10 bg-opacity-80 px-4 py-2 rounded-lg">
                    {item.text}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

