'use client'
import { useState } from "react"
import { Header } from "../components/Header"
import { Slide } from "../components/Slide"
import data from "../data/data.json"

const Teachnology = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handdleSelectedItem = (number:number) => {
    setSelectedItem(number)
  }
  const generateSelectItemV2 = (images:string[], selectedItem: number, handdleSelectedItem: (number:number) => void) => {
    return (
      images.map( (img, index) =>
      <a
        onClick={() => {
          handdleSelectedItem(index)
        }}
        className={"flex items-center justify-center h-10 w-10 bg-white rounded-full "+ `${selectedItem !== index && "bg-opacity-20"}`}
        key={"slide-"+index}
        href={"#slide-"+index}
      >
        <p className={`${selectedItem !== index? 'text-white':'text-black'}`}>
          {index+1}
        </p>
      </a>)
    )
  }

  return (
    <>
      <div className=" grid gap-8 min-h-screen pb-6 justify-center text-center">
        <div className="navText">
          <p><strong className="text-lightBlue opacity-25">03</strong> SPACE LAUNCH 101</p>
        </div>
        <div className="relative">
          <Slide images={data.technology.map(img => img.images.landscape)} version2={true} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
        </div>
        <div className="grid gap-4 px-6">
          <div className="flex gap-2 justify-center z-10 mt-8 xl:mt-0" >
            {generateSelectItemV2(data.technology.map(img => img.images.landscape), selectedItem, handdleSelectedItem)}
          </div>
          <div className="grid gap-2">
            <span className={"navText font-Bellefair tracking-normal opacity-50"}>THE TERMINOLOGY...</span>
            <h4 className="text-[1.5rem]">{data.technology[selectedItem].name.toUpperCase()}</h4>
          </div>
          <p className="font-BarlowRegular text-lightBlue leading-6">{data.technology[selectedItem].description}</p>
        </div>
      </div>
    </>
  )
}

export default Teachnology
