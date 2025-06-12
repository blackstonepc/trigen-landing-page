import React from 'react'

const Footer: React.FC = () => (
  <footer className="w-full py-8 text-center text-gold border-t border-gold bg-midnight bg-opacity-95 font-headline text-lg tracking-widest">
    <span>&copy; {new Date().getFullYear()} Trigen Capital. All rights reserved.</span>
  </footer>
)

export default Footer 