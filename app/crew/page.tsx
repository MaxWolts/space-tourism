'use client'
import { useState } from "react"

import { Slide } from "../components/Slide"
import data from "../data/data.json"


const Crew = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handdleSelectedItem = ( number:number, event?:any,) => {
    setSelectedItem(number)
  }
  return (
    <div className="Crew__background bg-cover grid gap-8 min-h-screen px-6 pb-6 pt-[5.5rem] md:pt-[8.5rem] justify-center text-center md:pb-0">
      <div className="relative navText md:text-[1.25rem] md:left-[-60%]">
        <p><strong className="text-lightBlue opacity-25">02</strong> MEET YOUR CREW</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-col-reverse max-w-[28.625rem]">
        <Slide images={data.crew.map(img => img.images.png)} version2={false} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <span className={"navText font-Bellefair tracking-normal opacity-50 md:text-[1.5rem]"}>{data.crew[selectedItem].role.toUpperCase()}</span>
            <h4 className="text-[1.5rem] md:text-[2.5rem]">{data.crew[selectedItem].name.toUpperCase()}</h4>
          </div>
          <p className="font-BarlowRegular text-lightBlue leading-6 md:text-[1rem]">{data.crew[selectedItem].bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Crew
