'use client'
import '@/styles/globals.css'
import Header from '@/components/ui/navigation/Header/Header'
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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lynxes - Best Audio Gear</title>
      </head>
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