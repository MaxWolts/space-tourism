import { Header } from "../components/Header"

const DestinationLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='Crew__background bg-cover min-h-screen px-0 md:pb-0 xl:pt-0 overflow-x-hidden'>
      <Header/>
      {children}
    </section>
  )
}

export default DestinationLayout
