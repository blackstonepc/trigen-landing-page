import React from 'react'

const Hero: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center text-center px-4 py-28 bg-midnight rounded-b-3xl shadow-xl">
    <div className="max-w-3xl w-full mx-auto">
      <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-gold mb-6 tracking-tight leading-tight drop-shadow-xl">
        Trigen Capital
      </h1>
      <div className="w-32 h-1 bg-gold rounded mb-8 mx-auto" />
      <p className="text-2xl md:text-3xl text-offwhite mb-10 font-body opacity-90">
        Elevating Real Estate Investment with Vision, Integrity, and Results.
      </p>
      <a
        href="#contact"
        className="inline-block px-10 py-4 rounded-full bg-gold text-charcoal font-headline font-bold text-xl shadow-lg hover:bg-gold/90 transition-colors duration-200 tracking-wide uppercase border-2 border-gold"
      >
        Get in Touch
      </a>
    </div>
  </section>
)

export default Hero 