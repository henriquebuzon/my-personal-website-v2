import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Services from './Services'
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col justify-center items-center w-full ">
        <Services />
        <AboutMe />
        <WorkExperience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
