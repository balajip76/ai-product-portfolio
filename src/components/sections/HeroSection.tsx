'use client';

import Image from 'next/image';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

export default function HeroSection() {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-charcoal-darker relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-steel-teal/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — About me */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="Balaji"
                width={120}
                height={120}
                className="rounded-2xl shadow-xl mx-auto lg:mx-0"
              />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-steel-teal mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-mint-white mb-4 leading-tight">
              Hi, I&apos;m Balaji
            </h2>
            <p className="text-mint-white/70 leading-relaxed mb-4 max-w-md">
              I&apos;m an AI-Native Product Leader who spent the last year building, breaking, and rebuilding products at the frontier of AI tooling — not as a hobby, but as a deliberate exploration of what AI changes for product management.
            </p>
            <p className="text-mint-white/60 text-sm leading-relaxed max-w-md">
              I believe the most impactful PMs of the next decade will be the ones who can close the loop between product thinking and working software. AI is making that possible for the first time.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/balajiponnuswamy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-mint-white/60 hover:text-steel-teal hover:border-steel-teal/50 hover:bg-steel-teal/10 transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:balaji.ponnuswamy@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-mint-white/60 hover:text-steel-teal hover:border-steel-teal/50 hover:bg-steel-teal/10 transition-all"
              >
                <MailIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/balajip76"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-mint-white/60 hover:text-steel-teal hover:border-steel-teal/50 hover:bg-steel-teal/10 transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT — AI-Native Product Leader */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-steel-teal mb-6">
              AI-Native Product Leader
            </p>

            <p className="text-lg sm:text-xl text-warm-beige max-w-xl mb-10 leading-relaxed">
              12 months. 7 stages of learning. 13 prototypes built. Exploring how AI reshapes what it means to build products.
            </p>

            {/* Stats bar */}
            <div className="flex items-start gap-6 sm:gap-10 mb-12 flex-wrap justify-center lg:justify-start">
              {[
                { value: '12', label: 'Months' },
                { value: '7', label: 'Stages of\u00A0Learning' },
                { value: '13', label: 'Prototypes Built' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center w-20">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-steel-teal">{value}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-mint-white/40 mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <button
                onClick={() => scrollTo('journey')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-steel-teal hover:bg-steel-teal-dark text-charcoal-darker font-medium text-sm transition-colors cursor-pointer"
              >
                View the Journey
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-steel-teal/40 hover:border-steel-teal text-mint-white/80 hover:text-mint-white font-medium text-sm transition-colors cursor-pointer"
              >
                See Prototypes Built
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-mint-white/20 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-steel-teal/40 to-transparent" />
      </div>
    </section>
  );
}
