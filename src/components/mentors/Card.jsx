const Card = (props) => {
    const {posisi,nama,kelas,imgSrc} = props;
    return(
        <div className="grid w-full h-full mt-8 ">
            <img src={imgSrc} className="bg-cover object-cover aspect-[3/5] rounded-xl"/>
            <div className="py-4">
                <div className="uppercase max-md:text-[.7rem]">{posisi}</div>
                <div className="capitalize">{nama}</div>
                <div className="uppercase">{kelas}</div>
            </div>
        </div>
    )
}
export default Card