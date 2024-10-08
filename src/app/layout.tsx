import type {Metadata} from "next";
import {Raleway, Playfair_Display, Sarabun} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Suspense} from "react";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

const sarabun = Sarabun({
  weight: ["100", "200", "300"],
  subsets: ["thai"],
  display: "swap",
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "21Maishop Cookbooks",
  description: "Cookbooks recipes from 21Maishop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-secondary-foreground font-sans antialiased",
          raleway.variable,
          playfairDisplay.variable,
          sarabun.variable,
          "font-sans bg-background text-foreground"
        )}>
        <header
          className={cn(
            "flex justify-between items-center sticky top-0 backdrop-blur bg-background lg:bg-transparent px-8 py-4 z-10 shadow-md text-lg"
          )}>
          <Link href="/">
            <h1>{`21MaiShop Cookbooks`}</h1>
          </Link>
        </header>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
