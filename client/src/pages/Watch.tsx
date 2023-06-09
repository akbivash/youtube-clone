import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useVideo } from "../hooks/useVideo";
import { useChannel } from "../hooks/useChannel";
import { formatNumber } from "../utils/formatNumber";
import VideoSkeleton from "../components/skeleton/VideoSkeleton";
import Videos from "../components/Videos";
import CategoriesBar from "../components/CategoriesBar";
import WatchSkeleton from "../components/skeleton/WatchSkeleton";

const Watch = () => {
  const [showMore, setShowMore] = useState(false);
  const { video, formattedData } = useVideo();
  const [formatSubs, setFormatSubs] = useState<string>();
  const [thumb, setThumb] = useState({
    up: false,
    down: false,
  });
  const { channel } = useChannel(video?.snippet.channelId);

  useEffect(() => {
    if (channel !== undefined && channel.statistics !== undefined) {
      let subscribers = channel.statistics.subscriberCount;
      let fSubs = formatNumber(Number(subscribers));
      setFormatSubs(fSubs);
    }
  }, [channel]);

  function handleDescription() {
    setShowMore((prev) => !prev);
  }

  
  return (
    <>
    
        <div className="grid bg-white w-full m-0 dark:bg-stone-950 place-items-center md:flex items-start gap-4 mt-[2vh] p-1 xs:p-4 ">
        {video !== undefined && video.id !== undefined ? (
          <div className=" flex-1 grid  gap-4 xs:gap-8  dark:bg-stone-950 bg-white  text-gray-dark dark:text-white">
            <div className="w-full grid place-items-center  mx-auto  rounded-md ">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                className=" object-cover w-full sm:h-[400px] h-[350px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <h2 className="text-stone-700 dark:text-white text-xl font-bold">
              {video.snippet.title}
            </h2>

            <div className="flex items-center gap-4 max-w-[400px] xs:gap-10 ">
              <Link to={`/${channel?.id}`} className="flex items-center  gap-4 w-full xs:gap-10">
                <img
                  src={`${video.snippet.thumbnails.medium.url}`}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="grid">
                  <span className="font-semibold">
                    {video.snippet.channelTitle}
                  </span>
                  <span>{formatSubs} subscribers</span>
                </div>
              </Link>
              <button className="bg-stone-950 cursor-default text-sm  dark:bg-white dark:text-stone-900">
                Subscribe
              </button>
            </div>

            <div className="flex gap-10 ">
              <span
                onClick={(prev: any) => setThumb({ ...prev, up: !thumb.up })}
            className="flex gap-2"
              >
            {thumb.up ? <ThumbUpIcon className="cursor-pointer" /> :    <ThumbUpOffAltIcon  className="cursor-pointer"/>}
                {formattedData.formattedLikes} likes
              </span>

              <span onClick={(prev: any) => setThumb({ ...prev, down: !thumb.down })}>
             {thumb.down ? <ThumbDownIcon className="cursor-pointer"/> :  <ThumbDownOffAltIcon className="cursor-pointer" />}
              </span>
            </div>

       
            <div className="dark:bg-stone-900 bg-zinc-200 p-4 rounded-md">
              <div className="flex gap-2 font-bold">
                <span>
                  {formattedData.formattedViews !== undefined &&
                    formattedData.formattedViews}{" "}
                  Views
                </span>
                <span>{formattedData.formattedTime}</span>
              </div>
              <p className="break-all ">
                {showMore
                  ? video.snippet.description
                  : video.snippet.description.slice(0, 250)}
                ...
              </p>
              <span
                className="font-bold text-xl cursor-pointer"
                onClick={handleDescription}
              >
                {showMore ? "Show less" : "Show more"}
              </span>
            </div>

            <div className="grid gap-2  md:hidden flex-[.5]">
              <CategoriesBar/>
            <Videos/>
            </div>
            <Comments />
          </div>
          ) : <WatchSkeleton/>}

          {video !== undefined && video.id !== undefined  &&  <div className=" flex-[.5] hidden md:grid gap-4">
           <CategoriesBar/>
            <Videos/>
            </div>}
          
        </div>
      
    </>
  );
};

export default Watch;
