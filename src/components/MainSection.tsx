import React from 'react'

const MainSection: React.FC = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center px-6 md:px-24 py-20 bg-midnight rounded-3xl shadow-2xl my-16 max-w-6xl mx-auto">
      <div className="w-full flex flex-col md:flex-row items-start gap-16">
        {/* Company Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold mb-4 text-gold leading-tight tracking-tight">Ready to Start Investing?</h1>
          <div className="w-24 h-1 bg-gold rounded mb-8" />
          <p className="text-lg font-body text-offwhite mb-10 max-w-xl opacity-90">Get in touch with our investment specialists to discuss your real estate investment goals and explore opportunities.</p>
          <div className="space-y-6 text-offwhite text-base font-body max-w-xl mb-10">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gold">Phone:</span>
              <span className="opacity-80">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gold">Email:</span>
              <span className="opacity-80">invest@trigencapital.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gold">Address:</span>
              <span className="opacity-80">123 Investment Ave, Suite 500, New York, NY 10001</span>
            </div>
          </div>
          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full bg-gold text-charcoal font-headline font-bold text-xl shadow-lg hover:bg-gold/90 transition-colors duration-200 tracking-wide uppercase border-2 border-gold"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainSection 