import Link from "next/link"
type Props = {
  className: string
  itemSelected: number
}

const NavDesktop = ({ className, itemSelected }: Props) => {
  return (
    <div className={className + " flex xl:w-3/5 items-center px-12 xl:pl-24 bg-white backdrop-blur-2xl bg-opacity-5"}>
      <span className="hidden xl:block absolute left-[-47%] top-1/2 translate-y-[-50%] border-white border-b-2 w-[50%] border-opacity-25"></span>
      <nav className="">
        <ul className="flex gap-4 xl:gap-12">
          <li className={"h-24 navText " + `${itemSelected === 0 && "box-content border-b-2 border-white"}`} >
            <Link href={"/"} className={"flex items-center gap-2 h-full md:text-[1rem] xl:text-[1.125rem]" }>
              <strong className="invisible hidden xl:block xl:visible">00</strong> <span>HOME</span>
            </Link>
          </li>
          <li className={"h-24 navText " + `${itemSelected === 1 && "box-content border-b-2 border-white"}`} >
            <Link href={"/destination/0"} className={"flex items-center gap-2 h-full md:text-[1rem] xl:text-[1.125rem]" }>
              <strong className="invisible hidden xl:block xl:visible">01</strong> <span>DESTINATION</span>
            </Link>
          </li>
          <li className={"h-24 navText " + `${itemSelected === 2 && "box-content border-b-2 border-white"}`} >
            <Link href={"/crew"} className={"flex items-center gap-2 h-full md:text-[1rem] xl:text-[1.125rem]" }>
              <strong className="invisible hidden xl:block xl:visible">02</strong> <span>CREW</span>
          </Link>
          </li>
          <li className={"h-24 navText " + `${itemSelected === 3 && "box-content border-b-2 border-white"}`} >
            <Link href={"/technology"} className={"flex items-center gap-2 h-full md:text-[1rem] xl:text-[1.125rem]" }>
              <strong className="invisible hidden xl:block xl:visible">03</strong> <span>TECHNOLOGY</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavDesktop
