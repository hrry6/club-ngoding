import { useState } from "react"

const Navbar = ()=> {
    const [isDropdown,setIsDropdown] = useState(false)

    const handleDropdown = () => {
        setIsDropdown(!isDropdown);
    };

    return (
        <div className="fixed backdrop-blur bg-white/30 z-[99] w-full top-0 left-0 py-[2rem] max-sm:py-[1rem] sm:px-8 md:px-16">
            <div className='container relative m-auto flex items-center justify-between'>
                <h1 className={`${!isDropdown ? 'max-sm:pl-16' : 'max-sm:pl-4'} duration-700 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-250 text-xl text-[1.5rem] sm:text-xl z-[99]`}>Neracode</h1>
                <div className={`${!isDropdown ? 'max-sm:left-3' : '-translate-x-14 left-[100%] -translate-x-8'} cursor-pointer absolute flex items-center duration-1000 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-position delay-250 sm:hidden z-[99] w-8 h-5`} onClick={handleDropdown}>
                    <div className={`${!isDropdown ? 'bg-black before:-mt-2 after:mt-2' : 'after:rotate-[-45deg] before:rotate-[45deg]'} duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 before:duration-1000 before:ease-[cubic-bezier(.75, .2, .2, 0.94)] before:transition-all before:delay-250 after:duration-1000 after:ease-[cubic-bezier(.75, .2, .2, 0.94)] after:transition-all after:delay-250 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black before:absolute before:w-full before:h-[2px] before:bg-black w-full h-[2px] absolute`}></div>
                </div>
                <div className={`${isDropdown ? 'pointer-events-auto gap-12 max-sm:pt-[70vh] max-sm:pb-[30vh] max-sm:opacity-100' : 'pointer-events-none gap-12 max-sm:pt-[40vh] max-sm:pb-[10vh] max-sm:opacity-0 '} flex max-sm:w-full max-sm:items-center max-sm:rounded-full max-sm:justify-between duration-700 transition-all ease-in-out delay-250 max-sm:bg-white max-sm:flex-col max-sm:absolute max-sm:top-[-50vh] max-sm:left-[50%] max-sm:translate-x-[-50%]`}>
                    <a href="#about">About</a>
                    <a href="#galery">Galery</a>
                    <a href="#mentors">Mentors</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar