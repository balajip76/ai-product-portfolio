import { JourneyStage } from '@/types';

export const journeyStages: JourneyStage[] = [
  {
    id: 1,
    slug: 'ai-exploration',
    title: 'AI Exploration',
    period: 'Early 2025',
    description:
      'Immersed in the AI landscape — studying foundation models, emerging tooling, and what AI-native product development could look like. Built intuitions, not apps.',
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Notion AI'],
    hasApps: false,
  },
  {
    id: 2,
    slug: 'vibe-coding',
    title: 'Vibe Coding',
    period: 'Mid 2025',
    description:
      'Jumped in head-first — prompting AI to write entire apps with minimal code knowledge. Shipped 7 apps in weeks. Learned what AI can do when you just describe what you want.',
    tools: ['Cursor', 'v0', 'Replit', 'Vercel', 'GitHub Copilot'],
    hasApps: true,
    appCount: 7,
  },
  {
    id: 3,
    slug: 'structured-learning',
    title: 'Structured Learning',
    period: 'Late 2025',
    description:
      'Stepped back to understand the fundamentals — how LLMs work, prompt engineering patterns, RAG, agents, and evaluation. Turned intuitions into frameworks.',
    tools: ['DeepLearning.AI', 'Fast.ai', 'LangChain docs', 'Anthropic docs'],
    hasApps: false,
  },
  {
    id: 4,
    slug: 'ai-orchestration',
    title: 'AI Orchestration',
    period: 'Late 2025',
    description:
      'Moved from single-prompt apps to multi-step AI workflows. Built apps where AI agents collaborate, hand off context, and produce structured outputs reliably.',
    tools: ['LangChain', 'LangGraph', 'OpenAI API', 'Claude API', 'Supabase'],
    hasApps: true,
    appCount: 3,
  },
  {
    id: 5,
    slug: 'spec-driven',
    title: 'Spec-Driven Development',
    period: 'Early 2026',
    description:
      'Discovered that writing detailed specs before prompting AI produces dramatically better results. The PM skill of clear requirements became a coding superpower.',
    tools: ['Claude', 'Cursor', 'TypeSpec', 'OpenAPI', 'Zod'],
    hasApps: true,
    appCount: 1,
  },
  {
    id: 6,
    slug: 'bmad-method',
    title: 'BMAD Method',
    period: 'Early 2026',
    description:
      'Adopted the BMAD (Breakthrough Methodology for Agile Development) framework — structured AI-assisted development with clear roles, checkpoints, and review loops.',
    tools: ['BMAD Agents', 'Claude', 'Cursor', 'GitHub Actions'],
    hasApps: true,
    appCount: 1,
  },
  {
    id: 7,
    slug: 'agent-teams',
    title: 'AI Agent Teams',
    period: '2026',
    description:
      'The frontier — orchestrating specialized AI agents as a product team. Researcher, architect, developer, and QA agents working in concert to ship production-ready software.',
    tools: ['Claude Code', 'AutoGen', 'CrewAI', 'MCP', 'Vercel AI SDK'],
    hasApps: true,
    appCount: 1,
  },
];
