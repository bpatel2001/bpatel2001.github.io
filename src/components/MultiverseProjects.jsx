import React from 'react';
import horizonappscreenshot from '../assets/horizonapp-screenshot.png';
import inventoryappscreenshot from '../assets/inventoryapp-screenshot.png';
import invoicingsystemscreenshot from '../assets/invoicingsystem-screenshot.png';
import movieappscreenshot from '../assets/movieapp-screenshot.png';
import pixelforgescreenshot from '../assets/pixelforge-screenshot.png';

const MultiverseProjects = () => {
  const projects = [
    {
      src: inventoryappscreenshot,
      text: "Inventory App",
      description: "An inventory management system built with React and Node.js.",
      features: [
        "Real-time inventory tracking",
        "CRUD operations for inventory items",
        "User authentication and protected routes",
      ],
      contributions: [
        "Developed RESTful APIs using Node.js and Express",
        "Designed MongoDB schema for inventory data",
        "Built responsive frontend using React",
      ],
      reflection:
        "Strengthened my full-stack development skills and improved my understanding of API design and database structuring.",
      link: "https://github.com/invapp-vzswe3/Inventory-App",
      backgroundColor: "black",
    },
    {
      src: horizonappscreenshot,
      text: "Horizon App",
      description: "A Spring Boot application for managing users and mobile plans.",
      features: [
        "User and plan management system",
        "Backend built with Spring Boot",
        "RESTful API architecture",
      ],
      contributions: [
        "Implemented backend services using Spring Boot",
        "Designed API endpoints for user and plan management",
        "Tested endpoints and handled edge cases",
      ],
      reflection:
        "Gained experience with Java backend development and learned how to structure scalable APIs.",
      link: "https://github.com/Horizon-MV/Horizon-App",
      backgroundColor: "black",
    },
    {
      src: invoicingsystemscreenshot,
      text: "Invoicing System",
      description: "A full-stack web app for creating and managing invoices.",
      features: [
        "Create, view, and delete invoices",
        "User-friendly interface for invoice management",
        "Full CRUD functionality",
      ],
      contributions: [
        "Built both frontend and backend components",
        "Implemented CRUD operations and routing",
        "Designed intuitive UI for managing invoices",
      ],
      reflection:
        "Improved my ability to independently build full-stack applications and design clean user interfaces.",
      link: "https://github.com/bpatel2001/invoicing-system",
      backgroundColor: "black",
    },
    {
      src: movieappscreenshot,
      text: "Movie App",
      description: "A React app using the TMDB API to search and view movies.",
      features: [
        "Search movies using external API",
        "Display movie details dynamically",
        "Responsive UI design",
      ],
      contributions: [
        "Integrated TMDB API for real-time data",
        "Managed state and API calls in React",
        "Styled UI for better user experience",
      ],
      reflection:
        "Learned how to work with third-party APIs and improved my frontend data handling skills.",
      link: "https://github.com/bpatel2001/movie-app",
      backgroundColor: "black",
    },
    {
      src: pixelforgescreenshot,
      text: "Pixel Forge",
      description: "A platform to view Steam profile statistics and data.",
      features: [
        "Steam account integration",
        "Display user statistics and profile data",
        "Interactive UI components",
      ],
      contributions: [
        "Worked on API integration with Steam data",
        "Built frontend components to display stats",
        "Handled user authentication flow",
      ],
      reflection:
        "Enhanced my skills in API integration and working with external data sources.",
      link: "https://github.com/PixelForgeArcade",
      backgroundColor: "black",
    },
  ];

  return (
    <div className="mb-40 pb-4 flex items-center justify-center" id="multiverse-projects">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">
          Multiverse Projects
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
                    alt={`${item.text} screenshot`}
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

export default MultiverseProjects;