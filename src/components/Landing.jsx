import React from 'react'

const Landing = () => {
  return (
    <div className="mb-128 pb-4 flex items-center justify-center">
      <div className="container mx-auto max-w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-100">Hi, I'm Bhavik Patel!</h1>
        <p className="text-xl sm:text-2xl text-gray-300">Software Engineer</p>
        <div className="max-w-3xl mx-auto bg-opacity-80 bg-blue-950 p-6 rounded-lg shadow-lg mt-8">
          <p className="text-lg sm:text-xl text-blue-100">
            A passionate software engineer born and raised in Houston. My interests primarily lie in back-end development, however, 
            I am open to various fields of development, including full-stack. Please reach out to me as I am eager to learn and grow as a developer and hope to get to know you!
          </p>
        </div>
        <button className="shadow-lg bg-blue-600 text-blue-100 font-bold py-2 px-4 rounded mt-8 hover:bg-blue-300">
          <a href="BPatelResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </button>
      </div>
    </div>
  )

}

export default Landing

