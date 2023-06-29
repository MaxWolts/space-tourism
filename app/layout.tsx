import './globals.css'
import { Inter } from 'next/font/google'
import icon from '../public/assets/favicon-32x32.png'

type Props = {
  children: React.ReactNode
}


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Tourism',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Props) {

  return (
    <html lang="en">
      <link rel="shortcut icon" href={icon.src}></link>
      <body className={inter.className + " overflow-x-hidden"}>
        {children}
      </body>
    </html>
  )
}
