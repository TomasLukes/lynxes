'use client'
import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import Header from '@/components/ui/navigation/Header'
import Footer from '@/components/ui/navigation/Footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { CartContextProvider } from '@/context/CartContext'

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
        <AuthContextProvider>
          <CartContextProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </CartContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
