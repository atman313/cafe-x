import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cafe-X Website</title>
        <meta name = "description" content = "Next App"/>
      </Head>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/pastries">Pastries</a>
          <a href="/menu">Menu</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/reservations">Reservations</a>
        </nav>
      </header>


    </div>
  )
}