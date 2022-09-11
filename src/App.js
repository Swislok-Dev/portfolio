import "./App.css"
import Header from "./components/Header"
import PageHero from "./components/PageHero"
import Projects from "./components/Projects"
import Skills from "./components/Skills.jsx"
import ContactMe from "./components/ContactMe.jsx"

function App() {
  return (
    <main>
      <Header />
      <PageHero />
      <Projects />
      <Skills />
      <ContactMe />
    </main>
  )
}

export default App
