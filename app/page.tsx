import Link from "next/link"

export default function Home() {

  return (
    <main className={`z-10 relative w-screen min-h-screen Home__background-mobile bg-cover`}>
      <div className="pt-28 pb-16 px-6 text-center">
        <div className="navText">
          <p>SO, YOU WANT TO TRAVEL TO</p>
        </div>
        <h1 className="text-[5rem] ">SPACE</h1>
        <div className="regularText">
          <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="relative w-fit mx-auto mt-20 ">
          <Link href={"/destination/0"} className={" z-10 explore relative grid content-center bg-white rounded-full h-[9.375rem] w-[9.375rem] "}>
            <p className="text-[1.25rem] font-Bellefair tracking-[1.25px]">Explore</p>
          </Link>
          <div className="explore-effect glass"></div>
        </div>
      </div>
    </main>
  )
}
