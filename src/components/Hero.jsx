const Hero = () => {
    return (
        <div className="py-[8rem] px-[1rem] sm:px-[2rem] md:px-[3rem]">
            <div className="container m-auto flex max-sm:flex-col-reverse" id="hero">
                <div className="max-w-[45rem]">
                    <div className="text-xl max-sm:text-sm">Make a trust with us</div>
                    <h1 className="text-6xl max-sm:text-3xl mt-3">Bangun potensi dirimu sebagai Profesional Coder bersama clubing.</h1>
                    <div className="mt-3 text-xl">Pengen ngoding, tapi masih pusing? Sokin aja sini sama Clubing!</div>
                    <button className="text-lg mt-5 px-[1.5rem] py-[.5rem] border border-black rounded-full w-fit">Gabung yuk</button>
                </div>
                <div className="min-h-[10rem]"></div>
            </div>
        </div>

    )
}
export default Hero