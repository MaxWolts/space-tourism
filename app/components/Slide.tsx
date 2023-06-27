import Image from "next/image"

type Props = {
  images: string[]
  handdleSelectedItem: (number:number) => void
  selectedItem: number,
  version2: boolean
}

export const Slide = ({images, version2}: Props) => {
  return (
    <div className="overflow-hidden md:flex md:flex-col-reverse gap-12" style={{direction:"ltr"}}>
      <div className={" relative max-w-3xl my-0 mx-auto " + `${!version2 && "border-b border-opacity-30 border-lightBlue md:border-none"}`}>
        <div className=" flex overflow-x-hidden snap-mandatory scroll-smooth">
          {images.map( (img, index) => {
            return (
              <div key={index} className={"w-[100%] flex justify-center min-w-[100%] "} id={ "slide-" + index }>
                <Image className={`${version2? "h-[170px] w-full" : "h-56 w-auto md:h-[35.75rem] xl:h-[40rem]"} `}   src={"/"+img} alt={"crew photograph"} width={600} height={600}/>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}
