import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Services from './components/sections/Services.jsx'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />

        {/* Real section content (Gallery, Contact)
            is added in the following build steps, one at a time.
            These anchors exist now so the nav links already work. */}
        <section id="gallery" style={{ minHeight: '10vh' }} />
        <section id="contact" style={{ minHeight: '10vh' }} />
      </main>
    </>
  )
}

export default App