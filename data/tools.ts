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
  // Add more tools here as you build them
]

export const categories = [
  'All',
  'Daily Dev Annoyances',
  'Code Quality & Analysis',
  'Documentation & Communication',
  'Testing & QA',
  'Performance & Optimization',
  'Collaboration & Team Tools',
  'Learning & Career',
  'Data & API Tools',
  'DevOps & Infrastructure',
  'Git & Version Control',
  'Security & Privacy',
  'Frontend Specific',
  'Backend Specific',
  'Mobile Development',
  'Miscellaneous Productivity'
]
