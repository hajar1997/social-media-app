import '../styles/reset.css';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar, Sidebar } from '@/components';
import styles from '../styles/styles.module.css'
config.autoAddCss = false;
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
      <body className={`${styles.wrapper} container mx-auto px-[80px] py-4 bg-body text-white`}>
        <Navbar />
        {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  )
}
