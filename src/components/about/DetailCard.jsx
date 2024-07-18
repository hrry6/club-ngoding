import Star from '../../assets/star.svg'

const DetailCard = (props) => {
    const { title, children } = props
    return (
        <div className="group-focus:pointer-events-none relative border-x-[2px] delay-[1s] ransition-all">
            <img src={Star} alt="" className="group-focus:opacity-[1] opacity-0 ease-in-out duration-700 absolute left-[-.65rem]" />
            <img src={Star} alt="" className="group-focus:opacity-[1] opacity-0 ease-in-out duration-700 absolute right-[-.65rem]" />

            <div className="overflow-hidden">
                <div className="group-focus:mt-0 -mt-[100%] duration-700 transition-all grid gap-4 px-8">
                    <div className="text-xl uppercase">{title}</div>
                    <div className="text-lg max-sm:text-sm">{children}</div>
                    <a className="border border-black flex rounded-full px-4 py-1 w-fit hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out group/btn">
                        <button>mulai belajar</button>
                        <svg className='-rotate-45 group-hover/btn:rotate-0 ease-in-out duration-300' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DetailCard