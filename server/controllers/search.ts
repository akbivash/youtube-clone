import { AxiosResponse } from "axios";
import request from "../request";
import { Request,Response } from "express";

const getSearchResultsWithKeyword = async(req:Request, res:Response) => {
    try {
        const result: AxiosResponse<any> = await request.get("/search", {
          params: {
            part: "snippet",
            q:req.params.keyword,
            maxResults: 10,
            key: process.env.API_KEY
          },
        });
       
        res.status(200).json(result.data.items)
      } catch (err:any) {
        res.status(404).json({err:'can not get search results', msg:err})
        return;
      }
}



const getSearchResultsWithId = async(req:Request, res:Response) => {
    try {
        const result: AxiosResponse<any> = await request.get("/search", {
          params: {
            part: "snippet",
            relatedToVideoId:req.params.id,
            maxResults: 10,
            type:'video',
            key: process.env.API_KEY
          },
        });
       
        res.status(200).json(result.data.items)
      } catch (err:any) {
        res.status(404).json({err:'can not get videos', msg:err})
        return;
      }
}

module.exports = {getSearchResultsWithId, getSearchResultsWithKeyword}
