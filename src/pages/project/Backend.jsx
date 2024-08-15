import React from 'react'
import MyContainer from '../../components/template/MyCountainer'
import gambar from '../../assets/galeri/2.jpeg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Backend() {
    return (
        <MyContainer containerStyle='mt-[3rem]'>
            <div className="grid grid-cols-[auto_auto] gap-20 items-end">
                <div className="grid gap-4">
                    <div className="">Hover to see the GitHub</div>
                    <div className="text-5xl">Backend Projects</div>
                    <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora error illo in officia fugit libero, similique maiores repellat, assumenda quasi ipsam nisi velit vitae?</div>
                </div>
                <Link to="/project/frontend" className="items-end">See the Frontend Projects</Link>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 mt-4">
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
                <div className="aspect-[5/3] relative rounded-lg overflow-hidden">
                    <LazyLoadImage src={gambar} alt="" className='hover:scale-105 transition-all  bg-cover object-cover rounded-xl h-full w-full' />
                    <div className="absolute pointer-events-none top-0 left-0 bg-gradient-to-b from-black/0 from-0% via-black/10 via-60% to-black to-100% w-full h-full"></div>
                    <div className="absolute z-10 bottom-4 left-4 text-white">Coffee Shop Landing Page.</div>
                </div>
            </div>

        </MyContainer>
    )
}

export default Backend