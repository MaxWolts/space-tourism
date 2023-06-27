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
  const generateSelectItemV2 = (images:string[], selectedItem: number, handdleSelectedItem: (number:number) => void, indexExt?:number) => {
    return (
      images.map( (img, index) =>
      <a
        onClick={() => {
          handdleSelectedItem(index)
        }}
        className={"flex items-center justify-center h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 xl:text-[2rem] bg-white rounded-full "+ `${selectedItem !== index && "bg-opacity-0 border border-[#ffffff59]"}`}
        key={`slide-`+`${indexExt? indexExt+index:index }`}
        href={`#slide-`+`${indexExt? indexExt+index:index }`}
      >
        <p className={`${selectedItem !== index? 'text-white':'text-black'} md:text-[1.5rem]`}>
          {index+1}
        </p>
      </a>)
    )
  }

  return (
    <>
      <div className="flex flex-col justify-start gap-8 pb-6 text-center md:pt-10 md:max-w-screen-md md:m-auto md:pb-20 xl:max-w-max">
        <div className="navText md:text-[1.25rem] md:text-left xl:pl-[1.5rem]">
          <p><strong className="text-lightBlue opacity-25 ">03</strong> SPACE LAUNCH 101</p>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:items-center">
          <div className="relative col-start-2">
            <div className="xl:hidden">
              <Slide images={data.technology.map(img => img.images.landscape)} version2={true} selectedItem={selectedItem}/>
            </div>
            <div className="hidden xl:block">
              <Slide imagesV2={data.technology.map(img => img.images.portrait)} version2={true} selectedItem={selectedItem} indexExt={3}/>
            </div>
          </div>
          <div className="grid gap-4 px-6 xl:col-start-1 xl:row-start-1 xl:grid-cols-2 xl:flex xl:justify-start">
            <div className="flex gap-2 justify-center z-10 mt-8 md:mt-12 xl:mt-0 xl:flex-col xl:hidden" >
              {generateSelectItemV2(data.technology.map(img => img.images.landscape), selectedItem, handdleSelectedItem)}
            </div>
            <div className="hidden z-10 mt-8 md:mt-12 xl:mt-0 xl:flex-col xl:flex xl:gap-8" >
              {generateSelectItemV2(data.technology.map(img => img.images.landscape), selectedItem, handdleSelectedItem, 3)}
            </div>
            <div className="grid gap-2 justify-center md:gap-4 md:pt-11 xl:w-[470px] xl:text-left xl:block xl:p-0">
              <span className={"navText font-Bellefair tracking-normal opacity-50"}>THE TERMINOLOGY...</span>
              <h4 className="text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem] xl:pt-0">{data.technology[selectedItem].name.toUpperCase()}</h4>
              <p className="font-BarlowRegular text-lightBlue leading-6 md:leading-7 md:max-w-[458px] xl:text-[1.125rem] xl:max-w-[444px] xl:pt-0">{data.technology[selectedItem].description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teachnology
