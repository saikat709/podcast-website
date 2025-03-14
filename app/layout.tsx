import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./providers/ConvexClientProvider";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: [ "latin" ],
// });

export const metadata: Metadata = {
  title: "PodCast",
  description: "Generated your podcast",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {/* className={`${geistSans.variable} ${geistMono.variable}`} */}
        <ConvexClerkProvider > {children} </ConvexClerkProvider>
      </body>
    </html>
  );
}
