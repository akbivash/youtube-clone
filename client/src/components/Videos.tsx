import {  VideoType } from "../../types";

import Video from "./Video";
import { useVideos } from "../hooks/useVideos";
import VideoSkeleton from "./skeleton/VideoSkeleton";

const Videos = () => {
  const {videos} = useVideos()
  let array = [...Array(10).keys()];
 

  return (
    <>
      {videos === undefined || videos.length === 0 ? (
        <div
        className=" grid place-items-center sm:grid-cols-auto-fit gap-4 rounded-md"
        >
          {array.map((a: any, i: number) => {
            return (
              <VideoSkeleton key={a}/>
            );
          })}
        </div>
      ) : (
        <div className=" grid gap-4 flex-col h-full overflow-y-scroll sm:grid-cols-auto-fit w-full    ">
          {" "}
          {videos.length !== 0 && videos.map((video: VideoType) => {
            return (
             <Video  key={video.id} {...video} />
            );
          })}
        </div>
      )}
       
    
    </>
  );
};

export default Videos;