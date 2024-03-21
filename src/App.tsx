import React, { FC, Suspense, useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/index.scss'
import Navbar from "./components/Navbar";
import LangChangeBtn from "./components/LangChangeBtn";
import ResumeLink from "./components/ResumeLink";
import {Intro} from "./components/HeadingIntro/page/Intro";
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
//const Contact = React.lazy(() => import('./components/Contact'));
import Footer from "./components/Footer";
import LangContexts  from "./contexts/LangContexts";



const App:FC = () => {

  AOS.init();

  const [lang, setLang] = useState('RU');

  const LangChange = () => {
    setLang(lang === 'EN' ? 'RU' : 'EN');
    localStorage.setItem('language', lang === 'EN' ? 'RU' : 'EN');
  }

  useEffect (() => {
    const Lang = localStorage.getItem('language')
    if (Lang) {
      setLang(Lang)
    }
  }, [])

  return (
    <LangContexts.Provider value={lang}>
        <Navbar />
        <main className="container">
          <LangChangeBtn
            handleLangChange={LangChange}
            lang={lang}
          />
          <ResumeLink />
          <Intro />
          <Suspense fallback={<div />}>
            <About />
            <Skills />
            <Portfolio />
            {/* <Contact /> */}
          </Suspense>
          <Footer />
        </main>
    </ LangContexts.Provider >
  )
}

export default App;
