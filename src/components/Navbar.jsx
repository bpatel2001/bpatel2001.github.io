import React, {useState, useEffect} from 'react'
import linkedinLogo from '../assets/linkedinLogo.png'
import githubLogo from '../assets/githubLogo.png'
import gmailLogo from '../assets/gmailLogo.png'
import { IoIosMenu } from "react-icons/io"
import { IoIosClose } from "react-icons/io"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen])

  const NavLinks = () => {
    const smoothScroll = (e, target) => {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <>
        <a className="hover:text-gray-500" href="#about-me" onClick={(e) => smoothScroll(e, '#about-me')}>About Me</a>
        <a className="hover:text-gray-500" href="#experiences" onClick={(e) => smoothScroll(e, '#experiences')}>Experiences</a> 
        <a className="hover:text-gray-500" href="#projects" onClick={(e) => smoothScroll(e, '#projects')}>Projects</a>
        <a className="hover:text-gray-500" href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a>
      </>
    );
  }

  const SocialLinks = () => {
    return (
      <>
        <a href='https://www.linkedin.com/in/bpatel2001/'>
          <img src={linkedinLogo} alt="LinkedIn Logo" className="w-8 h-8" />    
        </a>
        <a href='https://github.com/bpatel2001/'>
          <img src={githubLogo} alt="GitHub Logo" className="w-11 h-11" />
        </a>
        <a href='mailto:bpatel2001h@gmail.com'>
          <img src={gmailLogo} alt="Gmail Logo" className="w-7 h-6" />
        </a>
      </>
    )
  }

  return <nav className="text-blue-100 flex items-center justify-between py-6 mb-96 px-8 text-xl flex-wrap bg-blue-950 shadow-lg">
    <div className="text-3xl text-blue-200 flex flex-shrink-0 items-center">
      Portfolio
    </div>
    <div className="">
      <div className="hidden md:flex items-center justify-between gap-[4vw]">
        <NavLinks />
      </div>
      <div className="md:hidden items-center justify-between gap-[4vw]">
        <button onClick={toggleNavbar}>
          {isOpen ? <IoIosClose size={40} />: <IoIosMenu size={30}/>}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="flex basis-full flex-col items-center gap-y-2">
        <NavLinks />
        <div className="flex items-center gap-x-2">
          <SocialLinks />
        </div>
      </div>
    )}
    <div className = "hidden md:flex items-center gap-5">
      <SocialLinks />
    </div>
  </nav>
}

export default Navbar


