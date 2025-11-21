export interface Tool {
  id: string
  name: string
  description: string
  url: string
  category: string
  tags: string[]
  icon?: string
  status: 'live' | 'coming-soon'
}

export const tools: Tool[] = [
  {
    id: 'jsondiffviewer',
    name: 'JSON Diff Viewer',
    description: 'Compare and visualize differences between two JSON objects with an intuitive side-by-side view',
    url: 'https://jsondiffviewer.ainternals.com',
    category: 'Daily Dev Annoyances',
    tags: ['json', 'diff', 'compare', 'viewer'],
    status: 'live'
  },
  {
    id: 'cmg',
    name: 'Commit Message Generator',
    description: 'Transform casual messages into professional, industry-standard commits',
    url: 'https://cmg.ainternals.com',
    category: 'Code Quality & Analysis',
    tags: ['git', 'commit', 'message', 'generator'],
    status: 'live'
  },
  {
    id: 'cuc',
    name: 'Can I Use Copilot',
    description: 'Search for copilot use cases out of 608 usecases in this tool',
    url: 'https://cuc.ainternals.com',
    category: 'Documentation & Communication',
    tags: ['copilot', 'github', 'ai', 'compatibility'],
    status: 'live'
  },
  {
    id: 'tdg',
    name: 'Test Data Generator',
    description: 'Generate realistic test data (names, emails, addresses, credit cards)',
    url: 'https://tdg.ainternals.com',
    category: 'Testing & QA',
    tags: ['testing', 'data', 'generator', 'mock'],
    status: 'live'
  },
  {
    id: 'ba',
    name: 'Bundle Analyzer',
    description: 'Analyze package.json to see bundle impact and get suggestions for lighter alternatives',
    url: 'https://ba.ainternals.com',
    category: 'Performance & Optimization',
    tags: ['bundle', 'analyzer', 'performance', 'optimization'],
    status: 'live'
  },
  {
    id: 'tsa',
    name: 'Tech Stack Analyzer',
    description: 'Paste job descriptions to get tech stack breakdowns and learning roadmaps',
    url: 'https://tsa.ainternals.com',
    category: 'Learning & Career',
    tags: ['job', 'learning', 'tech-stack', 'roadmap'],
    status: 'live'
  },
  {
    id: 'promptcraft',
    name: 'PromptCraft',
    description: 'Convert your prompt to high quality prompt using CLEAR Framework',
    url: 'https://promptcraft.ainternals.com',
    category: 'AI Tools',
    tags: ['ai', 'prompt', 'clear', 'quality'],
    status: 'live'
  },
  // Add more tools here as you build them
]

export const categories = [
  'All',
  'Daily Dev Annoyances',
  'Code Quality & Analysis',
  'Documentation & Communication',
  'Testing & QA',
  'Performance & Optimization',
  'Learning & Career',
  'AI Tools'
]
