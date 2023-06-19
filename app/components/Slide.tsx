import Image from "next/image"

type Props = {
  images: string[]
}

export const Slide = ({images}: Props) => {
  return (
    <div className="overflow-hidden">
      <div className=" relative max-w-3xl my-0 mx-auto border-b border-lightBlue border-opacity-30">
        <div className=" flex overflow-x-hidden snap-mandatory scroll-smooth">
          {images.map( (img, index) => {
            return (
              <div key={index} className={"w-[100%] flex justify-center min-w-[100%]"} id={ "slide-" + index }>
                <Image className="h-56"   src={"/"+img} alt={"crew photograph"} width={170} height={170}/>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="flex gap-2 justify-center z-10 my-8" >
        {images.map( (img, index) => <a className="h-3 w-3 bg-white rounded-full" key={"slide-"+index} href={"#slide-"+index}></a>)}
      </div>
    </div>
  )
}
