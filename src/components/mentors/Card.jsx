import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = (props) => {
    const {posisi,nama,angkatan,imgSrc} = props;
    return(
        <div className="grid w-full h-full mt-8 ">
            <LazyLoadImage src={imgSrc} className="bg-cover object-cover aspect-[3/5] rounded-xl"/>
            <div className="py-4">
                <div className="uppercase text-xs text-gray-600">{posisi}</div>
                <div className="capitalize">{nama}</div>
                <div className="capitalize">{angkatan}</div>
            </div>
        </div>
    )
}
export default Card