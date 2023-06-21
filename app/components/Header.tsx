'use client'
import Image from "next/image";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import logo from "../../public/assets/shared/logo.svg";
import iconBurger from "../../public/assets/shared/icon-hamburger.svg";

import { useState } from "react";

export const Header = () => {
  const [menuState, useMenuState] = useState(false)
  const [sectionSelected, setSectionSelected] = useState<number>(0)

  const MenuHanddle = () => {
    useMenuState(!menuState);
  }
  const SectionSelectedHanddle = (number: number) => {
    setSectionSelected(number)
  }
  return (
    <header className="z-20 fixed flex h-fit w-full justify-between">
      <Image src={logo.src} alt="logo space tourism" width={48} height={48} className={"m-6"}/>
      <NavMobile menuState={menuState} MenuHanddle={MenuHanddle} className={"md:hidden"}/>
      <NavDesktop sectionSelected={sectionSelected} className={"hidden md:block"} SectionSelectedHanddle={SectionSelectedHanddle}/>
      <button onClick={MenuHanddle} className={"mt-[33px] mr-[24px] h-fit md:hidden"}>
        <Image src={iconBurger.src} alt="open menu" width={24} height={21}/>
      </button>
    </header>
  );
};
