import './globals.css'
import { Manrope } from 'next/font/google'
import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Lynxes',
  description: 'Lynxes e-shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={`${manrope.className} bg-light-200 text-dark-900 `}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
