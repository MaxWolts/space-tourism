import Image from "next/image"

type Props = {
  images?: string[]
  imagesV2?: string[]
  selectedItem: number,
  version2: boolean,
  indexExt?: number
}

export const Slide = ({images, version2, imagesV2, indexExt}: Props) => {
  return (
    <div className="overflow-hidden md:flex md:flex-col-reverse gap-12" style={{direction:"ltr"}}>
      <div className={" relative max-w-3xl my-0 mx-auto " + `${!version2 && "border-b border-opacity-30 border-lightBlue md:border-none"}`}>
        <div className=" flex overflow-x-hidden snap-mandatory scroll-smooth">
          {images && images.map( (img, index) => {
            return (
              <div key={index} className={"w-[100%] flex justify-center min-w-[100%] " + `${version2 && "xl:flex xl:justify-end"}`} id={ "slide-" + index }>
                <Image className={`${version2? "h-[170px] w-full md:h-[20.688rem] xl:h-[32.938rem] xl:w-fit" : "h-56 w-auto md:h-[35.75rem] xl:h-[40rem]"} `}   src={"/"+img} alt={"crew photograph"} width={1000} height={1000}/>
              </div>
            )
          }
          )}
          {imagesV2 && imagesV2.map( (img, index) => {
            return (
              <div key={index} className={"w-[100%] flex justify-center min-w-[100%] " + `${version2 && "xl:flex xl:justify-end"}`} id={ `slide-`+`${indexExt? indexExt+index:index }` }>
                <Image className={`${version2? "h-[170px] w-full md:h-[20.688rem] xl:h-[32.938rem] xl:w-fit" : "h-56 w-auto md:h-[35.75rem] xl:h-[40rem]"} `}   src={"/"+img} alt={"crew photograph"} width={1000} height={1000}/>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}
