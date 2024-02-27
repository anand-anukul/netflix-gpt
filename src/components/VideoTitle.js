import React from 'react'

const VideoTitle = ({ title,overview}) => {

  return (
    <div className='py-[30%] md:py-[20%] px-6 md:px-24  absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className=' text-3xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block mt-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white py-2 md:py-3 mt-6 text-black px-6 md:px-12 rounded-lg 
        text-xl hover:bg-opacity-70'> Play</button>
        <button className=' hidden md:inline-block bg-gray-500 mx-2 py-3 mt-6 text-white px-10 rounded-lg text-xl bg-opacity-50'>more info</button>
      </div>
    </div>
  )
}

export default VideoTitle
