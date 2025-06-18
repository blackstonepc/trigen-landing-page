import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setStatus('Sending...')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus('Message sent!')
        formRef.current?.reset()
      })
      .catch(() => setStatus('Something went wrong. Please try again.'))
  }

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 py-20 bg-midnight rounded-3xl shadow-2xl my-16 max-w-3xl mx-auto">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-gold tracking-tight">Contact Us</h2>
        <div className="w-20 h-1 bg-gold rounded mb-8 mx-auto" />
        <p className="text-lg text-offwhite mb-8 font-body opacity-80">Have questions or want to discuss investment opportunities? Reach out below.</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/60 font-body"
          />
          <button
            type="submit"
            className="w-full py-3 rounded bg-gold text-charcoal font-headline font-bold text-lg shadow-lg hover:bg-gold/90 transition-colors duration-200 tracking-wide uppercase"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-gold font-body">{status}</p>}
      </div>
    </section>
  )
}

export default Contact 