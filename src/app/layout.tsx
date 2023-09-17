'use client';
import Footer from '@/components/ui/navigation/Footer';
import Header from '@/components/ui/navigation/Header/Header';
import { AuthContextProvider } from '@/context/AuthContext';
import { CartContextProvider } from '@/context/CartContext';

import '@/styles/globals.css';

export default ({
  children,
}: {
  children: React.ReactNode;
}) => <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width' />
        <title>Lynxes - Best Audio Gear</title>
      </head>
      <body>
        <AuthContextProvider>
          <CartContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartContextProvider>
        </AuthContextProvider>
      </body>
    </html>;
