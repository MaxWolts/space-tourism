import Image from "next/image"
import DestinationNav from "../../components/DestinationNav"
import data from "../../data/data.json"
type Props = {
  params: { id: string}
}
const Destinations = ({params}: Props) => {
  const id = Number(params.id)
  const info = data.destinations[id]
  if (id || id === 0) {
    return (
      <div className="grid justify-center justify-items-center gap-12 mt-16 md:mt-28 xl:mt-[30vh]">
        <div className="navText md:text-xl md:justify-self-start xl:text-[1.75rem]">
          <p><strong className="text-lightBlue opacity-25 ">01</strong> PICK YOUR DESTINATION</p>
        </div>
        <div className="grid justify-items-center gap-7 xl:grid-cols-[minmax(27.813rem,_1fr)_minmax(27.813rem,_1fr)] xl:gap-[9.813rem]">
          <Image src={ "/"+info.images.png} className={"h-[18.75rem] w-[18.75rem] xl:w-[27.813rem] xl:h-[27.813rem]"} width={170} height={170} alt={info.name}/>
          <div className="grid justify-items-center gap-7">
            <DestinationNav id={id} />
            <div className="text-center mb-4">
              <h3>{info.name}</h3>
              <p className="regularText font-BarlowRegular text-center text-lightBlue max-w-[35.813rem] xl:max-w-[27.813rem] xl:text-left">
                {info.description}
              </p>
            </div>
            <div className="grid gap-5 pb-5 pt-8 border-t border-[#383B4B] w-full text-center md:grid-cols-2">
              <div className="grid gap-3">
                <p className="subHeading2 text-lightBlue">AVG. DISTANCE</p>
                <p className="subHeading1">{info.distance.toUpperCase()}</p>
              </div>
              <div className="grid gap-3">
                <p className="subHeading2 text-lightBlue">EST. TRAVEL TIME</p>
                <p className="subHeading1">{info.travel.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <><p>not found</p></>

}

export default Destinations
