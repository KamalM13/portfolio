"use client"

import Image from "next/image"

const Hero = () => {
    return (
        <div className='h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:gap-x-40 gap-y-10 md:gap-y-0 bg-[#fcebeb] '>
            <div className="space-y-5 text-center md:text-left">
                <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                    Hello, I&apos;m <span className="bg-[#FF6464] text-white p-1 rounded-md">Kamal</span><br />
                    A Web Developer
                </h1>
                <p className='text-lg md:text-xl max-w-[400px] mx-auto md:mx-0'>
                    A passionate developer specializing in creating seamless, user-friendly web applications that bring ideas to life.
                </p>
                <button className='bg-[#FF6464] text-white px-5 py-2 rounded-md hover:shadow-lg transition-all font-bold'
                    onClick={() => {
                        window.open("https://drive.google.com/file/d/1CCDWMRz2BJAavsWw4sGQBBxLqnHoRJwP/view?usp=drive_link");
                    }}
                >
                    Download Resume
                </button>
            </div>
            <div>
                <Image
                    src={"/image.jpg"}
                    alt='image'
                    width={250}
                    height={250}
                    className='rounded-full shadow-md shadow-[#FF6464]/50'
                />
            </div>
        </div>

    )

}
export default Hero