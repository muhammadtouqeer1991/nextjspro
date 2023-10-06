import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Embroidery Patches',
  description: 'Patches',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex,nofollow" />
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
