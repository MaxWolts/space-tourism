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
    <div className="Crew__background bg-cover grid gap-8 min-h-screen px-6 pb-6 pt-[5.5rem] md:pt-[8.5rem] justify-center text-center md:pb-0 xl:text-left ">
      <div className="relative navText md:text-[1.25rem] md:left-[-60%] xl:left-0 xl:text-[1.75rem] xl:tracking-[0.267rem]">
        <p><strong className="text-lightBlue opacity-25">02</strong> MEET YOUR CREW</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-col-reverse max-w-[28.625rem] xl:grid xl:grid-cols-2 xl:rtl xl:max-w-[80vw]" style={{direction:"rtl"}}>
        <Slide images={data.crew.map(img => img.images.png)} version2={false} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
        <div className="grid gap-4 xl:justify-items-start xl:self-center" style={{direction:"ltr"}}>
          <div className="grid gap-2" >
            <span className={"navText font-Bellefair tracking-normal opacity-50 md:text-[1.5rem]"}>{data.crew[selectedItem].role.toUpperCase()}</span>
            <h4 className="text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] ">{data.crew[selectedItem].name.toUpperCase()}</h4>
          </div>
          <p className="font-BarlowRegular text-lightBlue leading-6 md:text-[1rem] xl:max-w-[27.75rem] xl:text-[1.125rem]">{data.crew[selectedItem].bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Crew
