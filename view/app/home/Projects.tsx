import React from 'react'
import Projectcard from './ProjectCard'
import { cards } from '../utils/cards'

const Projects = () => {


  return (
    <div className='relative h-[1750px] lg:h-[800px]'>
      <div className='bg-[#FFD4D0] w-full h-[300px] flex flex-col items-center justify-center  lg:p-10 leading-relaxed'>
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl lg:text-4xl font-bold pb-3 lg:pb-5 tracking-wider'>
            My Portfolio
          </h1>
          <p className='font-extralight max-w-[90%] lg:max-w-[720px]'>
            Explore my development services, from responsive design and interactive front-end development to scalable backend solutions. Let's build robust and innovative web applications together.
          </p>
        </div>
        <div className='absolute top-[250px] lg:top-[250px] grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 w-full px-4'>
          {cards.map((card, index) => (
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