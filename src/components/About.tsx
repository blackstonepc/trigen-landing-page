import React from 'react'

const About: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center px-4 py-20 bg-offwhite">
    <div className="max-w-2xl w-full text-center">
      <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-midnight tracking-tight">About Trigen Capital</h2>
      <div className="w-20 h-1 bg-gold rounded mb-8 mx-auto" />
      <p className="text-lg md:text-xl text-midnight font-body opacity-80">
        Trigen Capital is a forward-thinking real estate investment firm dedicated to delivering exceptional value and sustainable growth. Our team leverages deep market expertise, innovative strategies, and a commitment to integrity to help clients achieve their investment goals in a dynamic property landscape.
      </p>
    </div>
  </section>
)

export default About 