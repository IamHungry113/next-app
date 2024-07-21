import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavHeader } from "./nav";
import Head from "next/head";
const name = "my app";

export const metadata: Metadata = {
  title: {
    default: name,
    template: name,
  },
  description: name,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${inter.className} overflow-hidden h-full w-full bg-[#f7f0f7]`}
      >
        <NavHeader></NavHeader>
        {children}
      </body>
    </html>
  );
}
