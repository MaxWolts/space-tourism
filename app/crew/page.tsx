'use client'
import { useState } from "react"
import { Header } from "../components/Header"
import { Slide } from "../components/Slide"
import data from "../data/data.json"


const Crew = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const handdleSelectedItem = ( number:number, event?:any,) => {
    setSelectedItem(number)
  }
  const generateSelectItem = (images:string[], selectedItem: number, handdleSelectedItem: (number:number) => void) => {

    return (
      images.map( (img, index) =>
      <a onClick={() => {handdleSelectedItem(index)}}
       className={"h-3 w-3 xl:h-4 xl:w-4 bg-white rounded-full "+ `${selectedItem !== index && "bg-opacity-20"}`}
      key={"slide-"+index}
      href={"#slide-"+index}></a>)
    )
  }
  return (
    <>
      <div className=" grid gap-8 h-screen xl:h-[85vh] px-6 pb-6 pt-6 md:pt-10 justify-center text-center md:pb-0 xl:text-left  xl:mx-auto">
        <div className="flex flex-col gap-4 md:flex-col-reverse max-w-[28.625rem] xl:grid xl:grid-cols-2 xl:rtl xl:max-w-[80vw]" style={{direction:"rtl"}}>
          <Slide images={data.crew.map(img => img.images.png)} version2={false} handdleSelectedItem={handdleSelectedItem} selectedItem={selectedItem}/>
          <div className="grid gap-4 xl:justify-items-start xl:self-center xl:gap-32" style={{direction:"ltr"}}>
            <div className="relative navText md:text-[1.25rem] md:left-[-60%] xl:left-0 xl:text-[1.75rem] xl:tracking-[0.267rem]">
              <p><strong className="text-lightBlue opacity-25">02</strong> MEET YOUR CREW</p>
            </div>
            <div className="grid gap-2" >
              <span className={"navText font-Bellefair tracking-normal opacity-50 md:text-[1.5rem]"}>{data.crew[selectedItem].role.toUpperCase()}</span>
              <h4 className="text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] ">{data.crew[selectedItem].name.toUpperCase()}</h4>
              <p className="font-BarlowRegular text-lightBlue leading-6 md:text-[1rem] xl:max-w-[27.75rem] xl:text-[1.125rem]">{data.crew[selectedItem].bio}</p>
            </div>
            <div className="flex gap-2 md:gap-4 xl:gap-6 justify-center z-10 mt-8 xl:mt-0 " >
              {generateSelectItem(data.crew.map(img => img.images.png), selectedItem, handdleSelectedItem)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crew
