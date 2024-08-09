import Image from "next/image"

const Hero = () => {
    return (
        <div className='h-screen flex items-center justify-center space-x-40 bg-[#fcebeb]'>
            <div className="space-y-5">
                <h1 className='text-5xl font-bold leading-tight'>Hello, I&apos;m <span className="bg-[#FF6464] text-white p-1 rounded-md">Kamal</span> <br></br> A Web Developer</h1>
                <p className='text-xl max-w-[400px]'> A passionate developer specializing in creating seamless, user-friendly web applications that bring ideas to life.</p>
                <button className='bg-[#FF6464] text-white px-5 py-2 rounded-md hover:shadow-lg transition-all font-bold'>Download Resume</button>
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