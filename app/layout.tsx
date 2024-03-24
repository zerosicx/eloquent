import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eloquent",
  description: "Eloquent minimal note taking for maximum productivity",
  icons: {
    icon: [
      {
        media: "(prefers-color-theme: light)",
        url: "/icon.svg",
        href: "/icon.svg",
      },
      {
        media: "(prefers-color-theme: dark)",
        url: "/icon-white.svg",
        href: "/icon-white.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.svg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
