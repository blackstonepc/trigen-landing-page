import React from 'react'

const Hero: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center text-center px-4 py-28 bg-midnight rounded-b-3xl shadow-xl">
    <div className="max-w-3xl w-full mx-auto">
      <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-silver mb-6 tracking-tight leading-tight drop-shadow-xl">
        Trigen Capital
      </h1>
      <div className="w-32 h-1 bg-silver rounded mb-8 mx-auto" />
      <p className="text-xl md:text-2xl font-body text-silver mb-10 max-w-2xl mx-auto leading-relaxed">
        Elevating Real Estate Investing with Vision, Integrity, and Results.
      </p>
      <div>
        <a
          href="#contact"
          className="inline-block px-10 py-4 rounded-full bg-silver text-charcoal font-headline font-bold text-xl shadow-lg hover:bg-silver/90 transition-colors duration-200 tracking-wide uppercase border-2 border-silver"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
)

export default Hero 