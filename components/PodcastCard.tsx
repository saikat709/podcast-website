import Image from 'next/image';
import React from 'react'

const PodcastCard = ( {id, title, description, imgURL 
} : Readonly<{ id: number, title: string, description: string,  imgURL: string }> ) => {
  return (
    <div className='flex flex-col p-2 gap-3 justify-center items-center'>
        <figure className='flex flex-col gap-2'>
          <Image
            src={imgURL}
            alt={title} 
            height={174} 
            width={180} 
            className='aspect-4/3 rounded-xl mx-auto 2xl:w-[200px] text-white-1 flex cursor-pointer overflow-hiden cover'/>
          <div>
            <h1 className='text-16 truncate text-white-1 font-bold'> {title} </h1>
            <h2 className='text-12 capitalize text-white-2 '> {description }</h2>
          </div>          
        </figure>
    </div>
  )
}

export default PodcastCard;