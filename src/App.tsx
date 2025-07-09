import Hero from './components/Hero'
import About from './components/About'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <header className="fixed top-0 left-0 w-full z-10 p-4 flex items-center justify-between border-b border-silver bg-midnight text-silver shadow-sm">
        <div className="text-2xl font-headline font-bold">Trigen Capital</div>
      </header>
      <main className="flex-grow w-full flex flex-col gap-0">
        <Hero />
        <About />
        <MainSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
