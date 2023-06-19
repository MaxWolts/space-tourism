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
      <div className="grid justify-center justify-items-center gap-4 mt-16">
        <div className="navText">
          <p><strong className="text-lightBlue opacity-25">01</strong> PICK YOUR DESTINATION</p>
        </div>
        <Image src={ "/"+info.images.png} width={170} height={170} alt={info.name}/>
        <DestinationNav id={id} />
        <div className="text-center mb-4">
          <h3>{info.name}</h3>
          <p className="regularText text-center text-lightBlue">
            {info.description}
          </p>
        </div>
        <div className="grid gap-5 pb-5 pt-8 border-t border-[#383B4B] w-full text-center ">
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
    )
  }
  return <><p>not found</p></>

}

export default Destinations
