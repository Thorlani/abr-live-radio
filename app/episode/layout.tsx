import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "Episode | ABR Live Radio",
  description: "This is the categories page for the ABR Live Radio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
