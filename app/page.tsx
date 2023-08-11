import AboutMe from './AboutMe'
import Header from './Header'
import Services from './Services'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col justify-center items-center w-full space-y-36">
        <Services />
        <AboutMe />
      </main>
    </>
  )
}
