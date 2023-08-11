import Header from './Header'
import Services from './Services'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex justify-center items-center w-full">
        <Services />
      </main>
    </>
  )
}
