const Hero = () => {
    return (
        <div className="py-[8rem]" id="hero">
            <div className="w-2/3">
                <div className="text-xl">Make a trust with us</div>
                <h1 className="text-6xl mt-3">Bangun potensi dirimu sebagai Profesional Coder bersama Neracode.</h1>
                <div className="mt-3 text-xl">Pengen ngoding, tapi masih pusing? Sokin aja sini sama Neracode!</div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT8cX1sG1nKo1cYyQmgCm3bY3aL0ZoKdDg08cGMldhF4iqww/viewform" target="_blank">
                    <button className="text-lg mt-5 px-[1.5rem] py-[.5rem] border border-black rounded-full w-fit">Gabung yuk</button>
                </a>
            </div>
            <div className="w-1/3"></div>
        </div>
    )
}
export default Hero