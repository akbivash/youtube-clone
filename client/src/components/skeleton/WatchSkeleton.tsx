
import VideoSkeleton from './VideoSkeleton'

const WatchSkeleton = () => {
  return (

       <div className='w-full  grid md:flex gap-4 items-start my-4'>
         <div className=" grid h-fit gap-4 flex-1  w-full ">
    <div className="w-full  h-[340px] relative loading bg-shadow-light dark:bg-shadow-dark object-cover rounded-md bg-shadow"></div>
    <h2 className="bg-shadow-light relative loading dark:bg-shadow-dark h-10"></h2>
    <div className="flex gap-2 items-center py-2">
      <div className="bg-shadow-light relative loading image dark:bg-shadow-dark  h-20 w-20 rounded-full"></div>
      <div className="grid flex-1 gap-2">
        <h2 className="bg-shadow-light relative loading dark:bg-shadow-dark w-[80%] h-4"></h2>
        <h2 className="bg-shadow-light relative loading dark:bg-shadow-dark w-[50%] h-4"></h2>
      </div>
    </div>
  </div>

  <div className='hidden w-full md:grid gap-2 flex-[.5] '>
    <VideoSkeleton/>
    <VideoSkeleton/>
  </div>
       </div>


  )
}

export default WatchSkeleton