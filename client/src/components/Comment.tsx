// import { Comment } from '../../types'
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import moment from "moment";

interface CommentProps {
   c: any;
   setShowReply:any
  }

  
const Comment:React.FC<CommentProps> = ({c, setShowReply}) => {

    const date = c.snippet.topLevelComment.snippet.publishedAt;
    const formattedTime = moment(date).fromNow();

  return (
    <div>
      <div key={c.etag} className="grid gap-4   h-auto w-full">
             

             <div className="flex gap-4">
               <img
                 src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}
                 alt="img"
                 className="w-10 h-10 rounded-full"
               />
               <div className="grid gap-2  ">
                 <div>
                   <p className="flex gap-4 w-full  ">
                     <span className="font-semibold">
                       {c.snippet.topLevelComment.snippet.authorDisplayName}
                     </span>{" "}
                     <span>{formattedTime}</span>
                   </p>
                   <span className="break-all">{c.snippet.topLevelComment.snippet.textDisplay}</span>
                 </div>

                 <div className="flex gap-10 cursor-pointer">
                   <span className={`   flex gap-1`}>
                     {<ThumbUpOffAltIcon />}
                     {c.snippet.topLevelComment.snippet.likeCount}
                   </span>
                   <span>{<ThumbDownOffAltIcon />}</span>
                 </div>
                 <span className="text-sky-600 cursor-pointer" onClick={() => setShowReply((prev:any) => !prev)}>{c.snippet.totalReplyCount} replies</span>

                 <div>
               
                 </div>
               </div>
             </div>
           </div>   
    </div>
  )
}

export default Comment