import Image from "next/image"

type Props = {
  images: string[]
  handdleSelectedItem: (number:number) => void
  selectedItem: number,
  version2: boolean
}

const generateSelectItem = (images:string[], selectedItem: number, handdleSelectedItem: (number:number) => void) => {

  return (
    images.map( (img, index) =>
    <a onClick={() => {handdleSelectedItem(index)}}
     className={"h-3 w-3 bg-white rounded-full "+ `${selectedItem !== index && "bg-opacity-20"}`}
    key={"slide-"+index}
    href={"#slide-"+index}></a>)
  )
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

export const Slide = ({images, handdleSelectedItem, selectedItem, version2}: Props) => {
  return (
    <div className="overflow-hidden md:flex md:flex-col-reverse gap-12">
      <div className={" relative max-w-3xl my-0 mx-auto " + `${!version2 && "border-b border-opacity-30 border-lightBlue md:border-none"}`}>
        <div className=" flex overflow-x-hidden snap-mandatory scroll-smooth">
          {images.map( (img, index) => {
            return (
              <div key={index} className={"w-[100%] flex justify-center min-w-[100%] "} id={ "slide-" + index }>
                <Image className={`${version2? "h-[170px] w-full" : "h-56 w-auto md:h-[35.75rem] xl:h-[44.5rem]"} `}   src={"/"+img} alt={"crew photograph"} width={600} height={600}/>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="flex gap-2 justify-center z-10 mt-8 xl:mt-0" >
        {version2? generateSelectItemV2(images, selectedItem, handdleSelectedItem):
          generateSelectItem(images, selectedItem, handdleSelectedItem)
        }
      </div>
    </div>
  )
}
