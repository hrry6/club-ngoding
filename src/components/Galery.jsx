const Galery = ()=> {
    return (
        <div className="py-[8rem] px-[1rem] sm:px-[2rem] md:px-[3rem]">
            <div className="container m-auto" id="galery">
                <div className="flex justify-between items-center sm:gap-[3rem]">
                    <div className="">
                        <div className="text-5xl max-sm:text-2xl">Moment kami.</div>
                        <div className="text-xl max-sm:text-xs mt-3">Tinggalkan 1 moment yang membuatmu berkembang di sini</div>
                    </div>
                    <button className="self-end text-xl max-sm:text-xs max-sm:px-[1rem] max-sm:py-[.2rem] text-nowrap border rounded-full border-black px-[2rem] py-[.5rem]">Lihat semua</button>
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