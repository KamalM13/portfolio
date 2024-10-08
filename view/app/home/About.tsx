import React from 'react'

const About = () => {
    return (

        <div className='bg-[#1F1F1F] w-full h-auto md:h-[400px] py-10'>
            <h1 className='text-4xl text-white font-semibold text-center pt-10 tracking-wider'>About me</h1>

            <div className='flex justify-center p-4'>
                <p className='text-white text-center max-w-[600px] text-sm font-montessart font-extralight tracking-wide'>
                    Hello! I&apos;m Kamal Mohamed, a passionate web developer with a strong background
                    in computer science and a keen interest in creating intuitive and scalable web applications.
                    I am currently pursuing a Bachelor of Arts in Computer Science at October University
                    for Modern Sciences and Arts, where I&apos;ve maintained a 3.61 GPA.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-x-40 mt-10'>
                <div>
                    <h1 className='text-6xl text-[#FFD4D0] font-semibold text-center'>25</h1>
                    <p className='text-white text-center'>Projects Completed</p>
                </div>
                <div>
                    <h1 className='text-6xl text-[#FFD4D0] font-semibold text-center'>1</h1>
                    <p className='text-white text-center'>Years of Experience</p>
                </div>
                <div>
                    <h1 className='text-6xl text-[#FFD4D0] font-semibold text-center'>3</h1>
                    <p className='text-white text-center'>Clients Served</p>
                </div>
            </div>
        </div>


    )
}

export default About