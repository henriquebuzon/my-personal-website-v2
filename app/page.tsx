import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import HeaderB from './HeaderB'
import Special from './Special'
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <>
      <HeaderB />
      <main className="flex flex-col justify-center items-center w-full ">
        <Special />
        <AboutMe />
        <WorkExperience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
