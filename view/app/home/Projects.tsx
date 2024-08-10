import React from 'react'
import Projectcard from './ProjectCard'
import { cards } from '../utils/cards'

const Projects = () => {

  
  return (
    <div className='relative h-[750px]'>
      <div className='bg-[#FFD4D0] w-full h-[300px] flex justify-center p-10 leading-relaxed'>
        <div className='flex flex-col text-center'>
          <h1 className='text-4xl font-bold pb-5 tracking-wider'>My Portfolio</h1>
          <p className='font-extralight max-w-[720px]'>Explore my development services,
            from responsive design and interactive front-end development to scalable backend solutions.
            Let&apos;s build robust and innovative web applications together.</p>
        </div>
        <div className='absolute top-[200px] grid grid-cols-3 gap-10'>
          {cards.map((card,index) => (
            <Projectcard
              key={index}
              title={card.title}
              type={card.type}
              link={card.link}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects