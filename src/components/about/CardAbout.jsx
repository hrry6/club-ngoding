import CardTimeline from "./CardTimeline";

const Card = (props) => {
  const { title, tech, id, isDropdownClicked, setDropdownClicked } = props;

  const dropDownOpen = isDropdownClicked === id;

  const handleClick = () => {
    setDropdownClicked(dropDownOpen ? null : id);
  };

  return (
    <div className="text-start">
      <div
        onClick={handleClick}
        className={`${dropDownOpen ? "text-[#FEFCFB]" : ""
          } border-zinc-500 relative border rounded-xl max-sm:w-full ease-in-out duration-300 overflow-hidden`}
      >
        <div className={` ${dropDownOpen ? "bg-[#25263A] translate-y-[-50%] left-0 rounded-none w-full" : ""} rounded-full absolute top-[50%] -left-20 aspect-square w-0 -z-10 ease-in-out duration-700`}></div>
        <div className="px-8 py-5 flex justify-between items-center cursor-pointer">
          <div className="text-xl sm:text-4xl">{title}</div>
          <div className="flex justify-end items-center gap-2">
            <div className="max-sm:text-xs">What you'll learn?</div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" >
              <path d="M5 12H19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className={` ${dropDownOpen ? 'mt-2' : ''} grid`}>
        {tech.map((item, index) => (
          <CardTimeline key={index} dropDownOpen={dropDownOpen} title={item.title}>
            {item.desc}
          </CardTimeline>
        ))}
      </div>
    </div >
  );
};
export default Card;
