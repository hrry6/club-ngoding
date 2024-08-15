import { Link } from 'react-router-dom'
import Star from '../../assets/star.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CardTimeline = (props) => {
    const { title, children, dropDownOpen } = props
    return (
        <div className={`${dropDownOpen ? 'mb-4' : ''} relative border-x-[2px] ransition-all`}>
            <LazyLoadImage src={Star} alt="" className={`${dropDownOpen ? 'opacity-[1]' : ''} opacity-0 ease-in-out duration-700 absolute left-[-.65rem]`} />
            <LazyLoadImage src={Star} alt="" className={`${dropDownOpen ? 'opacity-[1]' : ''} opacity-0 ease-in-out duration-700 absolute right-[-.65rem]`} />

            <div className="overflow-hidden">
                <div className={`${dropDownOpen ? 'mt-0' : ''} -mt-[100%] duration-700 transition-all grid gap-4 px-8`}>
                    <div className="text-2xl uppercase">{title}</div>
                    <div className="max-sm:text-sm">{children}</div>
                    <Link to='https://roadmap.sh/' className="border border-black flex rounded-full px-4 py-1 w-fit hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out group/btn">
                        <div>mulai belajar</div>
                        <svg className='-rotate-45 group-hover/btn:rotate-0 ease-in-out duration-300 w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardTimeline