import DetailCard from "./DetailCard"

const Card = (props) => {
    const { title, tech } = props
    return (
        <button className="group text-start">
            <div className=" border-zinc-500 relative border rounded-xl max-sm:w-full group-focus:text-[#FEFCFB] ease-in-out duration-300 overflow-hidden">
                <div className="absolute group-focus:bg-[#25263A] bottom-0 left-0 rounded-r-full rounded-tl-full group-focus:rounded-none group-focus:w-full group-focus:h-full w-0 h-0 -z-10 ease-in-out duration-700" ></div>
                <div className="px-8 py-5 flex justify-between items-center">
                    <div className="text-xl sm:text-4xl">{title}</div>
                    <div className='flex justify-end items-center gap-2'>
                        <div className="max-sm:text-xs">What you'll learn?</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="group-focus:grid hidden border-x-[2px] gap-4 mt-4">
                {
                    tech.map((item, index) => (
                        <DetailCard key={index} title={item.title}>
                            {item.desc}
                        </DetailCard>
                    ))
                }
            </div>
        </button>

    )
}
export default Card