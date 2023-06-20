'use client'
import { useState } from "react"
import { Slide } from "../components/Slide"
import data from "../data/data.json"

const Crew = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handdleSelectedItem = (number:number) => {
    setSelectedItem(number)
  }
  return (
    <div className="Destination__background-mobile grid gap-8 min-h-screen px-6 pb-6  justify-center text-center">
      <div className="navText pt-[5.5rem]">
        <p><strong className="text-lightBlue opacity-25">02</strong> MEET YOUR CREW</p>
      </div>
      <Slide images={data.crew.map(img => img.images.png)} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <span className={"navText font-Bellefair tracking-normal opacity-50"}>{data.crew[selectedItem].role.toUpperCase()}</span>
          <h4 className="text-[1.5rem]">{data.crew[selectedItem].name.toUpperCase()}</h4>
        </div>
        <p className="font-BarlowRegular text-lightBlue leading-6">{data.crew[selectedItem].bio}</p>
      </div>
    </div>
  )
}

export default Crew
