import { AxiosResponse } from "axios";
import request from "../request";
import { Request,Response } from "express";

const getCategories = async(req:Request, res:Response) => {
 
    try {
        const result: AxiosResponse<any> = await request.get("/videoCategories", {
          params: {
            part: "snippet",
            regionCode: "IN",
            key: process.env.API_KEY
          },
        });
       
        res.status(200).json(result.data.items)
      } catch (err:any) {
        res.status(403).json({err:'can not get categories', msg:err})
        return;
      }
}

module.exports = {getCategories}