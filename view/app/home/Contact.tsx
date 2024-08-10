"use client"

import React from 'react'

const Contact = () => {



    return (
        <div className='h-[500px] w-full bg-[#FFD4D0] flex items-center justify-center gap-x-40'>
            <div className='space-y-5'>
                <h1 className='text-4xl font-bold tracking-wider'>Get In Touch</h1>
                <p className='max-w-[350px]'>Have a question or a project in mind? I&apos;d love to hear from you. Let&apos;s chat and make something amazing together.</p>
            </div>
            <div className='w-[400px]'>
                <form action="" className='flex flex-col gap-y-5 items-start  '>
                    <input type="text" placeholder='First Name' className='p-1 rounded-sm w-full' />
                    <input type="text" placeholder='Email' className='p-1 rounded-sm w-full' />
                    <input type="text" placeholder='Phone Number' className='p-1 rounded-sm w-full' />
                    <textarea placeholder='Your Message' className='p-1 rounded-sm w-full h-[200px]'></textarea>
                    <button className='bg-[#FF6464] text-white p-1 px-6 rounded-sm font-semibold text-sm'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact