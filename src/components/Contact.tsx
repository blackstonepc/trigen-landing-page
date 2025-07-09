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
    <div className="bg-midnight py-20 px-4 font-body" id="contact">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-silver tracking-tight">Contact Us</h2>
        <div className="w-20 h-1 bg-silver rounded mb-8 mx-auto" />
        <p className="text-offwhite mb-10 text-lg">
          Have a question or want to discuss an opportunity? Fill out the form below, and we'll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-offwhite mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-silver/30 focus:outline-none focus:ring-2 focus:ring-silver/60 font-body"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-offwhite mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-silver/30 focus:outline-none focus:ring-2 focus:ring-silver/60 font-body"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-offwhite mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded bg-charcoal text-offwhite border border-silver/30 focus:outline-none focus:ring-2 focus:ring-silver/60 font-body"
            />
          </div>
          <button type="submit" className="w-full py-3 rounded bg-silver text-charcoal font-headline font-bold text-lg shadow-lg hover:bg-silver/90 transition-colors duration-200 tracking-wide uppercase">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-silver font-body">{status}</p>}
      </div>
    </div>
  );
};

export default Contact 