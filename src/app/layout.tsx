import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { siteConfig } from "@/configs/site";
import { Toaster } from "sonner";

const inter = FontSans({ subsets: ["latin"], variable: "--font-sans" });


export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.description}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
