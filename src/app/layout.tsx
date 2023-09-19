import { ReactElement } from 'react';

import Footer from '@/components/ui/navigation/Footer';
import Header from '@/components/ui/navigation/Header/Header';

import '@/styles/globals.css';

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<ReactElement> => (
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width' />
      <title>Lynxes - Best Audio Gear</title>
    </head>
    <body>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
