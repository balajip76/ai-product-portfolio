import { App } from '@/types';
import MethodologyBadge from './MethodologyBadge';
import { ArrowRightIcon } from '@/components/icons';

export default function AppCard({ app }: { app: App }) {
  return (
    <div className="group bg-charcoal-dark border border-charcoal-light/20 rounded-2xl p-6 flex flex-col gap-4 hover:border-steel-teal/50 hover:bg-charcoal transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <MethodologyBadge slug={app.stageSlug} label={app.stageLabel} small />
        {app.category && (
          <span className="text-xs text-mint-white/50 font-mono bg-charcoal-darker/60 px-2 py-0.5 rounded">
            {app.category}
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-display text-lg font-bold text-mint-white mb-2 group-hover:text-steel-teal transition-colors">
          {app.name}
        </h3>
        <p className="text-sm text-mint-white/60 leading-relaxed">
          {app.description}
        </p>
      </div>

      <a
        href={app.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-steel-teal hover:text-steel-teal-light transition-colors mt-auto"
      >
        Live App
        <ArrowRightIcon className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
