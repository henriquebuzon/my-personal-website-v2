import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import PersonalProjects from './PersonalProjects'
import Special from './Special'
import WorkExperience from './WorkExperience'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col justify-center items-center w-full ">
        <Special />
        <AboutMe />
        <WorkExperience />
        <PersonalProjects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
