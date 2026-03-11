'use client';

import { JourneyStage } from '@/types';
import { useFilter } from '@/context/FilterContext';

interface JourneyCardProps {
  stage: JourneyStage;
  isLeft: boolean;
}

export default function JourneyCard({ stage, isLeft }: JourneyCardProps) {
  const { setActiveFilter } = useFilter();

  function handleAppsClick() {
    setActiveFilter(stage.slug);
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const card = (
    <div className="bg-charcoal-dark border border-steel-teal/25 rounded-2xl p-6 hover:border-steel-teal/50 transition-all duration-200">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-steel-teal uppercase tracking-widest">{stage.period}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-mint-white mb-3">{stage.title}</h3>
      <p className="text-sm text-mint-white/60 leading-relaxed mb-4">{stage.description}</p>

      {/* Tool chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stage.tools.map((tool) => (
          <span
            key={tool}
            className="font-mono text-xs bg-white/10 text-mint-white/75 px-2.5 py-1 rounded"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Prototypes link */}
      {stage.hasApps && stage.appCount && (
        <button
          onClick={handleAppsClick}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-steel-teal hover:text-steel-teal-light transition-colors cursor-pointer"
        >
          {stage.appCount} prototype{stage.appCount > 1 ? 's' : ''} built →
        </button>
      )}
    </div>
  );

  // Dot
  const dot = (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-steel-teal flex items-center justify-center text-charcoal-darker font-bold font-display text-sm z-10 shadow-lg shadow-steel-teal/30">
      {stage.id}
    </div>
  );

  return (
    <div className="relative mb-10">
      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4 items-start">
        <div className="flex flex-col items-center">
          {dot}
          <div className="w-0.5 bg-steel-teal/50 flex-1 mt-2 min-h-12" />
        </div>
        <div className="flex-1 pb-2">{card}</div>
      </div>

      {/* Desktop alternating layout */}
      <div className="hidden lg:flex items-center gap-0">
        {/* Left content */}
        <div className="flex-1 px-8">
          {isLeft ? card : <div />}
        </div>
        {/* Center dot */}
        <div className="flex justify-center items-center w-10 flex-shrink-0 z-10">
          {dot}
        </div>
        {/* Right content */}
        <div className="flex-1 px-8">
          {!isLeft ? card : <div />}
        </div>
      </div>
    </div>
  );
}
