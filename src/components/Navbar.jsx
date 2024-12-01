import React, {useState, useEffect} from 'react'
import linkedinLogo from '../assets/linkedinLogo.png'
import githubLogo from '../assets/githubLogo.png'
import gmailLogo from '../assets/gmailLogo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
}

  const NavLinks = () => {
    return (
      <>
        <a className="hover:text-gray-500" href="#">About</a>
        <a className="hover:text-gray-500" href="#">Resume</a>
        <a className="hover:text-gray-500" href="#">Experience</a> 
        <a className="hover:text-gray-500" href="#">Contact</a>
      </>
    )
  }

  return <nav className="mb-20 flex items-center justify-between py-6 text-2xl border-b border-black flex-wrap">
    <div className="flex flex-shrink-0 items-center">
      Portfolio
    </div>
    <div className="">
      <div className="hidden md:flex items-center justify-between gap-[4vw]">
        <NavLinks />
      </div>
      <div className="md:hidden items-center justify-between gap-[4vw]">
        <button onClick={toggleNavbar}>
        {isOpen ? "X" : "Bruh"}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="flex basis-full flex-col items-center">
        <NavLinks />
      </div>
    )}
    <div className = "flex items-center gap-5">
      <div>
        <a href='https://www.linkedin.com/in/bpatel2001/'>
          <img src={linkedinLogo} alt="LinkedIn Logo" className="w-8 h-8" />
        </a>
      </div>
      <div>
        <a href='https://github.com/bpatel2001/'>
          <img src={githubLogo} alt="Github Logo" className="w-11 h-11" />
        </a>
      </div>
      <div>
        <a href='mailto:bpatel2001h@gmail.com'>
          <img src={gmailLogo} alt="LinkedIn Logo" className="w-7 h-6" />
        </a>
      </div>
    </div>
  </nav>
}

export default Navbar
