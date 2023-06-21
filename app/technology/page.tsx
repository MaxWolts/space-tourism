'use client'
import { useState } from "react"
import { Slide } from "../components/Slide"
import data from "../data/data.json"

const Teachnology = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handdleSelectedItem = (number:number) => {
    setSelectedItem(number)
  }
  return (
    <div className="Technology__background-mobile grid gap-8 min-h-screen  pb-6  justify-center text-center">
      <div className="navText pt-[5.5rem]">
        <p><strong className="text-lightBlue opacity-25">03</strong> SPACE LAUNCH 101</p>
      </div>
      <div className="relative">
        <Slide images={data.technology.map(img => img.images.landscape)} version2={true} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
      </div>
      <div className="grid gap-4 px-6">
        <div className="grid gap-2">
          <span className={"navText font-Bellefair tracking-normal opacity-50"}>THE TERMINOLOGY...</span>
          <h4 className="text-[1.5rem]">{data.technology[selectedItem].name.toUpperCase()}</h4>
        </div>
        <p className="font-BarlowRegular text-lightBlue leading-6">{data.technology[selectedItem].description}</p>
      </div>
    </div>
  )
}

export default Teachnology
