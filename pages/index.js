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
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Order Now
</button>
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Don't Miss a Thing! 
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Enter your email address"></input>
  </div>
  <div class="flex items-center justify-between">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Subscribe to Newsletter
    </button>
  </div>
</form>

    </div>
  )
}