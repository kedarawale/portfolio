import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kedar Awale | Portfolio Website',
  description: 'Personal portfolio website showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <div id="hidden-clustrmap" style={{ display: 'none' }}>
          <a href="https://clustrmaps.com/site/1c3uv"  title="ClustrMaps"><img src="//www.clustrmaps.com/map_v2.png?d=cYK6aAUUJlmWNvVe-gL30touWbR9KRYb9WHSXM3rVVI&cl=ffffff" /></a>
        </div>
      </body>
    </html>
  )
}

