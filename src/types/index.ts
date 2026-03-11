export type MethodologySlug =
  | 'ai-exploration'
  | 'vibe-coding'
  | 'structured-learning'
  | 'ai-orchestration'
  | 'spec-driven'
  | 'bmad-method'
  | 'agent-teams';

export interface JourneyStage {
  id: number;
  slug: MethodologySlug;
  title: string;
  period: string;
  description: string;
  tools: string[];
  hasApps: boolean;
  appCount?: number;
}

export interface App {
  id: string;
  name: string;
  description: string;
  stageSlug: MethodologySlug;
  stageLabel: string;
  liveUrl: string;
  category?: string;
}

export interface Insight {
  id: number;
  icon: string;
  title: string;
  body: string;
}
