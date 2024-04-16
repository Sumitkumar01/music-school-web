import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen relative py-12 pt-36 '>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className='text-4xl dark:text-gray-100  font-bold text-center'>Exploring the Fundamentals of Music Production Theory</h1>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <p className='text-lg text-justify dark:text-white mb-2'>Welcome to our comprehensive guide on music production theory! Whether you&apos;re a budding producer or a seasoned musician looking to enhance your skills, understanding the underlying principles of music production is essential for creating captivating tracks.</p>
          <p className='text-lg text-justify dark:text-white mb-2'>From mastering sound design to perfecting arrangement techniques, this guide covers it all. Dive into topics like harmony, rhythm, melody, and structure, and discover how each element contributes to crafting compelling compositions.</p>
          <p className='text-lg text-justify dark:text-white mb-2'>Gain insights into the technical aspects of recording, mixing, and mastering, and learn how to harness the power of technology to bring your musical visions to life.</p>
          <p className='text-lg text-justify dark:text-white mb-2'>Our aim is to empower you with the knowledge and tools necessary to unleash your creativity and elevate your productions to new heights. Explore the theory, experiment with different approaches, and embark on an exciting journey of sonic exploration.</p>
          <p className='text-lg text-justify dark:text-white mb-2'>Unlock the secrets of music production theory and unleash your creative potential today!</p>
          <div className='flex justify-center mt-10 '>
            <Image src={"/courses/Music_Production.avif"} className={"rounded-lg border-2 border-gray-300 p-2 shadow-sm"} alt="Music Production" width={500} height={500} />

          </div>
        </div>
      </div>
      <BackgroundBeams/>
    </div>
  )
}

export default page

export function generateMetadata() {
  return {
    title: "Music Production Theory",
    description: "Learn the fundamentals of music production theory to unlock your creative potential and enhance your musical compositions.",
  };
}