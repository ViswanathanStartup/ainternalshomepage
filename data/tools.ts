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
    description: 'Paste git diffs and get well-formatted, meaningful commit messages automatically',
    url: 'https://cmg.ainternals.com',
    category: 'Code Quality & Analysis',
    tags: ['git', 'commit', 'message', 'generator'],
    status: 'live'
  },
  // Add more tools here as you build them
]

export const categories = [
  'All',
  'Daily Dev Annoyances',
  'Code Quality & Analysis'
]
