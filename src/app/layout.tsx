'use client'
import '@/styles/globals.css'
import Header from '@/components/ui/navigation/Header'
import Footer from '@/components/ui/navigation/Footer'
import { AuthContextProvider } from '@/context/AuthContext'
import { CartContextProvider } from '@/context/CartContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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