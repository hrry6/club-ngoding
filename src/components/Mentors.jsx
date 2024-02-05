import DickyImg from '../../img/mentor/Dicky.jpeg'

const Mentors = ()=>{
    return(
        <div className="py-[8rem] px-[1rem] sm:px-[2rem] md:px-[3rem] bg-[#FBF9F9]">
            <div className="container m-auto" id="mentors">
                <div className="flex justify-between gap-[1rem] sm:gap-[5rem] max-sm:flex-col">
                    <div className="grid gap-2">
                        <div className="text-2xl max-sm:text-xs">Tim Neracode.</div>
                        <div className="text-5xl max-sm:text-2xl">Siapa aja sih mereka?</div>
                        <div className="text-lg mt-3">
                            Temukan para mentor berpengalaman dan inspiratif yang siap membantu Anda mencapai tujuan Anda.

                            Di sini, Anda akan menemukan komunitas mentor yang luar biasa,
                            yang terdiri dari para profesional dan pakar di berbagai bidang.
                            Para mentor kami memiliki dedikasi untuk membantu Anda dalam perjalanan Anda,
                            baik itu dalam mengembangkan karir, mempelajari keterampilan baru, atau mencapai tujuan pribadi.
                        </div>
                    </div>
                    <div className="flex items-end justify-center mb-7 gap-[16px]">
                        <svg className='rotate-180 border rounded-full border-black text-bg-[#25263A] cursor-pointer hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300' width="105" height="41" viewBox="0 0 105 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72.5146 12L80.9999 20.4853" stroke="currentcolor" stroke-linecap="round"/>
                            <path d="M24 20.4853H81" stroke="currentcolor" stroke-linecap="round"/>
                            <path d="M72.5146 28.9706L80.9999 20.4853" stroke="currentcolor" stroke-linecap="round"/>
                        </svg>
                        <svg className='border rounded-full border-black text-bg-[#25263A] cursor-pointer hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300' width="105" height="41" viewBox="0 0 105 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72.5146 12L80.9999 20.4853" stroke="currentcolor" stroke-linecap="round"/>
                            <path d="M24 20.4853H81" stroke="currentcolor" stroke-linecap="round"/>
                            <path d="M72.5146 28.9706L80.9999 20.4853" stroke="currentcolor" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className="flex overflow-x-auto gap-6 mt-6 [&>*:nth-child(even)]:mt-[5rem] ">
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">KETUA Neracode.</div>
                            <div className="">Muhammad Sumbul</div>
                            <div className="">12 RPL B</div>
                        </div>
                    </div>
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">WAKIL KETUA Neracode.</div>
                            <div className="">Dicky Asqaelani</div>
                            <div className="">11 RPL B</div>
                        </div>
                    </div>
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">KETUA Neracode.</div>
                            <div className="">Muhammad Sumbul</div>
                            <div className="">12 RPL B</div>
                        </div>
                    </div>
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">KETUA Neracode.</div>
                            <div className="">Muhammad Sumbul</div>
                            <div className="">12 RPL B</div>
                        </div>
                    </div>
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">KETUA Neracode.</div>
                            <div className="">Muhammad Sumbul</div>
                            <div className="">12 RPL B</div>
                        </div>
                    </div>
                    <div className="grid w-[15rem] h-full">
                        <img src={DickyImg} className="bg-gray-300 aspect-[2/4] rounded-xl"/>
                        <div className="">
                            <div className="">KETUA Neracode.</div>
                            <div className="">Muhammad Sumbul</div>
                            <div className="">12 RPL B</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors