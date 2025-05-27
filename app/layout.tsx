import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "aoi portfolio",
  icons: {
    icon: "/favicon2.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-mplus bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100">
        {children}
      </body>
    </html>
  );
}
