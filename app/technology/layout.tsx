import { Header } from "../components/Header"

const DestinationLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='Technology__background bg-cover min-h-screen px-0 md:pb-0 xl:pt-0' aria-label="technology">
      <Header itemSelected={3}/>
      {children}
    </section>
  )
}

export default DestinationLayout
