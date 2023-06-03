import { Link, useParams } from "react-router-dom";
import { Channel, VideoType} from "../../types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import moment from "moment";
import { formatNumber } from "../utils/formatNumber";
import { useEffect, useState } from "react";
import { getChannel } from "../redux/apiCalls/channel";
import { useDispatch } from "react-redux";

const Video = (video: any) => {
  const date = video.snippet.publishedAt;
  const publishedTime = moment(date).fromNow();
  let views = video.statistics.viewCount;
  const formattedViews = formatNumber(Number(views));
  const[channel, setChannel]  = useState<any>()
const dispatch = useDispatch()
const id = useParams().videoId

 useEffect(() => {
  if(video.snippet.channelId !== undefined){
    const getChannelById = async() => {
      const res = await getChannel(dispatch,video.snippet.channelId)
      setChannel(res)
      }
      getChannelById()
  }

},[video.snippet.channelId])



const handleClick = ( ) => {
  if(id !== undefined){
    window.location.reload()

  }
}

  return (
    <div className="max-w-[400px] h-fit text-stone-900 dark:text-white mx-auto w-full"
    onClick={handleClick}
    >
      
      <Link
        to={`/watch/${video.id}`}
        className=""
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt=""
          className="w-full h-[200px] object-cover rounded-md"
        />
        <div className="flex gap-2 items-center py-2">
          <img
            src={ channel?.snippet?.thumbnails?.medium.url}
            alt="img"
            className="max-w-[50px] rounded-full"
          />
          <div>
            <h2>{video.snippet.title}</h2>
            <span className="flex gap-2">
              {video.snippet.channelTitle} <CheckCircleIcon />
            </span>
            <span className="flex gap-2">
              {formattedViews} Views <span>{publishedTime} </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
