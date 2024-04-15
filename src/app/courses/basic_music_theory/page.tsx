import Image from "next/image";
import React from "react";

function all_course() {
  const data = [
    {
      id: 1,
      name: "Notes and Pitch",
      description: `
      In music, a <strong>note</strong> represents a sound with a specific pitch and duration. Pitch refers to the highness or lowness of a sound. Notes are named using the first seven letters of the alphabet: A, B, C, D, E, F, and G. The distance between two pitches is called an <strong>interval</strong>.
      `,
      imgurl: "/courses/piano.jpg",
    },
    {
      id: 2,
      name: "Scales",
      description: `
      A <strong>scale</strong> is a series of notes arranged in ascending or descending order of pitch. Scales provide the framework for melody and harmony. The most common scale in Western music is the <strong>major scale</strong>, which consists of seven notes separated by specific intervals.
      `,
      imgurl: "/courses/premium_photo.avif",
    },
    {
      id: 3,
      name: "Chords",
      description: `
      A <strong>chord</strong> is a group of three or more notes played simultaneously. Chords provide harmony and support to the melody. Common types of chords include major chords, minor chords, diminished chords, and augmented chords.
      `,
      imgurl: "/courses/Guitar_chords.avif",
    },
    {
      id: 4,
      name: "Rhythm",
      description: `
      <strong>Rhythm</strong> refers to the timing of musical sounds and silences. It is organized into patterns called <strong>rhythmic meters</strong>, which dictate the arrangement of strong and weak beats in music. Rhythm is essential for creating groove and movement in music.
      `,
      imgurl: "/courses/music.avif",
    },
    {
      id: 5,
      name: "Key Signatures",
      description: `
      A <strong>key signature</strong> is a set of sharps or flats placed at the beginning of a musical staff to indicate the key of a piece of music. Key signatures help musicians determine which notes are played with altered pitches throughout the piece.
    `,
      imgurl: "/courses/fretboard.avif",
    },
  ];
  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-900 min-h-screen relative py-12 pt-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h1 className="text-3xl font-bold mb-10 text-center dark:text-white text-black">
            Music Theory: A Comprehensive Guide
          </h1>
          <p className="text-lg mb-10 text-center dark:text-white text-black">
            Music theory is the study of the principles and elements of music,
            including melody, harmony, rhythm, and form. Understanding music
            theory provides musicians with the foundation to create, perform,
            and appreciate music.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-10 text-center dark:text-white text-black mt-8">
          Key Concepts
        </h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          {data.map((item) => (
            <div key={item.id} className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg lg:flex  mb-8 ${item.id % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className="lg:w-[400px] h-48 bg-gray-200 rounded-lg overflow-hidden">
                <Image src={item.imgurl} alt={item.name} width={500} height={300} className="w-full h-48 object-cover hover:scale-110 transition-all duration-500" />

              </div>
              <div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 dark:text-white text-black">{item.name} </h3>
                </div>
                <div className="p-4">
                {/* dangerouslySetInnerHTML={{ __html: item.content }} */}
                  <p className="dark:text-gray-400 text-black text-base" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default all_course;
