'use client';

import { useState } from 'react';
import { MenuIcon, CloseIcon } from '@/components/icons';

const navLinks = [
  { href: '#journey', label: 'Journey' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#learnings', label: 'Learnings' },
  { href: '#about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNav(href: string) {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-darker/95 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-display font-extrabold text-xl tracking-widest text-mint-white hover:text-steel-teal transition-colors"
          >
            BALAJI
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="text-sm font-medium text-mint-white/70 hover:text-steel-teal transition-colors cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-mint-white/70 hover:text-steel-teal transition-colors p-1"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-charcoal-darker border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <span className="font-display font-extrabold tracking-widest text-mint-white">BALAJI</span>
              <button onClick={() => setOpen(false)} className="text-mint-white/70 hover:text-steel-teal transition-colors" aria-label="Close menu">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col p-6 gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="w-full text-left py-3 px-4 rounded-xl text-base font-medium text-mint-white/80 hover:text-steel-teal hover:bg-steel-teal/10 transition-all cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
