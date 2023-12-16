import Image from 'next/image'
import SearchComponent from './searchbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchComponent/>
    </main>
  )
}
