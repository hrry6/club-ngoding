const About = ()=>{
    return (
        <div className="py-[8rem]" id="about">
            <div className="grid grid-cols-[17rem,auto]">
                <div className="text-5xl leading-snug border-r-[2px] border-black">Apa sih itu Neracode?</div>
                <div className="text-xl grid place-items-center pl-12">Neracode atau Next Generation Code merupakan klub komunitas di SMKN 1 Kota Bekasi, dimana para siswa berkumpul dalam mendalami dunia pemrograman. Ini adalah klub yang menyediakan platform bagi siswa untuk belajar, berlatih, dan berkolaborasi dalam berbagai proyek dan aktivitas coding.</div>
            </div>
            <div className="flex flex-wrap gap-3 justify-between items-center mt-12">
                <div className="px-[2rem] py-[1rem] border rounded-md">
                    <div className="text-4xl">Frontend</div>
                    <div className="mt-3">Try this</div>
                </div>
                <div className="px-[2rem] py-[1rem] border rounded-md">
                    <div className="text-4xl">Backend</div>
                    <div className="mt-3">Try this</div>
                </div>
                <div className="px-[2rem] py-[1rem] border rounded-md">
                    <div className="text-4xl">UI/UX Design</div>
                    <div className="mt-3">Try this</div>
                </div>
                <div className="px-[2rem] py-[1rem] border rounded-md">
                    <div className="text-4xl">Android</div>
                    <div className="mt-3">Try this</div>
                </div>
                <div className="px-[2rem] py-[1rem] border rounded-md">
                    <div className="text-4xl">Mentoring</div>
                    <div className="mt-3">Try this</div>
                </div>
            </div>
        </div>
    )
}
export default About