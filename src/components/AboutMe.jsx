import React from 'react'

const AboutMe = () => {
  return (
    <div className="mb-40 pb-4 flex items-center justify-center" id="about-me">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">About Me</h1>
        <div className="max-w-3xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          <p className="text-lg sm:text-xl text-blue-100">
            I am a developer that loves creating new things from the ground up. I truly shine when when working in a team, 
            as I am always eager to learn and grow as a developer alongside a team of like-minded individuals that are just as passionate as me. 
          </p>
          <p className="text-lg sm:text-xl text-blue-100 mt-4">
            I have a deep interest in the field of embedded software engineering as well, finding that the closer relationship betwen hardware and software really appeals to me.
            My initial interest in mechanical engineering as a field was the catalyst to this, and so I love tinkering with hardware.
          </p>
          <p className="text-lg sm:text-xl text-blue-100 mt-4">For example, I added a solenoid to 
            my keyboard to make it sound like a typewriter to annoy my family! This also gave me a deeper understanding of microcontroller programming and peripheral integration.
          </p>
          <p className="text-lg sm:text-xl text-blue-100 mt-4">
            My hobbies include playing video games, building custom keyboards, climbing, and hiking.
          </p>
          <p className="text-xl sm:text-2xl text-blue-200 mt-4 text-center border-b-2 pb-3 border-blue-900">
            Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Icon" />
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB Icon" />
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" />
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Icon" />
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" />
            <img className="w-20 h-20 m-2 rounded-xl border-2 border-blue-900" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="CPP Icon" />
          </div>
        </div>
      </div>
    </div>
  )

}

export default AboutMe

