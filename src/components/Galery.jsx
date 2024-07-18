import MyContainer from "./template/MyCountainer"
import gambar from "../assets/galeri/2.jpeg"

const Galery = ()=> {
    return (
        <MyContainer containerId='galery' background='bg-gray-100'>
            <div className="grid items-end grid-cols-[1fr_auto] sm:gap-[3rem]">
                <div className="">
                    <div className="text-5xl max-sm:text-2xl">Moment kami.</div>
                    <div className="text-xl max-sm:text-xs mt-3">Tinggalkan 1 moment yang membuatmu berkembang di sini</div>
                </div>
                <button className='relative py-2 pl-4 pr-8 md:pl-8 md:pr-12 text-lg border border-black rounded-full gap-[12px] hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300 group'>
                    <div className="max-sm:text-xs">Lihat semua</div>
                    <svg className='absolute right-2 top-[50%] translate-y-[-50%] -rotate-45 group-hover:rotate-0 ease-in-out duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-[2fr,1.5fr,2fr] gap-4 h-[45rem]">
                    <div className="grid gap-4 grid-rows-[2fr,1fr] max-lg:grid-rows-[1fr] max-lg:grid-cols-2 w-full">
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full" />
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full" />
                    </div>
                    <div className="grid gap-4 grid-rows-[1fr,2fr] max-lg:grid-rows-[1fr] w-full">
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full" />
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full max-lg:hidden" />
                    </div>
                    <div className="grid gap-4 grid-rows-[2fr,1fr] max-lg:grid-rows-[1fr] max-lg:grid-cols-2 w-full">
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full" />
                        <img src={gambar} alt="" className="bg-gray-200 w-full bg-cover object-cover rounded-xl h-full" />
                    </div>
                </div>
            </div>
        </MyContainer>
    )
}

export default Galery