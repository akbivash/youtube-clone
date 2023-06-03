import axios from "axios";

 const request = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
})

export default request