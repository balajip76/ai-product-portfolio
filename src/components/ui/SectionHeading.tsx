interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ overline, title, subtitle, light = false, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {overline && (
        <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${light ? 'text-steel-teal' : 'text-steel-teal-dark'}`}>
          {overline}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-mint-white' : 'text-charcoal-darker'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-mint-white/70' : 'text-charcoal-light'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
