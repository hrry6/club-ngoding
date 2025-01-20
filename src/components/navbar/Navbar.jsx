import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const limitScroll = useRef(false);
  const lastScroll = useRef(0);
  const limitMouseMove = useRef(false);
  
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isNavbarHidden, setNavbarIsHidden] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 10);
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);


  useEffect(() => {
    function handleScroll(){
      if (limitScroll.current) return

      setNavbarIsHidden(!isDropdownActive && window.scrollY > 200 && window.scrollY > lastScroll.current);
      lastScroll.current = window.scrollY;

      limitScroll.current = true;
      setTimeout(() => limitScroll.current = false, 100);
    };

    function handleMouseMove(event){
      if (limitMouseMove.current) return
      
      const mouseY = event.clientY;
      setNavbarIsHidden(!isDropdownActive && window.scrollY > 200 && mouseY > 150);
      
      limitMouseMove.current = true;
      setTimeout(() => limitMouseMove.current = false, 300);
    };

    document.body.style.overflow = isDropdownActive ? "hidden" : "";

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDropdownActive]);

  useEffect(() => {
    if (isNavbarHidden) setDropdownActive(false);
  }, [isNavbarHidden]);

  const handleLinkClick = () => {
    setNavbarIsHidden(true);
  }
  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive)
  }

  return (
    <div
      className={`${isNavbarHidden ? "top-[-100%]" : "top-0"
        } transition-all delay-250 ease-in-out duration-500 fixed backdrop-blur bg-white/30 z-[99] w-full left-0 py-[2rem] max-md:py-[1rem] md:px-8`}
    >
      <div className="container relative m-auto flex items-center justify-between">
        <Link
          to="/"
          className={`${!isDropdownActive ? "max-md:ml-16" : "max-md:ml-4"
            } duration-700 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-250 text-xl text-[1.5rem] md:text-xl z-[99]`}
        >
          Neracode
        </Link>
        <div
          className={`${!isDropdownActive ? "max-md:left-3" : "-translate-x-14 left-[100%]"
            } cursor-pointer absolute flex items-center duration-1000 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-position delay-250 md:hidden z-[99] w-8 h-5`}
          onClick={handleDropdownClick}
        >
          <div
            className={`${!isDropdownActive
              ? "bg-black before:-mt-2 after:mt-2"
              : "after:rotate-[-45deg] before:rotate-[45deg]"
              } duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 before:duration-1000 before:ease-[cubic-bezier(.75, .2, .2, 0.94)] before:transition-all before:delay-250 after:duration-1000 after:ease-[cubic-bezier(.75, .2, .2, 0.94)] after:transition-all after:delay-250 after:content-[''] after:absolute after:w-full after:h-1 after:bg-black before:absolute before:w-full before:h-1 before:bg-black w-full h-1 absolute`}
          ></div>
        </div>
        <div
          className={`${isDropdownActive
            ? "gap-12 max-md:pt-[70vh] max-md:pb-[30vh] max-md:opacity-100"
            : "max-md:text-xs max-md:pointer-events-none gap-12 max-md:pt-[40vh] max-md:pb-[10vh] max-md:opacity-0 "
            } flex max-md:w-screen max-md:text-2xl max-md:items-center max-md:rounded-full max-md:justify-between duration-700 transition-all ease-in-out delay-250 max-md:bg-white max-md:flex-col max-md:absolute max-md:top-[-50vh] max-md:left-[50%] max-md:translate-x-[-50%]`}
        >
          <Link to="/#about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/#galery" onClick={handleLinkClick}>
            Galery
          </Link>
          <Link to="/#mentors" onClick={handleLinkClick}>
            Mentors
          </Link>
          <Link to="/#contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
