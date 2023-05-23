import './globals.css'
import { Manrope } from 'next/font/google'

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
      <body className={`${manrope.className} bg-primary-500 text-dark-900 `}>
        {children}
      </body>
    </html>
  )
}
