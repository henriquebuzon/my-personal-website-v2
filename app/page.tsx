import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import HeaderB from './HeaderB'
import Services from './Services'
import Special from './Special'
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeaderB />
      <main className="flex flex-col justify-center items-center w-full ">
        <Special />
        {/* <Services /> */}
        {/* <AboutMe /> */}
        <WorkExperience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
