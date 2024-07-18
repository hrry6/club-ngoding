import Card from "./Card"
import MyContainer from "../template/MyCountainer"
import gambar from "../../assets/galeri/1.jpeg"
const About = () => {
    const frontend = [
        {
            title: 'HTML',
            desc: 'HTML adalah singkatan dari Hypertext Markup Language, HTML merupakan salah satu bahasa pengkodean atau pemograman yang digunakan untuk membuat halaman website yang ditampilkan pada web browser.'
        },
        {
            title: 'CSS',
            desc: 'Cascading Style Sheets, artinya sebuah bahasa sederhana yang digunakan untuk menambahkan gaya/styling (misalnya, font, warna, spasi) ke sebuah halaman website. Jika diibaratkan, HTML merupakan sebuah kerangka, CSS ini bertindak sebagai kulit/penutup dari kerangka tersebut.'
        },
        {
            title: 'Javascript',
            desc: 'JavaScript adalah bahasa skrip yang sering digunakan oleh web developer untuk menambahkan interaksi dan fungsionalitas dinamis ke situs web.'
        },
        {
            title: 'React',
            desc: 'React adalah libray JavaScript yang digunakan untuk membangun user interface yang interaktif berbasis component.'
        },
    ];
    const Backend = [
        {
            title: 'laravel',
            desc: 'loremipsum dolor sit amet'
        },
    ];

    return (
        <>
            <MyContainer containerId='about' background='bg-gray-100'>
                <div className="flex max-md:flex-col gap-8 md:items-center md:justify-center">
                    <div className="text-5xl max-sm:text-2xl border-gray-500 md:pr-8 md:border-r-[2px] max-md:pb-8 max-md:border-b-[1px] leading-normal">
                        Apa sih itu Neracode?
                    </div>
                    <div className="text-lg leading-normal text-gray-600">
                        Neracode atau Next Generation Code merupakan klub komunitas di SMKN 1 Kota Bekasi, dimana para siswa berkumpul dalam mendalami dunia pemrograman.
                        Ini adalah klub yang menyediakan platform bagi siswa untuk belajar, berlatih, dan berkolaborasi dalam berbagai proyek dan aktivitas coding.
                    </div>
                </div>
            </MyContainer>
            <MyContainer containerStyle='mb-20'>
                <div className="grid grid-cols-1 gap-16 text-justify md:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <div className="text-5xl max-sm:text-2xl">Kita Belajar Apa Aja Nih?</div>
                        <div className="text-lg">Neracode bakalan ngajarin kamu mulai dari Fullstack Web Development, UI/UX Design, dan Android Development dengan menggunakan teknologi terbaru. Kita bakalan bimbing kamu sampai kamu bosen lohh!</div>
                        <img src={gambar} alt="" className="h-[14rem] bg-cover object-cover rounded-xl mt-[-.9rem]"/>
                    </div>
                    <div className="grid gap-5 ">
                        <Card title='Frontend' tech={frontend} />
                        <Card title='Backend' tech={frontend}/>
                        <Card title='UI/UX Design' tech={frontend}/>
                        <Card title='Android' tech={frontend}/>
                    </div>
                </div>
            </MyContainer>
        </>
    )
}
export default About