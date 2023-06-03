import { Dispatch } from "@reduxjs/toolkit";

import request from "../../requestMethods";
import { isError, isLoading, isSuccess } from "../slices/videosSlice";

export const allCategories = async (dispatch: Dispatch) => {
  try {
    dispatch(isLoading());
    let res = await request.get('api/v1/categories')
   dispatch(isSuccess())
return res.data
  } catch (err) {
    console.log(err)
    dispatch(isError());
  }
};
