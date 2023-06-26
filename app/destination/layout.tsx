import { Header } from "../components/Header"

const DestinationLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='Destination__background bg-cover min-h-screen p-6 xl:pt-0 px-0'>
      <Header/>
      {children}
    </section>
  )
}

export default DestinationLayout
