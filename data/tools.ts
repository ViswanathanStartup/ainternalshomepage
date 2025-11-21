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
  // Add more tools here as you build them
]

export const categories = [
  'All',
  'Daily Dev Annoyances',
  'Code Quality & Analysis',
  'Documentation & Communication'
]
