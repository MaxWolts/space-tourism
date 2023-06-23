import Link from "next/link"

export default function Home() {

  return (
    <main className={`z-10 relative w-full min-h-screen Home__background bg-cover`}>
      <div className="pt-28 pb-16 md:pb-20 px-6 text-center md:pt-52 md:px-0 md:mx-auto xl:flex xl:items-end xl:h-screen xl:m-0 xl:text-left xl:pb-[16vh] xl:max-w-7xl xl:mx-auto">
        <div className="max-w-md mx-auto">
          <div className="navText text-lightBlue">
            <p className="md:text-[1.25rem] xl:text-[1.75rem] xl:tracking-[0.295rem]">SO, YOU WANT TO TRAVEL TO</p>
          </div>
          <h1>SPACE</h1>
          <div className="regularText ">
            <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
        </div>
        <div className="relative w-fit mx-auto mt-20">
          <Link href={"/destination/0"} className={" z-10 explore relative grid content-center text-center bg-white rounded-full h-[9.375rem] w-[9.375rem] md:h-[15.125rem] md:w-[15.125rem] xl:w-[17.125] xl:h-[17.125]"}>
            <p className="text-[1.25rem] font-Bellefair tracking-[1.25px] md:text-[2rem]">EXPLORE</p>
          </Link>
          <div className="explore-effect glass"></div>
        </div>
      </div>
    </main>
  )
}
