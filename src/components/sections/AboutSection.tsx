import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/balajip76',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/balajip',
    Icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:hello@neyar.one',
    Icon: MailIcon,
  },
];

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

        <div className="space-y-5 text-mint-white/70 leading-relaxed mb-12">
          <p>
            I&apos;m an AI-Native Product Leader who spent the last year building, breaking, and rebuilding products at the frontier of AI tooling. Not as a hobby — as a deliberate exploration of what AI changes for product management.
          </p>
          <p>
            I believe the most impactful PMs of the next decade will be the ones who can close the loop between product thinking and working software. AI is making that possible for the first time.
          </p>
          <p>
            This site documents the journey — seven methodologies, thirteen shipped apps, and the hard-won lessons that came from doing the work myself.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-mint-white/60 hover:text-steel-teal hover:border-steel-teal/50 hover:bg-steel-teal/10 transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
