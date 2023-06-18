import Image from "next/image"
import DestinationNav from "../../components/DestinationNav"
import data from "../../data/data.json"
type Props = {
  params: { id: string}
}
const Destinations = ({params}: Props) => {
  const id = Number(params.id);
  if (id || id === 0) {
    return (
      <div className="grid justify-center justify-items-center">
        <div className="navText">
          <p><strong>01</strong> PICK YOUR DESTINATION {params.id}</p>
        </div>
        <Image src={ "/"+data.destinations[id].images.png} width={170} height={170} alt={data.destinations[id].name}/>
        <DestinationNav id={id} />
      </div>
    )
  }
  return <><p>not found</p></>

}

export default Destinations
