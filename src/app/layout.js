import { Geist, Geist_Mono, Inter, Londrina_Solid } from "next/font/google";
import "./globals.css";

import { Weight } from "lucide-react";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  subsets: ["latin"],
  weight: ["400", "900", "100"],
});


export const metadata = {
  title: "PetPal",
  description: "PetPal is a pet adoption portal connecting caring families with adorable pets. Discover pets waiting to fill your home with joy and love.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${londrinaSolid.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
