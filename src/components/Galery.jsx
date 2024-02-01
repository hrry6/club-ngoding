const Galery = ()=> {
    return (
        <div className="py-[8rem]" id="galery">
            <div className="flex justify-between items-center">
                <div className="">
                    <div className="text-5xl">Moment kami.</div>
                    <div className="text-xl mt-3">Tinggalkan 1 moment yang membuat mu berkembang di sini</div>
                </div>
                <button className="text-xl border rounded-full border-black px-[2rem] py-[.5rem]">Lihat semua</button>
            </div>
            <div className="flex gap-6 aspect-[11/4] mt-8">
                <div className="w-1/2 h-full rounded-xl bg-gray-200 aspect-ratio-square">
                    <img src="../../img/galeri/3.jpeg" alt="" />
                </div>
                <div className="w-1/2 h-full grid grid-cols-[1fr,1fr,1fr] gap-6">
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/1.jpeg" alt="" /> */}
                    </div>
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/2.jpeg" alt="" /> */}
                    </div>
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/12.jpeg" alt="" /> */}
                    </div>
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/14.jpeg" alt="" /> */}
                    </div>
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/21.jpeg" alt="" /> */}
                    </div>
                    <div className="bg-gray-200 w-full h-full rounded-xl aspect-ratio-square">
                        {/* <img src="../../img/galeri/22.jpeg" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galery