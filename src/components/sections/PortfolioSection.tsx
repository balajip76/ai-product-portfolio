'use client';

import { apps } from '@/data/apps-data';
import { useFilter } from '@/context/FilterContext';
import AppCard from '@/components/ui/AppCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { MethodologySlug } from '@/types';

type FilterValue = MethodologySlug | 'all';

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'vibe-coding', label: 'Vibe Coding' },
  { value: 'ai-orchestration', label: 'AI Orchestration' },
  { value: 'spec-driven', label: 'Spec-Driven' },
  { value: 'bmad-method', label: 'BMAD Method' },
  { value: 'agent-teams', label: 'Agent Teams' },
];

export default function PortfolioSection() {
  const { activeFilter, setActiveFilter } = useFilter();

  const filtered = activeFilter === 'all'
    ? apps
    : apps.filter((a) => a.stageSlug === activeFilter);

  return (
    <section id="portfolio" className="bg-warm-beige py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeading
            overline="The Work"
            title="13 Apps Shipped"
            subtitle="From quick vibe-coded experiments to structured AI-orchestrated products."
          />
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeFilter === value
                  ? 'bg-charcoal-darker text-mint-white shadow-md'
                  : 'bg-charcoal-darker/10 text-charcoal hover:bg-charcoal-darker/20 hover:text-charcoal-darker'
              }`}
            >
              {label}
              {value !== 'all' && (
                <span className="ml-1.5 opacity-60 text-xs">
                  ({apps.filter((a) => a.stageSlug === value).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* App grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-charcoal-light py-16 font-mono text-sm">No apps found.</p>
        )}
      </div>
    </section>
  );
}
