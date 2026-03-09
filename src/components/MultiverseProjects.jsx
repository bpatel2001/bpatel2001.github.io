import React from 'react';
import horizonappscreenshot from '../assets/horizonapp-screenshot.png';
import inventoryappscreenshot from '../assets/inventoryapp-screenshot.png';
import invoicingsystemscreenshot from '../assets/invoicingsystem-screenshot.png';
import movieappscreenshot from '../assets/movieapp-screenshot.png';
import pixelforgescreenshot from '../assets/pixelforge-screenshot.png';



const Projects = () => {
  return (
    <div className="mb-128 pb-4 flex items-center justify-center" id="projects">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">Multiverse Projects</h1>
        <div className="max-w-2xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          <div className="flex flex-wrap justify-center gap-10 mt-4">
            {[
              {
                src: inventoryappscreenshot,
                text: "Inventory App",
                description: "An inventory management system built with React and Node.js that allows users to track and manage their inventory efficiently.",
                link: "https://github.com/invapp-vzswe3/Inventory-App", 
                backgroundColor: "black",
              },
              {
                src: horizonappscreenshot,
                text: "Horizon App",
                description: "An app built with Spring Boot to allow the user to manage users and mobile plans",
                link: "https://github.com/Horizon-MV/Horizon-App",
                backgroundColor: "black", 
              },
              {
                src: invoicingsystemscreenshot,
                text: "Invoicing System",
                description: "This is a full-stack web application for creating and managing invoices, built for the individual project section of the MultiVerse bootcamp. It provides a user-friendly interface to view, create, and delete invoices.",
                link: "https://github.com/bpatel2001/invoicing-system", 
                backgroundColor: "black", 
              },
              {
                src: movieappscreenshot,
                text: "Movie App",
                description: "An app built with React with the public TMDB API to allow users to search for movies and view their details.",
                link: "https://github.com/bpatel2001/movie-app", 
                backgroundColor: "black", 
              },
              {
                src: pixelforgescreenshot,
                text: "Pixel Forge",
                description: "This is a platform that allows users to log in to their Steam account and view various statistics and information about their profile.",
                link: "github.com/PixelForgeArcade", 
                backgroundColor: "black", 
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl font-bold text-blue-10 bg-opacity-80 px-4 py-2 rounded-lg">
                    {item.text}
                  </span>
                  <span className="text-sm text-blue-200 mt-1">
                  {item.description}
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

