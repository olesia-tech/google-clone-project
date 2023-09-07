import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Project',
  description: 'Google Clone Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* footer */}
        <Footer />
        </body>
    </html>
  )
}
