import Star from '../../assets/star.svg'
import komputer from '../../assets/LOGO_NERACODE.png'
import CurlyArror from '../../assets/curl-arrow.png'
import MyContainer from "../template/MyCountainer"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Hero = () => {
    return (
        <MyContainer containerId='hero' containerStyle='md:my-20 max-md:mb-20 flex justify-between items-center max-lg:flex-col-reverse gap-8'>
            <div className="flex-1">
                <div className="flex items-center gap-[1rem]">
                    <LazyLoadImage src={Star} alt="" />
                    <div className="text-xl max-sm:text-sm text-[#B2A9A9]">Make a trust with us</div>
                    <LazyLoadImage src={Star} alt="" />
                </div>
                <h1 className="text-6xl max-sm:text-3xl max-xl:text-5xl mt-3">Bangun potensi dirimu sebagai Profesional Coder bersama Neracode.</h1>
                <div className="mt-3">Pengen ngoding, tapi masih pusing? Sokin aja sini sama Neracode!</div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT8cX1sG1nKo1cYyQmgCm3bY3aL0ZoKdDg08cGMldhF4iqww/viewform" target="_blank" className='flex justify-center items-center text-lg mt-6 px-[1.5rem] py-[.5rem] border border-black rounded-full w-fit gap-[1rem] hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300 group relative'>
                    <LazyLoadImage src={CurlyArror} alt="" className='absolute top-[-1.4rem] left-[10rem]' />
                    <button className="">Gabung yuk</button>
                    <svg className='-rotate-45 group-hover:rotate-0 ease-in-out duration-300 w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
            <LazyLoadImage src={komputer} alt="" className='md:w-[25rem]' />
        </MyContainer>
    )
}
export default Hero