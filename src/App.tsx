import React, { FC, Suspense } from "react"
import './styles/index.scss'
import Navbar from "./components/Navbar";
import ResumeLink from "./components/ResumeLink";
import Intro from "./components/Intro";
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
//const Contact = React.lazy(() => import('./components/Contact'));



const App:FC = () => {

  return (
    <>
      <Navbar />
      <main className="container">
        <ResumeLink />
        <Intro />
        <Suspense fallback={<div />}>
          <About />
          <Skills />
          <Portfolio />
          {/* <Contact /> */}
        </Suspense>
      </main>
    </>
  );
}

export default App
