import Icon from '../assets/g4712.png'
import FB from '../assets/fb.svg'
import LI from '../assets/li.svg'
import IG from '../assets/ig.svg'
import TW from '../assets/tw.svg'
import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png'
import Location from '../assets/location.png'

const Footer = ()=>{
    return (
        <div className="py-[40px] px-[1rem] sm:px-[2rem] md:px-[3rem] bg-[#121212]">
            <div className="container m-auto flex justify-between items-center flex-wrap gap-[50px]">
                <div id='contact'>
                    <div className="flex items-center gap-[12px]">
                        <img src={Icon} alt="" className="w-[37px] h-[37px]" />
                        <div className="text-white font-semibold text-[20px]">Neracode</div>
                    </div>
                    <div className="bg-white mt-[47px] py-[18px] px-[24px] flex justify-between items-center gap-[88px] rounded-[12px]">
                        <div className="text-[18px]">Ready for start  your Journey? <br /> Join with us Now.</div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT8cX1sG1nKo1cYyQmgCm3bY3aL0ZoKdDg08cGMldhF4iqww/viewform" target="_blank">
                            <button className="bg-[#121212] text-white py-[12px] px-[24px] rounded-[12px] text-[14px]">Join Now!</button>
                        </a>
                    </div>
                    <div className="flex gap-[15px] pt-[50px]">
                        <img src={FB} alt="" className="w-[24px] h-[24px]" />
                        <img src={TW} alt="" className="w-[24px] h-[24px]" />
                        <img src={LI} alt="" className="w-[24px] h-[24px]" />
                        <img src={IG} alt="" className="w-[24px] h-[24px]" />
                    </div>
                </div>
                <div className="flex flex-wrap items-start text-white gap-[80px]">
                    <div>
                        <div className="font-bold text-[18px] mb-[40px]">Pages</div>
                        <ul className="text-[14px] flex flex-col gap-[17px]">
                            <li>Home it work</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Demo</li>
                        </ul>
                    </div>

                    <div>
                        <div className="font-bold text-[18px] mb-[40px]">Service</div>
                        <ul className="text-[14px] flex flex-col gap-[17px]">
                        <li>Fundamental</li>
                            <li>UI/UX Design</li>
                            <li>Frontend</li>
                            <li>Backend</li>
                            <li>Fullstack</li>
                            <li>Mentoring</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-[18px] mb-[40px]">Contact</div>
                        <ul className="text-[14px] flex flex-col gap-[17px]">
                            <li className="flex gap-[8px]">
                                <img src={Phone} alt="" className="w-[24px] h-[24px]" />
                                <div>+62 819-0847-7337</div>
                            </li>
                            <li className="flex gap-[8px]">
                                <img src={Mail} alt="" className="w-[24px] h-[24px]" />
                                <div>rplsmkn1kotabekasi@gmail.com</div>
                            </li>
                            <li className="flex gap-[8px]">
                                <img src={Location} alt="" className="w-[24px] h-[24px]" />
                                <div>Rekayasa Perangkat Lunak SMKN 1 Kota Bekasi</div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer