import '../styles/reset.css';
import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Header, Sidebar } from '@/components';
import styles from '../styles/styles.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from '@/redux/provider';


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
      <body>
        <div className={`${styles.wrapper} lg:px-[80px] lg:py-4 bg-body text-white`}>
          <Header />
          <Providers>
            {children}
          </Providers>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  )
}
