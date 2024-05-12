import React from 'react'
import Niranjan from '../profiles/Niranjan'
import Aj from '../profiles/Aj'
import Pt from '../profiles/Pt'
import Aalesh from '../profiles/Aalesh'
import Sahil from '../profiles/Sahil'
import Adarsh from '../profiles/Adarsh'

export default function () {
  return (
    <div className="grid grid-cols-3 flex justify-evenly w-full mt-20 h-[500px] bg-sky-100 items-center h-full p-5">
      
     <Niranjan/>
     <Aj/>
     <Pt/>
     <Aalesh/>
     <Sahil/>
     <Adarsh/>
    </div>
  )
}
