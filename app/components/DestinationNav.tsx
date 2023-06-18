import Link from "next/link"
type Props = {
  id: number
}
const DestinationNav = ({id}: Props) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4">
          <li className="subHeading2 w-fit">
            <Link href={"/destination/0"} className={`py-2 ${id === 0 && "border-b-2"}`}>MOON</Link>
          </li>
          <li className="subHeading2">
            <Link href={"/destination/1"} className={`py-2 ${id === 1 && "border-b-2"}`}>MARS</Link>
          </li>
          <li className="subHeading2">
            <Link href={"/destination/2"} className={`py-2 ${id === 2 && "border-b-2"}`}>EUROPA</Link>
          </li>
          <li className="subHeading2">
            <Link href={"/destination/3"} className={`py-2 ${id === 3 && "border-b-2"}`}>TITAN</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default DestinationNav
