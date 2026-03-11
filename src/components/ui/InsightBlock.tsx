import type { ComponentType } from 'react';
import { Insight } from '@/types';
import { CompassIcon, LayersIcon, NetworkIcon, LightbulbIcon } from '@/components/icons';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  compass: CompassIcon,
  layers: LayersIcon,
  network: NetworkIcon,
  lightbulb: LightbulbIcon,
};

export default function InsightBlock({ insight }: { insight: Insight }) {
  const Icon = iconMap[insight.icon] ?? CompassIcon;
  return (
    <div className="bg-white/20 rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-charcoal-darker">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-xl font-bold text-charcoal-darker mb-3">
        {insight.title}
      </h3>
      <p className="text-charcoal text-sm leading-relaxed">
        {insight.body}
      </p>
    </div>
  );
}
