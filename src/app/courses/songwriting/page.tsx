import Image from 'next/image'
import React from 'react'

function page() {
  const data = [
    {
      id: 1,
      title: 'Melody',
      description: `<strong>Melody</strong> is the heart of a song, consisting of a sequence of musical notes that create a memorable tune. Songwriters focus on crafting captivating melodies that capture the listener's attention and evoke emotion.`,
      image: 'https://unsplash.com/photos/W1BcXxByNJE',
    },
    {
      id: 2,
      title: 'Harmony',
      description: `<strong>Harmony</strong> refers to the combination of simultaneous musical notes to create chords and chord progressions. Songwriters use harmony to add depth and richness to their songs, enhancing the emotional impact of the music.`,
      image: 'https://unsplash.com/photos/dz6c4_L9SsQ',
    },
    {
      id: 3,
      title: 'Lyrics',
      description: `<strong>Lyrics</strong> are the words sung in a song, conveying the song's message, story, or emotion. Songwriters focus on writing compelling lyrics that resonate with listeners and enhance the overall meaning of the song.`,
      image: 'https://unsplash.com/photos/D-jqcQ_-rFg',
    },
    {
      id: 4,
      title: 'Structure',
      description: `<strong>Song structure</strong> refers to the organization of the various sections of a song, such as verse, chorus, bridge, and refrain. Songwriters use structure to create a cohesive and engaging musical narrative that keeps listeners engaged from start to finish.`,
      image: 'https://unsplash.com/photos/7epBXXzgumw',
    },
    {
      id: 5,
      title: 'Emotion',
      description: `<strong>Emotion</strong> is the driving force behind every great song, eliciting feelings of joy, sadness, love, or nostalgia in listeners. Songwriters strive to infuse their music with authentic emotion, creating a deep connection with their audience.`,
      image: 'https://unsplash.com/photos/yIbOzMFFrlw',
    }

  ]
  return (
    <div>
      <div className='bg-gray-100 dark:bg-gray-900 min-h-screen relative py-12 pt-36 '>
        <h1 className='text-center text-4xl font-bold text-blue-700'>Songwriting Theory</h1>

        <main>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold text-blue-700'>Introduction</h2>
            <p className='text-justify text-lg font-semibold text-gray-700 dark:text-gray-300'>
              Songwriting theory provides songwriters with the tools and techniques to craft compelling and memorable songs. It encompasses aspects such as melody, harmony, lyrics, structure, and emotion, guiding songwriters in creating music that resonates with listeners on a profound level.
            </p>
          </div>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold text-blue-700'>Key Concepts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {data.map((item) => (
                <div key={item.id} className='bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 last:col-span-2 md:col-span-1'>
                  <h3 className='text-xl font-bold text-blue-700'>{item.title}</h3>
                  <p className='text-justify text-base font-semibold text-gray-700 dark:text-gray-300' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  <Image src={item.image} alt={item.title} width={400} height={300} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page