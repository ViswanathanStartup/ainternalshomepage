import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AInternals - Building the Future of AI Development',
  description: 'The essential utilities that millions of AI developers use daily. Empowering developers to build, debug, and optimize AI applications with confidence.',
  keywords: 'AI development, LLM tools, AI debugging, AI developer tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
