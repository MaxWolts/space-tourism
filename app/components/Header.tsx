'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/shared/logo.svg";
import iconBurger from "../../public/assets/shared/icon-hamburger.svg";
import iconClose from "../../public/assets/shared/icon-close.svg";
import { useState } from "react";

export const Header = () => {
  const [menuState, useMenuState] = useState(false);

  const MenuHanddle = () => {
    useMenuState(!menuState);
  }
  return (
    <header className="fixed flex h-fit w-full justify-between">
      <Image src={logo.src} alt="logo space tourism" width={48} height={48} className={"m-6"}/>
      <div className={`absolute  ${menuState? "right-0" : "right-[-254px]"} top-0 bg-op w-[254px] h-screen glass transition-[right]`}>
        <button className="absolute right-0 mt-[33px] mr-[26px]"
        onClick={MenuHanddle}>
          <Image src={iconClose.src} alt="close menu" width={24} height={21}/>
        </button>
        <nav className=" mt-[118px]">
          <ul>
            <li className="navText mx-8">
              <strong>00 </strong>
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="navText m-8">
              <strong>01 </strong>
              <Link href={"/destination"}>DESTINATION</Link>
            </li>
            <li className="navText m-8">
              <strong>02 </strong>
              <Link href={"crew"}>CREW</Link>
            </li>
            <li className="navText mx-8">
              <strong>03 </strong>
              <Link href={"technology"}>TECHNOLOGY</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={MenuHanddle} className={"mt-[33px] mr-[24px] h-fit"}>
        <Image src={iconBurger.src} alt="open menu" width={24} height={21}/>
      </button>
    </header>
  );
};
