import { useEffect, useState } from "react"
import {getChannel} from '../redux/apiCalls/channel'
import { useDispatch } from "react-redux"
import { Channel } from "../../types"

export const useChannel = (id:any) => {
    const [channel, setChannel] = useState<Channel>()
const dispatch = useDispatch()

    const getChannelById = async() => {
        const res = await getChannel(dispatch, id)
        setChannel(res)
    }

    useEffect(() => {
getChannelById()
    },[id])

    return {channel}
}