import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import parse from 'html-react-parser'
import { courseSection } from '../data/CourseSection'
import { TutorsSection, tutorList } from '../data/TutorsSection'
import Tutors from '../components/Tutors'
import { partnersSection, partnersList } from '../data/PartnersSection'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import { contactSection } from '../data/ContactSection'

function Home() {
  return (
    <>
      <Navbar />
      {/* HOME */}
      <div className='wrapper'>
      <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
        {/* ONLINE COURSE */}
        <section id="courses">
            <div className="kolom">
                {parse(courseSection.content)}
            </div>
            <img src={courseSection.image}/>
        </section>
        {/* TUTORS */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(TutorsSection.content)}
                </div>
            </div>
        </section>
        <Tutors tutorList={tutorList} />
        {/* PATNERS */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList}/>
            </div>
            </section>
      </div>
      <Contact contactSection={contactSection}/>
      <Footer />
    </>
  )
}

export default Home
