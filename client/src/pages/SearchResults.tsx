import { useEffect, useState } from "react";
import { SearchSuggestion } from "../../types";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { formatNumber } from "../utils/formatNumber";
import { useSearch } from "../hooks/useSearch";
import VideoSkeleton from "../components/skeleton/VideoSkeleton";
import Video from "../components/Video";

const SearchResults = () => {
  const [formattedViews, setFormattedViews] = useState<any>("");
  const { resultsWithStatistics, channel } = useSearch();
  let array = [...Array(10).keys()];

  useEffect(() => {
    if (channel !== null && channel !== undefined) {
      let views: any = channel.statistics.subscriberCount;
      setFormattedViews(formatNumber(Number(views)));
    }
  }, [channel]);

  return (
    <>
      <div className="pt-[2vh]  xs:pt-[5vh] dark:bg-stone-950">
        {channel !== null && channel !== undefined && (
           
            <div  className={`text-stone-900 max-w-[350px] mx-auto w-full dark:text-white `}>


         <Link
            to={`/${channel.id}`}
            key={channel.id}
          >
            <div className="flex justify-between  w-full mx-auto max-w-[350px]  items-center py-4">
              <img
                src={channel.snippet.thumbnails.medium.url}
                alt=""
                className="w-full max-w-[100px]  object-cover rounded-md"
              />
              <div className="grid gap-2">
                <span className="flex gap-2">
                  {channel.snippet.title} <CheckCircleIcon />
                </span>
                <span className="flex gap-4 ">
                  <span> {channel.snippet.customUrl}</span>
                  {formattedViews} Views
                </span>
              </div>
            </div>
          </Link>
          </div>
        )}
        <div className=" grid  xs:mt-0  gap-4 h-full overflow-y-scroll  sm:place-items-start sm:grid-cols-auto-fit w-full   ">
          {" "}
          {resultsWithStatistics && resultsWithStatistics.length !== 0 ? (
            resultsWithStatistics.map((video: SearchSuggestion) => {
              return <Video key={video.etag} {...video} />;
            })
          ) : (
            <div
              className={`grid  gap-4 h-full overflow-y-scroll  place-items-center sm:grid-cols-auto-fit  w-full    `}
            >
              {array.map((a: any, i: number) => {
                return <VideoSkeleton key={a * 2} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
