'use client';

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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
        {/* Overline */}
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-steel-teal mb-6">
          AI-Native Product Leader
        </p>

        {/* Name */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-mint-white tracking-tight mb-6 leading-none">
          BALAJI
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-warm-beige max-w-xl mx-auto mb-10 leading-relaxed">
          12 months. 7 methodologies. 13 apps shipped. Exploring how AI reshapes what it means to build products.
        </p>

        {/* Stats bar */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-12 flex-wrap">
          {[
            { value: '12', label: 'Months' },
            { value: '7', label: 'Methodologies' },
            { value: '13', label: 'Apps Shipped' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-steel-teal">{value}</div>
              <div className="font-mono text-xs uppercase tracking-widest text-mint-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('journey')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-steel-teal hover:bg-steel-teal-dark text-white font-medium text-sm transition-colors cursor-pointer"
          >
            View the Journey
          </button>
          <button
            onClick={() => scrollTo('portfolio')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-steel-teal/40 hover:border-steel-teal text-mint-white/80 hover:text-mint-white font-medium text-sm transition-colors cursor-pointer"
          >
            See Apps Built
          </button>
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
