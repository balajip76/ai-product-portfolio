export default function AboutSection() {
  return (
    <section id="about" className="bg-charcoal-darker py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-4">
          <p className="font-mono text-xs uppercase tracking-widest text-steel-teal mb-6">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-mint-white mb-6">
            Hi, I&apos;m Balaji
          </h2>
        </div>

        <div className="space-y-5 text-mint-white/70 leading-relaxed">
          <p>
            I&apos;m a Product Leader who spent the last year building, breaking, and rebuilding products at the frontier of AI tooling. Not as a hobby — as a deliberate exploration of what AI changes for product management.
          </p>
          <p>
            I believe the most impactful PMs of the next decade will be the ones who can close the loop between product thinking and working software. AI is making that possible for the first time.
          </p>
          <p>
            This site documents the journey — seven stages of learning, thirteen prototypes built, and the hard-won lessons that came from doing the work myself.
          </p>
        </div>
      </div>
    </section>
  );
}
