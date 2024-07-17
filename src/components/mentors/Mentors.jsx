import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";
import DickyImg from '../../assets/mentor/Dicky.jpeg'
import MyContainer from "../template/MyCountainer";

const Mentors = () => {
    const [mentors, setMentor] = useState([
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
        {
            name: "dicky asqaelany ibnul hakim",
            posisi: "ketua neracode",
            kelas: "12 rpl b",
            img: DickyImg,
        },
    ]);

    const [isMoved, setIsMoved] = useState('');

    const handleMovedClick = () => {
        setIsMoved(true)
        setTimeout(() => setIsMoved(false), 300)
        console.log()
    };

    return (
        <MyContainer containerId='mentors' containerStyle='mt-20'>
            <Splide
                hasTrack={false}
                options={{
                    perPage: 5,
                    rewind: true,
                    rewindByDrag: true,
                    speed: 700,
                    easing: "cubic-bezier(.75, .2, .2, 0.94)",
                    pagination: false,
                    gap: 10,
                    breakpoints: {
                        620: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 3,
                        },
                        1024: {
                            perPage: 4,
                        },
                    },
                }}
            >
                <div className="custom-wrapper">
                    <div className="grid gap-4 grid-cols-[auto_auto] max-md:grid-cols-1 items-end">
                        <div className="grid gap-2">
                            <div className="text-2xl max-sm:text-xs">Tim Neracode.</div>
                            <div className="text-5xl max-sm:text-2xl">
                                Siapa aja sih mereka?
                            </div>
                            <div className="text-lg mt-3">
                                Temukan para mentor berpengalaman dan inspiratif yang siap
                                membantu Anda mencapai tujuan Anda. Di sini, Anda akan menemukan
                                komunitas mentor yang luar biasa, yang terdiri dari para
                                profesional dan pakar di berbagai bidang. Para mentor kami
                                memiliki dedikasi untuk membantu Anda dalam perjalanan Anda,
                                baik itu dalam mengembangkan karir, mempelajari keterampilan
                                baru, atau mencapai tujuan pribadi.
                            </div>
                        </div>
                        <div className="splide__arrows relative w-[12rem] mb-8 flex justify-between">
                            <button
                                className="splide__arrow--prev"
                                onClick={handleMovedClick}
                            >
                                <svg
                                    className="border rounded-full border-black text-bg-[#25263A] cursor-pointer hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300"
                                    width="80"
                                    height="30"
                                    viewBox="0 0 105 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M72.5146 12L80.9999 20.4853"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M24 20.4853H81"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M72.5146 28.9706L80.9999 20.4853"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                            <button
                                className="splide__arrow--next"
                                onClick={handleMovedClick}
                            >
                                <svg
                                    className="border rounded-full border-black text-bg-[#25263A] cursor-pointer hover:bg-[#25263A] hover:text-[#FEFCFB] ease-in-out duration-300"
                                    width="80"
                                    height="30"
                                    viewBox="0 0 105 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M72.5146 12L80.9999 20.4853"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M24 20.4853H81"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M72.5146 28.9706L80.9999 20.4853"
                                        stroke="currentcolor"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <SplideTrack>
                        {mentors.map(({ name, posisi, kelas, img }, index) => (
                            <SplideSlide key={index} className={`mentor-card h-full ${isMoved && 'animasi'}`}>
                                <Card
                                    posisi={posisi}
                                    nama={name}
                                    kelas={kelas}
                                    imgSrc={img}
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </div>
            </Splide>
        </MyContainer>
    );
};

export default Mentors;
