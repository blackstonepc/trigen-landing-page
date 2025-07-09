import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-8 text-center text-silver border-t border-silver bg-midnight bg-opacity-95 font-headline text-lg tracking-widest">
    <div className="container mx-auto">
      <p>&copy; {new Date().getFullYear()} Trigen Capital. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer; 