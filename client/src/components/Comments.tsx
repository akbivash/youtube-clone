import { CommentType,  ReplyType, } from "../../types";

import { useVideo } from "../hooks/useVideo";
import Comment from "./Comment";
import Replay from "./Replay";
import { useState } from "react";

const Comments = () => {
  const[showReply, setShowReply] = useState(false)
 const {commentData} = useVideo()

 
  return (
    <div className="text-stone-900 dark:text-white grid gap-10 ">
      {commentData !== undefined && commentData.length !== 0 &&  <div className="flex  gap-10">
                <span className="flex gap-4 font-semibold"> {commentData.length} comments</span>
               
              </div>}
      {commentData !== undefined  &&
        commentData.map((c:CommentType) => {
         
      return <div key={c.etag} className="my-[-1rem]">
        <Comment c={c} setShowReply={setShowReply} />

        <div>
          {showReply && c.replies && c.replies.comments.map((r:any) => {
     
            return <div key={r.id} className="py-2 ml-6">
              <Replay r={r} />
            </div>
          })}
        </div>
      </div>
          
        })}
    </div>
  );
};

export default Comments;
