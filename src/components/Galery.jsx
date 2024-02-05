const Galery = ()=> {
    return (
        <div className="py-[8rem] px-[1rem] sm:px-[2rem] md:px-[3rem]">
            <div className="container m-auto" id="galery">
                <div className="flex justify-between items-center sm:gap-[3rem]">
                    <div className="">
                        <div className="text-5xl max-sm:text-2xl">Moment kami.</div>
                        <div className="text-xl max-sm:text-xs mt-3">Tinggalkan 1 moment yang membuatmu berkembang di sini</div>
                    </div>
                    <button className='flex justify-center items-center text-lg mt-6 px-[1.5rem] py-[.5rem] border border-black rounded-full w-fit gap-[12px] hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300 group'>
                        <div className="">Lihat semua</div>
                        <svg className='-rotate-45 group-hover:rotate-0 ease-in-out duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className="flex gap-6 aspect-[11/4] mt-8 max-md:flex-col">
                    <div className="aspect-[1.2/1.2] rounded-xl bg-gray-200 aspect-ratio-square"></div>
                    <div className="aspect-[1.7/1] grid grid-cols-[1fr,1fr] gap-6 max-md:aspect-[1.2/1.7] md:grid-cols-[1fr,1fr,1fr]">
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                        <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galery