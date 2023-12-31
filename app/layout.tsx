import '@radix-ui/themes/styles.css'
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Find and fix all the issues on your project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <Navbar />
          <main className="p-5">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}

export { metadata }
