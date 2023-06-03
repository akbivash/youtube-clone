import { AxiosResponse } from "axios";
import request from "../request";
import { Request,Response } from "express";

const getChannel = async(req:Request, res:Response) => {
    try {
        const result: AxiosResponse<any> = await request.get("/channels", {
            params: {
                part: "snippet, statistics, brandingSettings",
                id:req.params.id,
                key: process.env.API_KEY
              },
        });
       
        res.status(200).json(result.data)
      } catch (err:any) {
        res.status(404).json({err:'can not get channel', msg:err})
        return;
      }
}

module.exports = {getChannel}