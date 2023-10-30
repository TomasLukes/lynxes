import { ReactElement } from "react";

import Footer from "@/components/ui/navigation/Footer";
import Navbar from "@/components/ui/navigation/Header/Navbar";

import "@/styles/globals.css";

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<ReactElement> => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Lynxes - Best Audio Gear</title>
    </head>
    <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
