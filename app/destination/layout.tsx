import React from 'react'

const DestinationLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='Destination__background bg-cover min-h-screen p-6'>
      {children}
    </section>
  )
}

export default DestinationLayout
