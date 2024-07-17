const MyContainer = (props) => {
    const {children, containerId, containerStyle, background} = props;
    return(
        <div className={`py-8 sm:py-12 px-4 sm:px-8 md:px-16 ${background}`}>
            <div className={`container m-auto ${containerStyle}`} id={containerId}>
                {children} 
            </div>
        </div>
    )
}
export default MyContainer