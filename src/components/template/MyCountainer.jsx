const MyContainer = ({ children, containerId, containerStyle, background }) => {
    return (
        <div className={`py-8 sm:py-12 px-4 sm:px-8 md:px-16 ${background}`} id={containerId}>
            <div className={`container m-auto ${containerStyle}`}>
                {children}
            </div>
        </div>
    )
}
export default MyContainer