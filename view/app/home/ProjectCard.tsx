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
            <div className='flex flex-col'>
                <Image src={details.img} alt={details.title}
                    width={300} height={300}
                    className='object-fit rounded-sm w-[300px] h-[150px] shadow-md'
                />
                <div className='flex justify-between py-2'>
                    <div>
                        <h1 className='text-xl font-bold py-2'>{details.title}</h1>
                        <p className='text-md font-extralight'>{details.type}</p>
                    </div>
                    <button onClick={() => {
                        window.open(details.link)
                    }}>
                        <CircleArrowRight
                            color='#FF6464'
                            size={24}
                        />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Projectcard