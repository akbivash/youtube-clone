import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { comments, videoById } from "../redux/apiCalls/video";
import { useDispatch } from "react-redux";
import { CommentType, VideoType } from "../../types";
import { formatNumber } from "../utils/formatNumber";
import moment from "moment";
import { getChannel } from "../redux/apiCalls/channel";

export const useVideo = () => {
  const [formattedData, setFormattedData] = useState<any>({
    formattedViews: "",
    formattedLikes: "",
    formattedTime: "",
  });
  const [video, setVideo] = useState<VideoType>();
  const [commentData, setCommentData] = useState<CommentType[]>([]);

  const videoId = useParams().videoId;
  const dispatch = useDispatch();

  const getVideoById = async () => {
    const res = await videoById(dispatch, videoId);
    setVideo(res);
  };

  const getComments = async () => {
    const res = await comments(dispatch, videoId);
    setCommentData(res);
  };

  useEffect(() => {
    getVideoById();
    getComments();
  }, [videoId]);

  useEffect(() => {
    if (video !== undefined) {
      if (video.id !== undefined) {
        let views = video.statistics.viewCount;
        let fViews: any = formatNumber(Number(views));
        let likes = video.statistics.likeCount;
        let fLikes: any = formatNumber(Number(likes));
        let time = video.snippet.publishedAt;
        let fTime = moment(time).fromNow();
        setFormattedData({
          formattedLikes: fLikes,
          formattedViews: fViews,
          formattedTime: fTime,
        });
      }
      if (video.id !== undefined) {
        getChannel(dispatch, video.snippet.channelId);
      }
    }
  }, [video]);

  return {
    video,
    formattedData,
    commentData,
  };
};
