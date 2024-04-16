import AllCoursesComponent from "./AllCoursesComponent"
import courseData from "@/data/music_courses.json"


function page() {

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold text-white mb-8">All courses ({courseData.courses.length})</h1>
      <AllCoursesComponent />
    </div>
  )
}

export default page


export function generateMetadata() {
  return {
    title: "All courses",
    description: "All courses page",
  }
}