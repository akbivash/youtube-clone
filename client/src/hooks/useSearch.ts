import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Channel, SearchSuggestion } from "../../types"
import { getChannel } from "../redux/apiCalls/channel"
import { searchResults} from "../redux/apiCalls/search"
import { videosById } from "../redux/apiCalls/video"

export const useSearch = () => {
    const[results, setResults] = useState([])
const[resultsWithStatistics,setResultsWithStatistics] = useState([])
const [channelId, setChannelId] = useState<string>()
const[videoIds, setVideoIds] = useState<string>()
const [channel, setChannel] = useState<Channel>()
const query = useParams().query
const dispatch = useDispatch()

useEffect(() => {
if(query !== '' || query !== undefined){
  const getSearchResults = async() => {
    const res = await searchResults(dispatch, query)
console.log('api called for results')
   setResults(res)
  }
getSearchResults()
}
},[query])

useEffect(() => {
    let newItems: string[] = [];
  
 results !== undefined &&   results.length !== 0 && results.forEach((r: SearchSuggestion) => {
      if (r.id.channelId) {
        setChannelId(r.id.channelId);
      }
      if (r.id.videoId) {
        newItems.push(r.id.videoId);
      }
    });
  let str = newItems.join(',')
    setVideoIds(str);
  }, [results]);


useEffect(() => {
  if(videoIds !== undefined ){
    const getSearchResults = async() => {
      const res = await videosById(dispatch,videoIds)
     setResultsWithStatistics(res)
     console.log('api called for stat')
    }
getSearchResults()
  }

  },[videoIds])

    useEffect(() => {
      const getChannelWithId = async() => {
        const res = await  getChannel(dispatch,channelId)
setChannel(res)
      }
  getChannelWithId()
  },[channelId])





return {
    results, resultsWithStatistics,channel
}
}