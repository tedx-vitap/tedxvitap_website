import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import NavComp from "./(components)/NavComp";
import FooterComp from "./(components)/FooterComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEDx VITAP",
  description: "Official Site for TEDx VIT-AP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <div>
            <NavComp/>
            {children}
            <FooterComp/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
