const Navbar = ()=> {
    return (
        <div className="pt-[2rem] px-[1rem] sm:px-[2rem] md:px-[3rem]">
            <div className='container m-auto flex items-center justify-between'>
                <h1 className='text-3xl'>Neracode</h1>
                <div className="flex gap-12 max-sm:hidden">
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