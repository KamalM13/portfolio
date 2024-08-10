"use client"

import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface ProjectcardProps {
    title: string
    type: string
    link: string
    img: string
}

const Projectcard = (details: ProjectcardProps) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <Image
                    src={details.img}
                    alt={details.title}
                    width={300}
                    height={300}
                    className='object-cover rounded-sm w-full h-[150px] shadow-md'
                />
                <div className='flex justify-between items-center py-2 w-full'>
                    <div>
                        <h1 className='text-lg lg:text-xl font-bold py-2'>{details.title}</h1>
                        <p className='text-sm lg:text-md font-extralight'>{details.type}</p>
                    </div>
                    <button
                        onClick={() => {
                            window.open(details.link);
                        }}
                        className='ml-2'
                    >
                        <CircleArrowRight color='#FF6464' size={24} />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Projectcard