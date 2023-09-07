import Footer from '@/components/Footer'
import './../globals.css'
import { Inter } from 'next/font/google'
import SearchHeader from '@/components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Project',
  description: 'Google Clone Project',
}

export default function SearchLayout({ children }) {
  return (
    
      <div>
        <SearchHeader />
        {children}
        {/* footer */}
         </div>
     )
}