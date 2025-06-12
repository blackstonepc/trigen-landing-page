import React, { useState } from 'react'

const MainSection: React.FC = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Message sent! (EmailJS integration coming soon)'), 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-stretch justify-center gap-16 px-6 md:px-24 py-20 bg-midnight rounded-3xl shadow-2xl my-16 max-w-6xl mx-auto">
      {/* Left: Company Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-16">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold mb-4 text-gold leading-tight tracking-tight">Ready to Start Investing?</h1>
        <div className="w-24 h-1 bg-gold rounded mb-8" />
        <p className="text-lg font-body text-offwhite mb-10 max-w-xl opacity-90">Get in touch with our investment specialists to discuss your real estate investment goals and explore opportunities.</p>
        <div className="space-y-6 text-offwhite text-base font-body max-w-xl">
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
      </div>
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="bg-charcoal rounded-2xl shadow-2xl p-12 flex flex-col justify-center w-full max-w-lg md:max-w-none mx-auto border border-gold/40">
          <h2 className="text-2xl font-headline font-bold mb-6 text-gold tracking-wide">Schedule a Consultation</h2>
          <p className="text-offwhite/70 mb-8 font-body">Fill out the form below and we'll get back to you within 24 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-offwhite/80 mb-1 font-body" htmlFor="firstName">First name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-midnight text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
                />
              </div>
              <div className="flex-1">
                <label className="block text-offwhite/80 mb-1 font-body" htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-midnight text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
                />
              </div>
            </div>
            <div>
              <label className="block text-offwhite/80 mb-1 font-body" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded bg-midnight text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
              />
            </div>
            <div>
              <label className="block text-offwhite/80 mb-1 font-body" htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(555) 123-4567"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-midnight text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
              />
            </div>
            <div>
              <label className="block text-offwhite/80 mb-1 font-body" htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded bg-midnight text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded bg-gold text-charcoal font-headline font-bold text-lg shadow-lg hover:bg-gold/90 transition-colors duration-200 tracking-wide uppercase"
            >
              Schedule Consultation
            </button>
          </form>
          {status && <p className="mt-4 text-gold font-body">{status}</p>}
        </div>
      </div>
    </section>
  )
}

export default MainSection 