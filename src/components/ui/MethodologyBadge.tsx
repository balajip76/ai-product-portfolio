import { MethodologySlug } from '@/types';

const badgeStyles: Record<MethodologySlug, string> = {
  'ai-exploration':      'bg-charcoal-light/30 text-mint-white/80',
  'vibe-coding':         'bg-dusty-mauve/30 text-warm-beige-dark',
  'structured-learning': 'bg-steel-teal/25 text-steel-teal-light',
  'ai-orchestration':    'bg-steel-teal/40 text-mint-white',
  'spec-driven':         'bg-warm-beige/20 text-mint-white/80',
  'bmad-method':         'bg-warm-beige-dark/30 text-mint-white/80',
  'agent-teams':         'bg-charcoal/50 text-mint-white',
};

interface MethodologyBadgeProps {
  slug: MethodologySlug;
  label: string;
  small?: boolean;
}

export default function MethodologyBadge({ slug, label, small = false }: MethodologyBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-mono font-medium ${small ? 'text-xs px-2.5 py-0.5' : 'text-xs px-3 py-1'} ${badgeStyles[slug]}`}
    >
      {label}
    </span>
  );
}
