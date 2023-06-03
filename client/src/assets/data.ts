import {
    AccessAlarm,
    ThumbDownAlt,
    ExpandMore,
    OndemandVideo,
    History,
    LibraryAdd,
    AllInclusive,
    Home,
    Subscriptions,
    AlarmRounded,
    ThumbUpOffAlt,
  } from "@mui/icons-material";
  

export const links = [
    {
        mainLinks:[
            {
                title:'Home',
                icon:Home,
                link:'/'
            },
            // {
            //     title:'Shorts',
            //     icon:AllInclusive
            // },
            {
                title:'Subscriptions',
                icon:Subscriptions,
                link:'/subscriptions'
            }
        ],
        subLinks:[
            {
                title:'Library',
                icon:LibraryAdd
            },
            {
                title:'History',
                icon:History
            },
            {
                title:'Your videos',
                icon:OndemandVideo
            },
            {
                title:'Watch later',
                icon:AlarmRounded
            },
            {
                title:'Liked videos',
                icon:ThumbUpOffAlt
            }
        ],
        subscriptions:[
{
    title:'FreeCodeCamp',
    icon:Home
},{
    title:'BB ki vines',
    icon:ThumbUpOffAlt

},{
    title:'Netflix',
    icon:ThumbUpOffAlt

},{
    title:'Rock and Roll',
    icon:ThumbUpOffAlt

},{
    title:'Science',
    icon:ThumbUpOffAlt
}
,{
    title:'The Beatles',
    icon:ThumbUpOffAlt
}
        ]
    }
]

export const noLinks = [
 'You','Are','Not','Logged In','🙂'
]