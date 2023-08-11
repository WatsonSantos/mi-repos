import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRIOLO',
  description: 'Dicionário de Crio Foro para Português',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
