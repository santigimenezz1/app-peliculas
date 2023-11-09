import Footer from '@/components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import '../app/mediaQuery.css'
import Link from 'next/link'
import NavBarMobile from '@/components/NavBarMobile/NavBarMobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <NavBar />
          <NavBarMobile />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  )
}
