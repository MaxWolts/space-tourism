'use client'
import Image from "next/image";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import logo from "../../public/assets/shared/logo.svg";
import iconBurger from "../../public/assets/shared/icon-hamburger.svg";

import { useState } from "react";
type Props = {
  itemSelected:number
}

export const Header = ({itemSelected}:Props) => {
  const [menuState, useMenuState] = useState(false)

  const MenuHanddle = () => {
    useMenuState(!menuState);
  }

  return (
    <header className="z-20 sticky top-0 flex h-fit w-full justify-between xl:pt-14 overflow-x-clip">
      <Image src={logo.src} alt="logo space tourism" width={48} height={48} className={"m-6 xl:mx-0 xl:ml-14 xl:my-auto"}/>
      <NavMobile menuState={menuState} MenuHanddle={MenuHanddle} className={"md:hidden"}/>
      <NavDesktop className={"hidden md:block"} itemSelected={itemSelected}/>
      <button onClick={MenuHanddle} className={"mt-[33px] mr-[24px] h-fit md:hidden"}>
        <Image src={iconBurger.src} alt="open menu" width={24} height={21}/>
      </button>
    </header>
  );
};
