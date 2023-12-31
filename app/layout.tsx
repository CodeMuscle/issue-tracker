import '@radix-ui/themes/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Find and fix all the issues on your behalf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}

export { metadata }
