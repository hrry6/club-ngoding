import React from 'react'

const Navbar = ()=> {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>LOGO</h1>
            <div className="flex gap-12">
                <a href="#about">About</a>
                <a href="#galery">Galery</a>
                <a href="#mentors">Mentors</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar