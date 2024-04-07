import React from 'react'
import Niranjan from '../profiles/Niranjan'
import Aj from '../profiles/Aj'
import Pt from '../profiles/Pt'

export default function () {
  return (
    <div className="gird grid-cols-3 flex justify-evenly w-full mt-20 h-[500px] bg-sky-100 items-center">
      
     <Niranjan/>
     <Aj/>
     <Pt/>
    </div>
  )
}
