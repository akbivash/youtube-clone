import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatNumber } from '../utils/formatNumber'
import { useChannel } from '../hooks/useChannel'

const Channel = () => {
const id = useParams().id
const [formattedSubscribers, setFormattedSubscribers] = useState()
const {channel} = useChannel(id)

  useEffect(() => {
if(channel !== undefined){
  let fSubs:any = formatNumber(Number(channel.statistics.subscriberCount))
  setFormattedSubscribers(fSubs)
}

  },[channel])
  return (
   <>
   {
   channel !== undefined  ?  <div className= ' text-stone-900 dark:text-white p-1 sm:px-10 '>
        <img src={channel.brandingSettings.image.bannerExternalUrl} alt="image" className=' object-cover h-20 sm:h-auto sm:max-h-[180px] w-full' />
         
         <div className=' grid py-2 place-items-center sm:flex sm:items-start gap-4 '>
          <img src={channel.snippet.thumbnails.medium.url} alt="" className='w-20  h-20 object-cover rounded-full' />
         <div className='grid  place-items-center  sm:place-items-start py-2 gap-2'>
                <h2 className='text-xl  font-semibold'>{channel.snippet.title}</h2>
                <div className='flex text-sm xs:text-lg  gap-4'>
                    <span className='font-semibold'>{channel.snippet.customUrl}</span>
                    <span>{formattedSubscribers} subscribers</span>
                    <span>{channel.statistics.videoCount} videos</span>
                </div>
                <p className='word-break w-full'>{channel.snippet.description}</p>
            </div>
         </div>
           
    </div> : 
     <div className= ' text-stone-900 dark:text-white p-1 sm:px-10 '>
        <img src="" alt="image" className=' object-cover bg-slate-200 h-20 sm:h-auto sm:max-h-[180px] w-full' />
         
         <div className=' grid py-2 place-items-center sm:flex sm:items-start gap-4 '>
          <img src="" alt="" className='w-20 bg-slate-200 h-20 object-cover rounded-full' />
         <div className='grid  place-items-center  sm:place-items-start py-2 gap-2'>
                <h2 className='text-xl  font-semibold'></h2>
                <div className='flex text-sm xs:text-lg  gap-4'>
                    <span className='font-semibold'></span>
                    <span className='w-[140px] h-10 bg-slate-200'></span>
                </div>
                <p className='word-break w-full'></p>
            </div>
         </div>
           
    </div>
    }
   </>
  )
}

export default Channel