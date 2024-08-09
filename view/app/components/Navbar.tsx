import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full px-10 pt-5 flex items-center justify-between bg-[#fcebeb] font-semibold'>
            <div>
                <p>Kamal <span className='text-[#FF6464]'> Mohamed </span></p>
            </div>
            <ul className='flex align-rightfont-semibold'>
                <li className='hover:bg-[#FF6464] p-3 rounded-md hover:text-white transition-all'><Link href={"/about"}>About</Link></li>
                <li className='hover:bg-[#FF6464] p-3 rounded-md hover:text-white transition-all'><Link href={"/projects"}>Projects</Link></li>
                <li className='hover:bg-[#FF6464] p-3 rounded-md hover:text-white transition-all'><Link href={"/contact"}>Contact</Link></li>
            </ul>
            <div>
                <button className='bg-[#FF6464] text-white px-5 py-2 rounded-md hover:shadow-lg transition-all font-bold'>Let's Talk</button>
            </div>
        </nav>
    )
}

export default Navbar