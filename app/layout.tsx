import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "01-next.js",
  description: "23.09.25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const date = new Date().getFullYear()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <footer style={{
            backgroundColor: 'grey'
          }}>
            <p>
              Created <time dateTime={date.toLocaleString()}>{date}</time>
            </p>
          </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
