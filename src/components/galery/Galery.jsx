import { Link } from "react-router-dom"
import MyContainer from "../template/MyCountainer"
import gambar from '../../assets/galeri/2.jpeg'
import { LazyLoadImage } from "react-lazy-load-image-component"
const Galery = () => {
    return (
        <MyContainer containerId='galery' background='bg-gray-100'>
            <div className="grid items-end grid-cols-[1fr_auto] sm:gap-[3rem]">
                <div className="">
                    <div className="text-5xl max-sm:text-2xl">Moment kami.</div>
                    <div className="text-xl max-sm:text-xs mt-3">Tinggalkan 1 moment yang membuatmu berkembang di sini</div>
                </div>
                <Link to='/galery' className='relative py-2 pl-4 pr-8 md:pl-8 md:pr-12 text-lg border border-black rounded-full gap-4 hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300 group'>
                    <div className="max-sm:text-xs">Lihat semua</div>
                    <svg className='absolute right-2 top-[50%] translate-y-[-50%] -rotate-45 group-hover:rotate-0 ease-in-out duration-300 w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-[1.1fr,1fr,1.1fr] gap-4">
                <div className="grid gap-4 grid-rows-[1fr,2fr] max-md:grid-rows-[1fr] max-md:grid-cols-2 w-full">
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110" />
                    </div>
                </div>
                <div className="grid gap-4 grid-rows-[1.8fr,1fr] max-md:grid-rows-[1fr] w-full">
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110 max-md:hidden" />
                    </div>
                </div>
                <div className="grid gap-4 grid-rows-[1fr,2fr] max-md:grid-rows-[1fr] max-md:grid-cols-2 w-full">
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <LazyLoadImage src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover h-full duration-200 ease-[cubic-bezier(.75, .2, .2, 0.94)] transition-all delay-0 hover:scale-110" />
                    </div>
                </div>
            </div>
        </MyContainer>
    )
}

export default Galery