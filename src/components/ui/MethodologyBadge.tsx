import { MethodologySlug } from '@/types';

const badgeStyles: Record<MethodologySlug, string> = {
  'ai-exploration': 'bg-charcoal-light text-mint-white',
  'vibe-coding': 'bg-dusty-mauve text-white',
  'structured-learning': 'bg-charcoal text-mint-white',
  'ai-orchestration': 'bg-steel-teal text-white',
  'spec-driven': 'bg-charcoal-dark text-mint-white',
  'bmad-method': 'bg-warm-beige-dark text-white',
  'agent-teams': 'bg-dusty-mauve-dark text-white',
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
