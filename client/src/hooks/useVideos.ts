import { useEffect, useState } from "react";
import {
  popularVideos,
  videosByCategory,
  videosById,
} from "../redux/apiCalls/video";
import { useDispatch, useSelector } from "react-redux";
import { InitialState, SearchSuggestion } from "../../types";
import { searchRelatedVideos } from "../redux/apiCalls/search";
import { useParams } from "react-router-dom";

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const params = useParams();
  const [suggestedIds, setSuggestedIds] = useState<any>([]);
  const category = useSelector((s: InitialState) => s.videos.selectedCategory);
  const dispatch = useDispatch();

  const getAllVideos = async () => {
    const res = await popularVideos(dispatch);
    setVideos(res);
  };

  const getVideosByCategory = async () => {
    const res = await videosByCategory(dispatch, category);
    setVideos(res);
  };

  useEffect(() => {
    if (category === "") {
      getAllVideos();
    } else {
      getVideosByCategory();
    }
    console.log("api call cat");
  }, [category]);

  useEffect(() => {
    if (params.videoId !== undefined) {
      const getRelatedSearch = async () => {
        const res = await searchRelatedVideos(dispatch, params.videoId);
        setSuggestions(res);
      };
      getRelatedSearch();
      console.log("api call vid", params.videoId);
    }
  }, [params.videoId]);

  useEffect(() => {
    let ids: string = "";
    if (suggestions && suggestions.length !== 0) {
      suggestions.map((s: SearchSuggestion) => {
        if (s.id.videoId) {
          ids += s.id.videoId + ",";
        }
      });
    }

    setSuggestedIds(ids);
  }, [suggestions]);

  useEffect(() => {
    if (Object.keys(suggestedIds).length !== 0) {
      const getVideos = async () => {
        const res = await videosById(dispatch, suggestedIds);
        setVideos(res);
      };
      getVideos();
      console.log("api call sugg id", suggestedIds);
    }
  }, [suggestedIds]);

  return {
    videos,
    suggestedIds,
  };
};
