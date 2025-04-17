import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QueryWrapper from "./components/QueryWrapper";
import ReduxProvider from "./components/ReduxProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-montserrat",
  display: "swap", 
});

export const metadata: Metadata = {
  title: "ABR Live Radio",
  description: "ABR Live Radio Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ReduxProvider>
          <QueryWrapper>
            <Navbar />
            {children}
            <Footer />
          </QueryWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
