import Hero from './components/Hero'
import About from './components/About'
import MainSection from './components/MainSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-offwhite text-midnight font-body">
      <header className="w-full py-8 px-8 md:px-16 text-3xl font-headline font-bold tracking-widest flex items-center justify-between border-b border-gold bg-midnight text-gold shadow-sm">
        <span>Trigen Capital</span>
      </header>
      <main className="flex-grow w-full flex flex-col gap-0">
        <Hero />
        <About />
        <MainSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
