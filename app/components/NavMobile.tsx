import Link from "next/link"
import Image from "next/image"
import iconClose from "../../public/assets/shared/icon-close.svg"

type Props = {
  menuState: boolean,
  MenuHanddle: () => void,
  className: string
}

const NavMobile = ({ menuState, MenuHanddle, className}: Props) => {
  return (
    <div className={`absolute  ${menuState? "right-0" : "right-[-254px]"} top-0 bg-op w-[254px] h-screen glass transition-[right] ${className}`}>
      <button className="absolute right-0 mt-[33px] mr-[26px]"
      onClick={MenuHanddle}>
        <Image src={iconClose.src} alt="close menu" width={24} height={21}/>
      </button>
      <nav className=" mt-[118px]">
        <ul>
          <li className="navText mx-8">
            <strong>00 </strong>
            <Link href={"/"} onClick={MenuHanddle}>HOME</Link>
          </li>
          <li className="navText m-8">
            <strong>01 </strong>
            <Link href={"/destination/0"} onClick={MenuHanddle}>DESTINATION</Link>
          </li>
          <li className="navText m-8">
            <strong>02 </strong>
            <Link href={"/crew"} onClick={MenuHanddle}>CREW</Link>
          </li>
          <li className="navText mx-8">
            <strong>03 </strong>
            <Link href={"/technology"} onClick={MenuHanddle}>TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
