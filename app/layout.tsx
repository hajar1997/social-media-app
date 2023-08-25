import '../styles/reset.css';
import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components';
import styles from '../styles/styles.module.css'

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Social Media App',
  description: 'Social Media Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="container mx-auto px-[30px] py-4">
        <div className={styles.body}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
