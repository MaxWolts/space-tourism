import { Slide } from "../components/Slide"
import data from "../data/data.json"

const Crew = () => {
  return (
    <div className="Destination__background-mobile min-h-screen p-6">
      <div className="navText">
        <p><strong className="text-lightBlue opacity-25">02</strong> MEET YOUR CREW</p>
      </div>
      <Slide images={data.crew.map(img => img.images.png)}/>
    </div>
  )
}

export default Crew
