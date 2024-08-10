import { LinearProgress } from '@mui/material'
import React from 'react'

const Skills = () => {
    const languages = [
        {
            name: 'Javascript',
            level: 80
        },
        {
            name: 'Typescript',
            level: 70
        },
        {
            name: 'Python',
            level: 70
        },
        {
            name: 'React',
            level: 60
        },
    ]
    return (
        <div className='pb-10'>
            <div className='flex flex-col items-center gap-y-4'>
                <h1 className='text-2xl lg:text-4xl font-bold tracking-wider'>Core Skills</h1>
                <p className='text-center max-w-[90%] lg:max-w-[600px] font-extralight'>
                    I excel in essential web development skills, building robust and user-friendly web applications. From responsive front-end design to efficient back-end solutions, my passion is to deliver innovative and scalable digital experiences.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 p-6 lg:p-10 lg:px-40 gap-x-5 lg:gap-x-20 gap-y-5'>
                {languages.map((language, index) => (
                    <div key={index} className='space-y-2'>
                        <h1 className='font-semibold text-sm'>{language.name}</h1>
                        <div className='flex items-center gap-x-2'>
                            <LinearProgress
                                variant='determinate'
                                value={language.level}
                                color='inherit'
                                className='w-full text-[#FF6464]'
                            />
                            <p className='text-xs font-semibold text-[#FF6464]'>{language.level}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Skills