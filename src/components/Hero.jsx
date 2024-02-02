import Star from '../assets/star.png'
import Arrow from '../assets/arrow-right.svg'
import CurlyArror from '../assets/curl-arrow.png'

const Hero = () => {
    return (
        <div className="py-[8rem] px-[1rem] sm:px-[2rem] md:px-[3rem]">
            <div className="container m-auto flex max-sm:flex-col-reverse" id="hero">
                <div className="max-w-[45rem]">
                    <div className="flex items-center gap-[12px]">
                        <img src={Star} alt="" />
                        <div className="text-xl max-sm:text-sm text-[#B2A9A9]">Make a trust with us</div>
                        <img src={Star} alt="" />
                    </div>
                    <h1 className="text-6xl max-sm:text-3xl mt-3">Bangun potensi dirimu sebagai Profesional Coder bersama Neracode.</h1>
                    <div className="mt-3 text-xl">Pengen ngoding, tapi masih pusing? Sokin aja sini sama Neracode!</div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT8cX1sG1nKo1cYyQmgCm3bY3aL0ZoKdDg08cGMldhF4iqww/viewform" target="_blank" className='flex justify-center text-lg mt-6 px-[1.5rem] py-[.5rem] border border-black rounded-full w-fit gap-[12px] hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300 group relative'>
                        <img src={CurlyArror} alt="" className='absolute top-[-20px] left-[200px]' />
                        <button className="">Gabung yuk</button>
                        <img src={Arrow} alt="" className='-rotate-45 group-hover:rotate-0 ease-in-out duration-300' />
                    </a>
                </div>
                <div className="min-h-[10rem]"></div>
            </div>
        </div>

    )
}
export default Hero